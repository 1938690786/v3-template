<script lang='ts' setup>
/**
 * x-form 表单字段组件
 * 根据字段配置的 type 渲染对应的表单控件
 * 支持类型：input / textarea / select / radio / checkbox / switch / number / date / daterange / datetimerange / cascader / slot
 */
defineProps({
    /** 字段配置对象 */
    item: { type: Object, default: () => ({}) },
    /** 是否禁用（合并全局与字段级别） */
    disabled: { type: Boolean, default: false },
})

const model = defineModel()
</script>

<template>
    <!-- 输入框 -->
    <el-input
        v-if="item.type === 'input'"
        v-model="model"
        :placeholder="item.placeholder"
        :disabled="disabled"
        clearable
        v-bind="item.others"
    />
    <!-- 文本域 -->
    <el-input
        v-else-if="item.type === 'textarea'"
        v-model="model"
        type="textarea"
        :placeholder="item.placeholder"
        :disabled="disabled"
        v-bind="item.others"
    />
    <!-- 下拉选择 -->
    <el-select
        v-else-if="item.type === 'select'"
        v-model="model"
        class="w-full"
        :placeholder="item.placeholder"
        :disabled="disabled"
        clearable
        v-bind="item.others"
    >
        <el-option
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :disabled="option.disabled"
        />
    </el-select>
    <!-- 单选框 -->
    <el-radio-group
        v-else-if="item.type === 'radio'"
        v-model="model"
        :disabled="disabled"
        v-bind="item.others"
    >
        <el-radio
            v-for="option in item.options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
        >
            {{ option.label }}
        </el-radio>
    </el-radio-group>
    <!-- 复选框 -->
    <el-checkbox-group
        v-else-if="item.type === 'checkbox'"
        v-model="model"
        :disabled="disabled"
        v-bind="item.others"
    >
        <el-checkbox
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :disabled="option.disabled"
        />
    </el-checkbox-group>
    <!-- 开关 -->
    <el-switch
        v-else-if="item.type === 'switch'"
        v-model="model"
        :disabled="disabled"
        v-bind="item.others"
    />
    <!-- 数字输入框 -->
    <el-input-number
        v-else-if="item.type === 'number'"
        v-model="model"
        class="w-full"
        controls-position="right"
        :placeholder="item.placeholder"
        :disabled="disabled"
        v-bind="item.others"
    />
    <!-- 单日期选择 -->
    <el-date-picker
        v-else-if="item.type === 'date'"
        v-model="model"
        class="w-full"
        type="date"
        :placeholder="item.placeholder"
        :disabled="disabled"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        clearable
        v-bind="item.others"
    />
    <!-- 日期范围选择 -->
    <el-date-picker
        v-else-if="item.type === 'daterange'"
        v-model="model"
        class="w-full"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :disabled="disabled"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        clearable
        v-bind="item.others"
    />
    <!-- 日期时间范围选择 -->
    <el-date-picker
        v-else-if="item.type === 'datetimerange'"
        v-model="model"
        class="w-full"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :disabled="disabled"
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
        clearable
        v-bind="item.others"
    />
    <!-- 级联选择 -->
    <el-cascader
        v-else-if="item.type === 'cascader'"
        v-model="model"
        class="w-full"
        :options="item.options"
        :disabled="disabled"
        clearable
        v-bind="item.others"
    />
    <!-- 插槽（自定义内容） -->
    <template v-else-if="item.type === 'slot'">
        <slot :name="item.code" />
    </template>
</template>

<style scoped lang='scss'>
:deep(.el-date-editor.el-input) {
    width: 100%;
}
:deep(.el-range-editor.el-input__wrapper) {
    width: 100%;
}
:deep(.el-cascader) {
    width: 100%;
}
:deep(.el-input-number) {
    width: 100%;
}
</style>
