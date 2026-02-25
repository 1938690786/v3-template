/**
 * x-table 表格列工厂方法
 * 提供便捷的表格列创建方法，用于配置 x-table 组件的列定义
 * @example
 * const columns = [
 *     tableHelper.default('姓名', 'name'),
 *     tableHelper.dict('角色', 'role', roleDict),
 *     tableHelper.status('状态', 'status', statusList),
 *     tableHelper.slot('自定义', 'custom'),
 *     tableHelper.operate('操作', operateItems),
 * ]
 */
import { XTableTableDefault, XTableTableDict, XTableTableOperate, XTableTableSlot, XTableTableStatus } from './class'

export const tableHelper = {
    /**
     * 默认列 —— 直接展示字段值
     * @param {string} name 列标题
     * @param {string} prop 对应数据的key
     * @param {number} [width] 列宽度（单位px），默认自适应
     * @param {Record<string, any>} [others] 其他属性（show: 是否展示, tips: 提示文字）
     */
    default(
        name: string,
        prop: string,
        width?: number | undefined,
        others?: {
            show?: boolean
            tips?: string
            [key: string]: any
        },
    ) {
        return new XTableTableDefault(
            'default',
            name,
            prop,
            width,
            others,
        )
    },

    /**
     * 字典列 —— 根据字典映射展示对应文本
     * @param {string} name 列标题
     * @param {string} prop 对应数据的key
     * @param {Option[]} dict 字典映射表
     * @param {number} [width] 列宽度（单位px），默认自适应
     * @param {Record<string, any>} [others] 其他属性（show: 是否展示, tips: 提示文字）
     */
    dict(
        name: string,
        prop: string,
        dict: Option[],
        width?: number | undefined,
        others?: {
            show?: boolean
            tips?: string
            [key: string]: any
        },
    ) {
        return new XTableTableDict(
            'dict',
            name,
            prop,
            dict,
            width,
            others,
        )
    },

    /**
     * 状态列 —— 展示带颜色的状态标签
     * @param {string} name 列标题
     * @param {string} prop 对应数据的key
     * @param {Status[]} status 状态配置列表
     * @param {number} [width] 列宽度（单位px），默认自适应
     * @param {Record<string, any>} [others] 其他属性（show: 是否展示, tips: 提示文字）
     */
    status(
        name: string,
        prop: string,
        status: Status[],
        width?: number | undefined,
        others?: {
            show?: boolean
            tips?: string
            [key: string]: any
        },
    ) {
        return new XTableTableStatus(
            'status',
            name,
            prop,
            status,
            width,
            others,
        )
    },

    /**
     * 插槽列 —— 自定义列内容
     * @param {string} name 列标题
     * @param {string} prop 插槽名称
     * @param {number} [width] 列宽度（单位px），默认自适应
     * @param {Record<string, any>} [others] 其他属性（show: 是否展示, tips: 提示文字）
     */
    slot(
        name: string,
        prop: string,
        width?: number | undefined,
        others?: {
            show?: boolean
            tips?: string
            [key: string]: any
        },
    ) {
        return new XTableTableSlot(
            'slot',
            name,
            prop,
            width,
            others,
        )
    },
    /**
     * 操作列 —— 渲染操作按钮组
     * @param {string} name 列标题
     * @param {XTtableOperate[]} items 操作按钮配置列表
     * @param {number} [width] 列宽度（单位px）
     * @param {Record<string, any>} [others] 其他属性
     */
    operate(
        name: string,
        items: XTtableOperate[],
        width = 150,
        others = {
            align: 'center',
        },
    ) {
        return new XTableTableOperate(
            'operate',
            name,
            items,
            width,
            others,
        )
    },
}

/** 操作按钮配置项 */
export interface XTtableOperate {
    /** 按钮文字，支持函数动态生成 */
    label: string | ((row: any) => string)
    /** 是否展示，支持函数根据行数据动态判断 */
    show?: boolean | ((row: any) => boolean)
    /** 是否禁用，支持函数根据行数据和索引动态判断 */
    disabled?: boolean | ((row: any, index: number) => boolean)
    /** 其他 el-button 属性 */
    others?: {
        [key: string]: any
    }
}
