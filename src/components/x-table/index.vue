<script lang='ts' setup>
import Filters from './filters/index.vue'
import TableContent from './table-data/index.vue'
import Pagination from './pagination/index.vue'

defineProps({
    // 表格筛选项
    filters: { type: Array, default: () => [] },
    // 表格列
    columns: { type: Array, default: () => [] },
    // 分页条每页数量
    pageSize: { type: Number, default: 10 },
    // 表格行主键
    rowKey: { type: String, default: () => 'id' },
    // 页码参数
    pageKey: { type: String, default: 'page' },
    // 分页参数
    sizeKey: { type: String, default: 'size' },
    // 是否分页
    pagination: { type: Boolean, default: true },
})
</script>

<template>
    <div class="x-table">
        <Filters v-if="filters && filters.length" :filters="filters" />
        <TableContent />
        <Pagination />
    </div>
</template>

<style scoped lang='scss'>
.x-table {
}
</style>
