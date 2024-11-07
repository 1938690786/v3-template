<script lang='ts' setup>
defineProps({
    // 表格筛选项
    item: { type: Object, default: () => {
        return {}
    } },
})

const model = defineModel()
</script>

<template>
    <div class="filter-item">
        <div class="item-label">
            {{ item.name }}:
        </div>
        <div class="item-value">
            <!-- input -->
            <el-input v-if="item.type === 'input'" v-model="model" clearable v-bind="item.others" />
            <!-- select -->
            <el-select
                v-else-if="item.type === 'select'"
                v-model="model"
                clearable
                v-bind="item.others" :option="item.options"
                style="width: 240px"
            >
                <el-option v-for="option in item.options" :key="option.value" :label="option.label" :value="option.value" />
            </el-select>
            <!-- datarange -->
            <el-date-picker
                v-else-if="item.type === 'daterange'"
                v-model="model"
                class="date-range"
                type="daterange"
                range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                clearable
                v-bind="item.others"
            />
            <!-- cascader -->
            <el-cascader v-else-if="item.type === 'cascader'" v-model="model" :options="item.options" clearable v-bind="item.others" />
            <!-- slot -->
            <template v-else-if="item.type === 'slot'">
                <slot :name="item.code" />
            </template>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.filter-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .item-label {
        width: 80px;
        color: #606266;
        font-size: 14px;
        flex-shrink: 0;
        text-align: right;
        margin-right: 10px;
    }
    .item-value {
        flex: 1;
        .date-range {
            width: 120px !important;
        }
    }
}
</style>
