<script lang='ts' setup>
import { filterHelper } from '@/utils/helper/table'

function req() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [],
                total: 0,
            })
        }, 1000)
    })
}

const columns = computed(() => {
    return []
})

const filters = computed(() => {
    return [
        filterHelper.input('姓名', 'name'),
        filterHelper.select('年纪', 'grade', [{ label: '一年级', value: 1 }, { label: '二年级', value: 2 }, { label: '三年级', value: 3 }]),
        filterHelper.date('创建日期', 'date'),
    ]
})

const datas = reactive({
    req: undefined,
    total: 0,
    selected: [],
    pagination: true,
    pageKey: 'page',
    sizeKey: 'size',
    rowKey: 'id',
})

function getData() {
    console.log(76786)
}
</script>

<template>
    <XContent>
        <XTable v-bind="{ columns, filters }" v-model="datas" :get-data="getData" />
    </XContent>
</template>

<style scoped lang='scss'>
</style>
