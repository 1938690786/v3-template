/**
 * x-table 表格列数据模型
 * 定义所有表格列类型的数据类，用于 x-table 组件的列配置
 */
import type { XTtableOperate } from '.'

/**
 * 默认列 —— 直接展示字段值
 * @example tableHelper.default('姓名', 'name')
 */
export class XTableTableDefault {
    /** 类型 */
    type: XTableTableType
    /** 表格列 header */
    name: string
    /** 对应数据的key */
    prop: string
    /** 宽度 */
    width?: number | undefined
    others?: {
        /** 是否展示（仅在===false时不展示） */
        show?: boolean
        /** 是否排序 */
        sort?: boolean
        /** tips */
        tips?: string
        /** 其他配置项 */
        [key: string]: any
    }

    constructor(
        type: XTableTableType,
        name: string,
        prop: string,
        width?: number,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.prop = prop
        this.width = width
        this.others = others
    }
}

/**
 * 字典列 —— 根据字典映射展示对应文本
 * @example tableHelper.dict('角色', 'role', roleDict)
 */
export class XTableTableDict {
    /** 类型 */
    type: XTableTableType
    /** 表格列 header */
    name: string
    /** 对应数据的key */
    prop: string
    /** 字典 */
    dict: Option[]
    /** 宽度 */
    width?: number | undefined
    others?: {
        /** 是否展示（仅在===false时不展示） */
        show?: boolean
        /** 是否排序 */
        sort?: boolean
        /** tips */
        tips?: string
        /** 其他配置项 */
        [key: string]: any
    }

    constructor(
        type: XTableTableType,
        name: string,
        prop: string,
        dict: Option[],
        width?: number,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.prop = prop
        this.dict = dict
        this.width = width
        this.others = others
    }
}

/**
 * 状态列 —— 使用 XStatus 组件展示带颜色的状态标签
 * @example tableHelper.status('状态', 'status', statusList)
 */
export class XTableTableStatus {
    /** 类型 */
    type: XTableTableType
    /** 表格列 header */
    name: string
    /** 对应数据的key */
    prop: string
    /** 字典 */
    status: Status[]
    /** 宽度 */
    width?: number | undefined
    others?: {
        /** 是否展示（仅在===false时不展示） */
        show?: boolean
        /** 是否排序 */
        sort?: boolean
        /** tips */
        tips?: string
        /** 其他配置项 */
        [key: string]: any
    }

    constructor(
        type: XTableTableType,
        name: string,
        prop: string,
        status: Status[],
        width?: number,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.prop = prop
        this.status = status
        this.width = width
        this.others = others
    }
}

/**
 * 插槽列 —— 自定义列内容
 * @example tableHelper.slot('操作', 'action')
 */
export class XTableTableSlot {
    /** 类型 */
    type: XTableTableType
    /** 表格列 header */
    name: string
    /** 插槽名称 */
    prop: string
    /** 宽度 */
    width?: number | undefined
    others?: {
        /** 是否展示（仅在===false时不展示） */
        show?: boolean
        /** 是否排序 */
        sort?: boolean
        /** tips */
        tips?: string
        /** 其他配置项 */
        [key: string]: any
    }

    constructor(
        type: XTableTableType,
        name: string,
        prop: string,
        width?: number,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.prop = prop
        this.width = width
        this.others = others
    }
}

/**
 * 操作列 —— 渲染操作按钮组（使用 x-operate 组件）
 * @example tableHelper.operate('操作', [{ label: '编辑', show: true }])
 */
export class XTableTableOperate {
    /** 类型 */
    type: XTableTableType
    /** 插槽名称 */
    name: string
    /** 宽度 */
    items?: XTtableOperate[]
    /** 宽度 */
    width?: number | undefined
    others?: {
        /** 是否展示（仅在===false时不展示） */
        show?: boolean
        /** 是否排序 */
        sort?: boolean
        /** tips */
        tips?: string
        /** 其他配置项 */
        [key: string]: any
    }

    constructor(
        type: XTableTableType,
        name: string,
        items?: XTtableOperate[],
        width?: number,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.items = items
        this.width = width
        this.others = others
    }
}

/** XTable表格类型 */
export type XTableTableType = 'default' | 'btn' | 'operate' | 'slot' | 'dict' | 'status'
