<script lang='ts' setup>
import { filterHelper } from '@/utils/helper/table'

function req(): Promise<any> {
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
                }],
                total: 3,
            })
        }, 1000)
    })
}

const columns = computed(() => {
    return [
        {
            name: '姓名',
            prop: 'name',
            width: 200,
            sort: true,
            a: 1,
        },
        {
            name: '年龄',
            prop: 'age',
            width: 200,
            sort: true,
        },
        {
            name: '性别',
            prop: 'sex',
            width: 200,
            sort: true,
        },
    ]
})

const filters = computed(() => {
    return [
        filterHelper.input('姓名', 'name'),
        filterHelper.select('年纪', 'grade', [{ label: '一年级', value: 1 }, { label: '二年级', value: 2 }, { label: '三年级', value: 3 }]),
        filterHelper.date('创建日期', 'date'),
        filterHelper.dateRange('修改日期', 'updataDate'),
    ]
})

const datas = reactive({
    filterData: {},
    selected: [],
    pageData: {
        current: 1,
        size: 10,
    },
})
</script>

<template>
    <XContent>
        <XTable v-bind="{ columns, filters }" v-model="datas" />
    </XContent>
</template>

<style scoped lang='scss'>
</style>
