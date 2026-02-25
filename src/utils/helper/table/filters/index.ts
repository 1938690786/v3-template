/**
 * x-table 筛选器工厂方法
 * 提供便捷的筛选项创建方法，用于配置 x-table 组件的筛选栏
 * @example
 * const filters = [
 *     filterHelper.input('账号', 'account'),
 *     filterHelper.select('角色', 'role', roleOptions),
 *     filterHelper.dateRange('注册时间', 'createTime'),
 *     filterHelper.date('生日', 'birthday'),
 *     filterHelper.datetimeRange('操作时间', 'operateTime'),
 *     filterHelper.number('年龄', 'age'),
 * ]
 */
import type { DictionaryItem } from './class'
import { XTableFilterCascader, XTableFilterDate, XTableFilterDateRange, XTableFilterDatetimeRange, XTableFilterInput, XTableFilterNumber, XTableFilterSelect, XTableFilterSlot } from './class'

export const filterHelper = {
    /**
     * 输入框
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据的key
     * @param {boolean} [show] 是否展示（默认展示，传入false隐藏）
     * @param {string} [placeholder] 占位文案
     * @param {Record<string, any>} [others] 其他element-plus的input参数
     */
    input: (
        name: string,
        code: string,
        show = true,
        placeholder?: string | undefined,
        others?: Record<string, any>,
    ) =>
        new XTableFilterInput(
            'input',
            name,
            code,
            show,
            placeholder,
            others,
        ),

    /**
     * 下拉选择
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据的key
     * @param {DictionaryItem[]} options 下拉菜单列表
     * @param {boolean} [show] 是否展示（默认展示，传入false隐藏）
     * @param {string} [placeholder] 占位文案
     * @param {Record<string, any>} [others] 其他element-plus的select参数
     */
    select: (
        name: string,
        code: string,
        options: DictionaryItem[],
        show = true,
        placeholder?: string,
        others?: Record<string, any>,
    ) => {
        return new XTableFilterSelect(
            'select',
            name,
            code,
            options,
            show,
            placeholder,
            others,
        )
    },

    /**
     * 日期范围选择器
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据的key
     * @param {boolean} [show] 是否展示（默认展示，传入false隐藏）
     * @param {Record<string, any>} [others] 其他element-plus的date-picker参数
     */
    dateRange: (
        name: string,
        code: string,
        show = true,
        others?: Record<string, any>,
    ) =>
        new XTableFilterDateRange(
            'daterange',
            name,
            code,
            show,
            others,
        ),

    /**
     * 单日期选择器
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据的key
     * @param {boolean} [show] 是否展示（默认展示，传入false隐藏）
     * @param {string} [placeholder] 占位文案
     * @param {Record<string, any>} [others] 其他element-plus的date-picker参数
     */
    date: (
        name: string,
        code: string,
        show = true,
        placeholder?: string,
        others?: Record<string, any>,
    ) =>
        new XTableFilterDate(
            'date',
            name,
            code,
            show,
            placeholder,
            others,
        ),

    /**
     * 日期时间范围选择器
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据的key
     * @param {boolean} [show] 是否展示（默认展示，传入false隐藏）
     * @param {Record<string, any>} [others] 其他element-plus的date-picker参数
     */
    datetimeRange: (
        name: string,
        code: string,
        show = true,
        others?: Record<string, any>,
    ) =>
        new XTableFilterDatetimeRange(
            'datetimerange',
            name,
            code,
            show,
            others,
        ),

    /**
     * 数字输入框
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据的key
     * @param {boolean} [show] 是否展示（默认展示，传入false隐藏）
     * @param {string} [placeholder] 占位文案
     * @param {Record<string, any>} [others] 其他element-plus的input-number参数
     */
    number: (
        name: string,
        code: string,
        show = true,
        placeholder?: string,
        others?: Record<string, any>,
    ) =>
        new XTableFilterNumber(
            'number',
            name,
            code,
            show,
            placeholder,
            others,
        ),

    /**
     * 多级下拉选择（级联选择器）
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据的key
     * @param {DictionaryItem[]} options 级联选项数据
     * @param {boolean} [show] 是否展示（默认展示，传入false隐藏）
     * @param {Record<string, any>} [others] 其他element-plus的cascader参数
     */
    cascader: (
        name: string,
        code: string,
        options: DictionaryItem[],
        show = true,
        others?: Record<string, any>,
    ) =>
        new XTableFilterCascader(
            'cascader',
            name,
            code,
            options,
            show,
            others,
        ),

    /**
     * 插槽（自定义筛选内容）
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据的key（同时作为插槽名）
     * @param {boolean} [show] 是否展示（默认展示，传入false隐藏）
     */
    slot: (name: string, code: string, show = true) =>
        new XTableFilterSlot('slot', name, code, show),
}
