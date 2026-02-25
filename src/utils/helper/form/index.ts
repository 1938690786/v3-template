/**
 * x-form 表单字段工厂方法
 * 提供便捷的字段创建方法，用于配置 x-form 组件
 * @example
 * const fields = [
 *     formHelper.input('用户名', 'username'),
 *     formHelper.select('角色', 'role', roleOptions),
 *     formHelper.switch('启用', 'enabled'),
 *     formHelper.dateRange('注册时间', 'createTime'),
 * ]
 */
import type { FormItemRule } from 'element-plus'
import type { DictionaryItem } from '@/utils/helper/table/filters/class'
import {
    XFormFieldCascader,
    XFormFieldCheckbox,
    XFormFieldDate,
    XFormFieldDateRange,
    XFormFieldDatetimeRange,
    XFormFieldInput,
    XFormFieldNumber,
    XFormFieldRadio,
    XFormFieldSelect,
    XFormFieldSlot,
    XFormFieldSwitch,
    XFormFieldTextarea,
} from './class'

export const formHelper = {
    /** 输入框 */
    input: (
        name: string,
        code: string,
        show = true,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldInput('input', name, code, show, placeholder, rules, disabled, others),

    /** 文本域 */
    textarea: (
        name: string,
        code: string,
        show = true,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldTextarea('textarea', name, code, show, placeholder, rules, disabled, others),

    /** 下拉选择 */
    select: (
        name: string,
        code: string,
        options: DictionaryItem[],
        show = true,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldSelect('select', name, code, options, show, placeholder, rules, disabled, others),

    /** 单选框 */
    radio: (
        name: string,
        code: string,
        options: DictionaryItem[],
        show = true,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldRadio('radio', name, code, options, show, rules, disabled, others),

    /** 复选框 */
    checkbox: (
        name: string,
        code: string,
        options: DictionaryItem[],
        show = true,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldCheckbox('checkbox', name, code, options, show, rules, disabled, others),

    /** 开关 */
    switch: (
        name: string,
        code: string,
        show = true,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldSwitch('switch', name, code, show, rules, disabled, others),

    /** 数字输入框 */
    number: (
        name: string,
        code: string,
        show = true,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldNumber('number', name, code, show, placeholder, rules, disabled, others),

    /** 单日期选择 */
    date: (
        name: string,
        code: string,
        show = true,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldDate('date', name, code, show, placeholder, rules, disabled, others),

    /** 日期范围选择 */
    dateRange: (
        name: string,
        code: string,
        show = true,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldDateRange('daterange', name, code, show, rules, disabled, others),

    /** 日期时间范围选择 */
    datetimeRange: (
        name: string,
        code: string,
        show = true,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldDatetimeRange('datetimerange', name, code, show, rules, disabled, others),

    /** 级联选择 */
    cascader: (
        name: string,
        code: string,
        options: DictionaryItem[],
        show = true,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) =>
        new XFormFieldCascader('cascader', name, code, options, show, rules, disabled, others),

    /** 插槽（自定义内容） */
    slot: (
        name: string,
        code: string,
        show = true,
        rules?: FormItemRule | FormItemRule[],
    ) =>
        new XFormFieldSlot('slot', name, code, show, rules),
}
