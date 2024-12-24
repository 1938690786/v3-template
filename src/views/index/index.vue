<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import { API, roleOption, statusOption } from './index'
import { tableHelper } from '@/utils/helper/table/table'
import { filterHelper } from '@/utils/helper/table/filters'

const tableRef = ref()
const listData = ref<any>([])

const datas = reactive({
    total: 0,
    filterData: {
        role: '',
        account: 1,
    },
    selected: [],
    tabData: '1',
    pageData: {
        page: 1,
        size: 10,
    },
})

function getData(): Promise<any> {
    return API().then((res: any) => {
        listData.value = res.data
        datas.total = res.total
    })
}

const columns = computed(() => {
    return [
        tableHelper.default('账号', 'account'),
        tableHelper.dict('角色', 'role', roleOption),
        tableHelper.default('注册时间', 'createTime'),
        tableHelper.default('上次登录时间', 'lastLogTime'),
        tableHelper.status('状态', 'status', statusOption),
        tableHelper.operate('操作', [{
            label: '禁用',
            handler(row: any) {
                ElMessage({
                    message: '禁用成功',
                    type: 'success',
                })
            },
        }]),
    ]
})
const filters = computed(() => {
    return [
        filterHelper.input('账号', 'account'),
        filterHelper.select('角色', 'role', roleOption),
        filterHelper.select('状态', ' status', statusOption),
        filterHelper.slot('插槽', 'test'),
    ]
})
const tabs = computed(() => {
    return roleOption
})

function changeItemStatus(type: 0 | 1) {
    console.log(datas.selected)
    if (datas.selected.length === 0) {
        ElMessage({
            message: '请先选择数据',
            type: 'warning',
        })
    }
    else {
        ElMessage({
            message: type === 0 ? '禁用成功' : '启用成功',
            type: 'success',
        })
        tableRef.value.refresh()
    }
}

function created() {
    console.log('created')
}
</script>

<template>
    <XContent>
        <XTable v-bind="{ columns, filters, listData, tabs }" ref="tableRef" v-model="datas" :request="getData" :select-enable="true" :index-enable="true">
            <!-- 表格右上角插槽 -->
            <template #handle>
                <el-button type="danger" @click="changeItemStatus(0)">
                    批量禁用
                </el-button>
                <el-button type="primary" @click="changeItemStatus(1)">
                    批量启用
                </el-button>
                <el-button type="primary" @click="created">
                    创建新数据
                </el-button>
            </template>
            <template #test>
                <div>这是插槽渲染的</div>
            </template>
            <template #status>
                <el-table-column
                    label="状态"
                    prop="status"
                >
                    <template #default="{ row }">
                        {{
                            row.status ? '启用' : '禁用'
                        }}
                    </template>
                </el-table-column>
            </template>
            <!-- 底部插槽 -->
            <template #footer>
                <el-button type="primary" @click="created">
                    底部插槽
                </el-button>
            </template>
        </XTable>
    </XContent>
</template>

<style scoped lang='scss'>
</style>
