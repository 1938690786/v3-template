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
const props = defineProps({
    // 请求方法
    request: Function,
    // 表格数据
    listData: { type: Array, default: () => [] },
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
    total: number
    filterData: Record<string, any>
    selected: Record<string, any>[]
    pageData: {
        page: number
        size: number
    }
}>()

const loading = ref(false)

const filtersSlot = computed(() => {
    const result = props.filters.filter((item: any) => {
        return item.type === 'slot'
    }).map((item: any) => item.code)
    return result
})

function getData() {
    if (typeof props.request === 'function') {
        try {
            loading.value = true
            props.request().then().finally(() => {
                loading.value = false
            })
        }
        catch (err) {
            console.log('repuset error====>', err)
            console.error('the bind value request must be "false" or a function returns Promise')
        }
    }
}

onMounted(() => {
    getData()
})
</script>

<template>
    <div class="x-table">
        <div class="filters">
            <Filters v-if="filters && filters.length" v-model="model.filterData" :filters="filters" @search="getData">
                <template v-for="item of filtersSlot" #[item]>
                    <slot :name="item" />
                </template>
            </Filters>
        </div>
        <div v-loading="loading" class="table-data">
            <TableData v-bind="{ listData, columns }" />
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
    justify-content: space-between;
    height: 100%;
    position: relative;
    .table-data {
        flex: 1;
        overflow-y: auto;
        margin-bottom: 15px;
    }
    .pagination {
        width: 100%;
        height: 60px;
        background: #fff;
    }
}
</style>
