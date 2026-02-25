<script lang='ts' setup>
/**
 * x-table 组件示例页面
 * 演示所有筛选器类型、表格列类型、插槽用法和交互功能
 */
import { ElMessage } from 'element-plus'
import { API, departmentOption, roleOption, statusOption } from './index'
import { tableHelper } from '@/utils/helper/table/table'
import { filterHelper } from '@/utils/helper/table/filters'

const tableRef = ref()
const listData = ref<any>([])

const datas = reactive({
    total: 0,
    filterData: {} as Record<string, any>,
    selected: [] as any[],
    tabData: ''  ,
    pageData: {
        page: 1,
        size: 10,
    },
})

function getData(): Promise<any> {
    return API(datas.filterData).then((res: any) => {
        listData.value = res.data
        datas.total = res.total
    })
}

/** 表格列配置：演示所有列类型 */
const columns = computed(() => {
    return [
        tableHelper.default('账号', 'account'),
        tableHelper.dict('角色', 'role', roleOption),
        tableHelper.status('状态', 'status', statusOption),
        tableHelper.default('年龄', 'age', 80),
        tableHelper.default('生日', 'birthday'),
        tableHelper.default('注册时间', 'createTime'),
        tableHelper.default('最近登录', 'lastLogTime', undefined, { sortable: 'custom' }),
        tableHelper.slot('部门', 'department'),
        tableHelper.operate('操作', [
            {
                label: '编辑',
            },
            {
                label: '禁用',
                show: (row: any) => row.status === 1,
            },
            {
                label: '启用',
                show: (row: any) => row.status === 0,
            },
            {
                label: (row: any) => row.status === 1 ? '重置密码' : '激活',
                disabled: (row: any) => row.status === 0,
            },
        ], 220),
    ]
})

/** 筛选项配置：演示所有筛选器类型 */
const filters = computed(() => {
    return [
        filterHelper.input('账号', 'account'),
        filterHelper.select('角色', 'role', roleOption),
        filterHelper.select('状态', 'status', statusOption),
        filterHelper.number('年龄', 'age'),
        filterHelper.date('生日', 'birthday'),
        filterHelper.dateRange('注册时间', 'createTime'),
        filterHelper.datetimeRange('登录时间', 'lastLogTime'),
        filterHelper.cascader('部门', 'department', departmentOption),
        filterHelper.slot('自定义', 'customFilter'),
    ]
})

/** tabs 标签页配置 */
const tabs = computed(() => roleOption)

/** 批量操作 */
function changeItemStatus(type: 0 | 1) {
    if (datas.selected.length === 0) {
        ElMessage.warning('请先选择数据')
    }
    else {
        ElMessage.success(type === 0 ? '批量禁用成功' : '批量启用成功')
        tableRef.value.refresh()
    }
}

/** 操作按钮点击回调 */
function operateClick(label: string, row: any, _index: number) {
    ElMessage.info(`点击了「${label}」，账号：${row.account}`)
}
</script>

<template>
    <XContent>
        <XTable
            ref="tableRef"
            v-model="datas"
            v-bind="{ columns, filters, listData, tabs }"
            :request="getData"
            :select-enable="true"
            :index-enable="true"
            @operate="operateClick"
        >
            <!-- 表格右上角操作区 -->
            <template #handle>
                <el-button type="danger" @click="changeItemStatus(0)">
                    批量禁用
                </el-button>
                <el-button type="primary" @click="changeItemStatus(1)">
                    批量启用
                </el-button>
            </template>

            <!-- 筛选栏自定义插槽 -->
            <template #customFilter>
                <el-tag>自定义筛选插槽</el-tag>
            </template>

            <!-- 表格列自定义插槽：部门 -->
            <template #department>
                <el-table-column label="部门" prop="department">
                    <template #default="{ row }">
                        <el-tag v-if="row.department" size="small">
                            {{ row.department[row.department.length - 1] }}
                        </el-tag>
                        <span v-else>-</span>
                    </template>
                </el-table-column>
            </template>

            <!-- 底部插槽 -->
            <template #footer>
                <span style="color: #909399; font-size: 12px;">
                    已选择 {{ datas.selected.length }} 条数据
                </span>
            </template>
        </XTable>
    </XContent>
</template>
