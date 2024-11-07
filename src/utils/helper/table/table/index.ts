import { XTableTableDefault, XTableTableOperate, XTableTableSlot } from './class'

/**
 * 表格列配置
 */
export const tableHelper = {
    /**
     * 默认项
     *
     * @param {string} name 对应列的 title
     * @param {string} prop 对应数据
     * @param {number | undefined} width 列的宽度，默认自适应
     * @param {Record<string, any>} [others] 其他Table-column 属性，show：是否展示 （默认true） tips: 提示文字
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
    operate(
        name: string,
        items: XTtableOperate[],
        width?: number | undefined,
        others?: {
            show?: boolean
            tips?: string
            [key: string]: any
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

export interface XTtableOperate {
    /** 标签（按钮文字） */
    label: string | ((row: any) => string)
    /** 点击事件 */
    handler: (row: any, index: number) => void
    /** 是否展示（仅在===false时不展示） */
    show?: boolean | ((row: any, index: number) => boolean)
    /** 是否禁用（仅在===false时禁用） */
    disabled?: boolean | ((row: any, index: number) => boolean)
    /** 按钮颜色 */
    color?: string
}
