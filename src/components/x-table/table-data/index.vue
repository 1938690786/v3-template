<script lang='ts' setup>
// 定义列的接口
interface Column {
    name: string
    prop: string
    width?: number
    sort?: boolean
    align?: 'left' | 'right' | 'center'
}
defineProps({
    columns: { type: Array as PropType<Column[]>, default: () => [] },
})
const model = defineModel()
</script>

<template>
    <el-table :data="model">
        <el-table-column v-for="(item, index) of columns" :key="index" :label="item.name" :prop="item.prop" />
    </el-table>
</template>

<style scoped lang='scss'>
</style>
