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
    // tabs 筛选项
    tabs: { type: Array<any>, default: () => [] },
    // 表格列
    columns: { type: Array as PropType<Column[]>, default: () => [] },
    // 表格行主键
    rowKey: { type: String, default: () => 'id' },
    // 是否分页
    pagination: { type: Boolean, default: true },
    // 是否多选
    selectEnable: { type: Boolean, default: false },
    // 是否显示序号
    indexEnable: { type: Boolean, default: false },
})

const model: any = defineModel<{
    total: number
    filterData: Record<string, any>
    selected: any[]
    tabData: string
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
        <div v-loading="loading" class="table-center">
            <div class="table-wrapper">
                <!-- tabs与操作栏 -->
                <div class="tabs-handle">
                    <div>
                        <el-radio-group v-if="tabs && tabs.length" v-model="model.tabData">
                            <template v-for="(item, index) of tabs" :key="index">
                                <el-radio-button :value="item.value">
                                    {{ item.name }}
                                </el-radio-button>
                            </template>
                        </el-radio-group>
                    </div>
                    <div class="handle-area">
                        <slot name="handle" />
                    </div>
                </div>
                <TableData v-bind="{ listData, columns, indexEnable, selectEnable }" v-model="model" />
            </div>
        </div>
        <div class="pagination">
            <Pagination v-if="pagination" v-model="model" @change="getData">
                <template #footer>
                    <slot name="footer" />
                </template>
            </Pagination>
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
    .table-center {
        flex: 1;
        overflow-y: auto;
        margin-bottom: 15px;
        background: #fff;
        padding: 20px;
        .table-wrapper {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .tabs-handle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
    }
    .pagination {
        width: 100%;
        height: 60px;
        background: #fff;
    }
}
</style>
