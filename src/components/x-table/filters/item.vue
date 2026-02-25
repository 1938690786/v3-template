<script lang='ts' setup>
/**
 * x-table 筛选项组件
 * 根据筛选项配置的 type 渲染对应的表单控件
 * 支持类型：input / select / daterange / date / datetimerange / number / cascader / slot
 */
defineProps({
    /** 筛选项配置对象 */
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
            <!-- 输入框 -->
            <el-input v-if="item.type === 'input'" v-model="model" clearable v-bind="item.others" />
            <!-- 下拉选择 -->
            <el-select
                v-else-if="item.type === 'select'"
                v-model="model"
                clearable
                v-bind="item.others" :option="item.options"
                style="width: 240px"
            >
                <el-option v-for="option in item.options" :key="option.value" :label="option.label" :value="option.value" />
            </el-select>
            <!-- 日期范围选择器 -->
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
            <!-- 单日期选择器 -->
            <el-date-picker
                v-else-if="item.type === 'date'"
                v-model="model"
                type="date"
                :placeholder="item.placeholder || '请选择日期'"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                clearable
                v-bind="item.others"
            />
            <!-- 日期时间范围选择器 -->
            <el-date-picker
                v-else-if="item.type === 'datetimerange'"
                v-model="model"
                class="datetime-range"
                type="datetimerange"
                range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间"
                format="YYYY-MM-DD HH:mm:ss"
                value-format="YYYY-MM-DD HH:mm:ss"
                clearable
                v-bind="item.others"
            />
            <!-- 数字输入框 -->
            <el-input-number
                v-else-if="item.type === 'number'"
                v-model="model"
                controls-position="right"
                :placeholder="item.placeholder || '请输入'"
                v-bind="item.others"
            />
            <!-- 级联选择器 -->
            <el-cascader v-else-if="item.type === 'cascader'" v-model="model" :options="item.options" clearable v-bind="item.others" />
            <!-- 插槽（自定义内容） -->
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
        min-width: 80px;
        width: auto;
        white-space: nowrap;
        color: #606266;
        font-size: 14px;
        flex-shrink: 0;
        text-align: right;
        margin-right: 10px;
    }
    .item-value {
        flex: 1;
        .date-range {
            width: 260px !important;
        }
        .datetime-range {
            width: 380px !important;
        }
    }
}
</style>
