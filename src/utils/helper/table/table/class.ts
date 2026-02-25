import type { XTtableOperate } from '.'

/**
 * table默认列生成类
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
 * table字典列生成类
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
 * table状态列生成类
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
 * table 插槽列生成类
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
 * table操作列生成类
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
