<script lang='ts' setup>
/**
 * x-table 核心表格组件
 * 集成筛选栏、数据表格、分页器，支持 tabs 切换、多选、排序等功能
 */
import Filters from './filters/index.vue'
import TableData from './table-data/index.vue'
import Pagination from './pagination/index.vue'

const props = defineProps({
    /** 数据请求方法，返回 Promise */
    request: Function,
    /** 表格数据 */
    listData: { type: Array, default: () => [] },
    /** 筛选项配置列表 */
    filters: { type: Array, default: () => [] },
    /** tabs 标签页配置 */
    tabs: { type: Array<Option>, default: () => [] },
    /** 表格列配置 */
    columns: { type: Array<any>, default: () => [] },
    /** 表格行主键 */
    rowKey: { type: String, default: () => 'id' },
    /** 是否启用分页 */
    pagination: { type: Boolean, default: true },
    /** 是否启用多选 */
    selectEnable: { type: Boolean, default: false },
    /** 是否显示序号列 */
    indexEnable: { type: Boolean, default: false },
})

const emits = defineEmits<{
    (e: 'operate', label: string, row: any, index: number): void
}>()

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

const tableColumnSlots = computed(() => {
    const result = props.columns.filter((item: any) => {
        return item.type === 'slot'
    }).map((item: any) => item.prop)
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
            console.error('请求错误:', err)
        }
    }
}

function refresh() {
    getData()
}

onMounted(() => {
    getData()
})

function operateClick(label: string, row: any, index: number) {
    emits('operate', label, row, index)
}

defineExpose({ refresh })
</script>

<template>
    <div class="x-table">
        <!-- 筛选栏：仅在有筛选项时渲染 -->
        <div v-if="filters && filters.length" class="filters">
            <Filters v-model="model.filterData" :filters="filters" @search="getData">
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
                        <el-radio-group v-if="tabs && tabs.length" v-model="model.tabData" @change="getData">
                            <template v-for="(item, index) of tabs" :key="index">
                                <el-radio-button :value="item.value">
                                    {{ item.label }}
                                </el-radio-button>
                            </template>
                        </el-radio-group>
                    </div>
                    <div class="handle-area">
                        <slot name="handle" />
                    </div>
                </div>
                <TableData v-bind="{ listData, columns, indexEnable, selectEnable }" v-model="model" @refresh="refresh" @operate="operateClick">
                    <template v-for="item of tableColumnSlots" #[item]>
                        <slot :name="item" />
                    </template>
                </TableData>
            </div>
        </div>
        <!-- 分页器：仅在启用分页时渲染 -->
        <div v-if="pagination" class="pagination">
            <Pagination v-model="model" @change="getData">
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
        overflow-x: hidden;
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
