<script lang='ts' setup>
/**
 * x-table 筛选栏组件
 * 使用 el-row/el-col 栅格布局排列筛选项，支持通过 span 控制列宽
 */
import FilterItem from './item.vue'

const props = defineProps({
    /** 筛选项配置列表 */
    filters: { type: Array<any>, default: () => [] },
})

const emits = defineEmits(['search', 'reset'])

const model = defineModel<any>({ default: {} })

const filtersSlot = computed(() => {
    if (!props.filters || !Array.isArray(props.filters)) {
        return []
    }
    return props.filters
        .filter((item: any) => { return item.type === 'slot' })
        .map((item: any) => item.code)
})

/** 查询 */
function search() {
    emits('search')
}

/** 重置 */
function reset() {
    model.value = {}
    emits('search')
}
</script>

<template>
    <div class="x-table-filters">
        <el-row :gutter="20">
            <el-col
                v-for="item of filters"
                :key="item.code"
                :lg="6"
                :span="8"
            >
                <FilterItem v-if="item.show" v-model="model[item.code]" :item="item">
                    <template v-for="slot of filtersSlot" #[slot]>
                        <slot :name="slot" />
                    </template>
                </FilterItem>
            </el-col>
        </el-row>
        <!-- 查询/重置按钮 -->
        <div class="filter-actions">
            <el-button type="primary" @click="search">
                查询
            </el-button>
            <el-button @click="reset">
                重置
            </el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.x-table-filters {
    width: 100%;
    background: #fff;
    padding: 20px 10px 0;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 15px;
    .filter-actions {
        display: flex;
        justify-content: flex-end;
        padding: 0 10px 16px;
    }
}
</style>
