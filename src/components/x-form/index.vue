<script lang='ts' setup>
/**
 * x-form 表单容器组件
 * 基于 el-form 封装，支持配置化字段渲染、表单验证、栅格自适应布局
 * 底部操作区通过 formFooter 插槽由页面实现
 */
import type { FormInstance, FormRules } from 'element-plus'
import FormItem from './item.vue'

const props = defineProps({
    /** 字段配置列表 */
    fields: { type: Array<any>, default: () => [] },
    /** 全局标签宽度 */
    labelWidth: { type: String, default: '100px' },
    /** 表单内容宽度（如 '600px'、'50%'） */
    contentWidth: { type: String, default: '600px' },
    /** 全局禁用 */
    disabled: { type: Boolean, default: false },
})

const emits = defineEmits(['submit', 'reset'])

const model = defineModel<Record<string, any>>({ default: () => ({}) })

const formRef = ref<FormInstance>()

/** 从字段配置中聚合验证规则 */
const formRules = computed<FormRules>(() => {
    const rules: FormRules = {}
    props.fields.forEach((field: any) => {
        if (field.rules) {
            rules[field.code] = Array.isArray(field.rules) ? field.rules : [field.rules]
        }
    })
    return rules
})

/** 收集 slot 类型字段的 code 用于插槽透传 */
const fieldSlots = computed(() => {
    return props.fields
        .filter((item: any) => item.type === 'slot')
        .map((item: any) => item.code)
})

/** 提交表单 */
async function submit() {
    if (!formRef.value)
        return
    await formRef.value.validate((valid) => {
        if (valid) {
            emits('submit', { ...model.value })
        }
    })
}

/** 重置表单 */
function reset() {
    if (formRef.value) {
        formRef.value.resetFields()
    }
    emits('reset')
}

/** 验证表单 */
function validate() {
    return formRef.value?.validate()
}

defineExpose({
    submit,
    validate,
    reset,
    formRef,
})
</script>

<template>
    <div class="x-form">
        <div class="form-content">
            <el-form
                ref="formRef"
                :model="model"
                :rules="formRules"
                :label-width="labelWidth"
                :disabled="disabled"
                :style="{ width: contentWidth }"
            >
                <el-form-item
                    v-for="item of fields"
                    v-show="item.show !== false"
                    :key="item.code"
                    :label="item.name"
                    :prop="item.code"
                >
                    <FormItem
                        v-model="model[item.code]"
                        :item="item"
                        :disabled="disabled || !!item.disabled"
                    >
                        <template v-for="slot of fieldSlots" :key="slot" #[slot]>
                            <slot :name="slot" />
                        </template>
                    </FormItem>
                </el-form-item>
            </el-form>
        </div>
        <div class="form-footer">
            <slot name="formFooter">
                <el-button type="primary" @click="submit">
                    提交
                </el-button>
                <el-button @click="reset">
                    重置
                </el-button>
            </slot>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.x-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .form-content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        background: #fff;
        padding: 20px 20px 0;
    }
    .form-footer {
        width: 100%;
        height: 60px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #f0f0f0;
    }
}
</style>
