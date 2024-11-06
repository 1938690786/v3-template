<script lang='ts' setup>
import Filters from './filters/index.vue'
import TableData from './table-data/index.vue'
import Pagination from './pagination/index.vue'

// 定义列的接口
interface Column {
    name: string
    prop: string
    width?: number
    sort?: boolean
    align?: 'left' | 'right' | 'center'
}
defineProps({
    // 表格筛选项
    filters: { type: Array, default: () => [] },
    // 表格列
    columns: { type: Array as PropType<Column[]>, default: () => [] },
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

const model: any = defineModel<{
    req: [undefined, () => Promise<any>]
    params: Record<string, any>
    total: number
    selected: Record<string, any>[]
    pagination: boolean
    pageKey: string
    sizeKey: string
    rowKey: string
}>()

const datas = ref<Record<string, any>[]>([])

function getData() {
    console.log(11)
}
</script>

<template>
    <div class="x-table">
        <div class="filters">
            <Filters v-if="filters && filters.length" v-model="model.params" :filters="filters" :get-data="getData" />
        </div>
        <div class="table-data">
            <TableData v-model="datas" :columns="columns" />
        </div>
        <div class="pagination">
            <Pagination />
        </div>
    </div>
</template>

<style scoped lang='scss'>
.x-table {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: solid 1px pink;
    position: relative;
    .table-data {
        flex: 1;
    }
    .pagination {
        width: 100%;
        height: 100px;
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
</style>
