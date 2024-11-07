<script lang='ts' setup>
import { tableHelper } from '@/utils/helper/table/table'
import { filterHelper } from '@/utils/helper/table/filters'

const listData = ref<any>([])

const datas = reactive({
    total: 0,
    filterData: {},
    selected: [],
    pageData: {
        page: 1,
        size: 10,
    },
})
function API() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [{
                    name: '张三',
                    age: 12,
                    sex: '男',
                }, {
                    name: '李四',
                    age: 13,
                    sex: '女',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }, {
                    name: '王五',
                    age: 14,
                    sex: '男',
                }],
                total: 11,
            })
        }, 1000)
    })
}

function getData(): Promise<any> {
    return API().then((res: any) => {
        listData.value = res.data
        datas.total = res.total
    })
}

const columns = computed(() => {
    return [
        tableHelper.default('姓名', 'name'),
        tableHelper.default('年龄', 'age'),
        tableHelper.default('性别', 'sex', undefined, { tips: '这是一个提示' }),
    ]
})
const filters = computed(() => {
    return [
        filterHelper.input('姓名', 'name'),
        filterHelper.select('年纪', 'grade', [{ label: '一年级', value: 1 }, { label: '二年级', value: 2 }, { label: '三年级', value: 3 }]),
        filterHelper.dateRange('修改日期', 'updataDate'),
        filterHelper.cascader('区域', 'area', [{ label: '北京', value: 1, children: [{ label: '朝阳', value: 11 }] }, { label: '上海', value: 2, children: [{ label: '浦东', value: 222 }] }]),
        filterHelper.slot('插槽', 'test'),
    ]
})
</script>

<template>
    <XContent>
        <XTable v-bind="{ columns, filters, listData }" v-model="datas" :request="getData">
            <template #test>
                <div>这是插槽渲染的</div>
            </template>
        </XTable>
    </XContent>
</template>

<style scoped lang='scss'>
</style>
