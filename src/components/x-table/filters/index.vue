<script lang='ts' setup>
import FilterItem from './item.vue'

const props = defineProps({
    // 表格筛选项
    filters: { type: Array<any>, default: () => [] },
})

const emits = defineEmits(['search', 'reset'])

const model = defineModel<any>({ default: {} })

const filtersSlot = computed(() => {
    const result = props.filters.filter((item: any) => {
        return item.type === 'slot'
    }).map((item: any) => item.code)
    return result
})

// 查询
function search() {
    emits('search')
}

// 重置
function reset() {
    model.value = {}
    emits('search')
}
</script>

<template>
    <div class="x-table-filters">
        <div class="filter-container">
            <!-- <el-row :gutter="20">
                <el-col  :lg="6" :span="8"> -->
            <template v-for="item of filters" :key="item">
                <FilterItem v-if="item.show" v-model="model[item.code]" :item="item">
                    <template v-for="slot of filtersSlot" #[slot]>
                        <slot :name="slot" />
                    </template>
                </FilterItem>
            </template>
            <el-button class="btn" type="primary" style="margin-left: 12px" @click="search">
                查询
            </el-button>
            <el-button class="btn" @click="reset">
                重置
            </el-button>
            <!-- </el-col>
            </el-row> -->
        </div>
    </div>
</template>

<style scoped lang='scss'>
.x-table-filters {
    width: 100%;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 15px;
    .filter-container {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .btn {
        margin-bottom: 20px;
    }
}
</style>
