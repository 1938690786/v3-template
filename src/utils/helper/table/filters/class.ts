export type FrameListViewFilterType =
    | 'input'
    | 'select'
    | 'daterange'
    | 'mobile'
    | 'date'
    | 'date-week'
    | 'date-rang-week'
    | 'datetime-range'
    | 'cascader'
    | 'int'
    | 'input-range'
    | 'int-range'
    | 'address'
    | 'select-list'
    | 'slot'
    | 'interval-input'

/**
 * input生成类
 */
export class XTableFilterInput {
    /** 类型 */
    type: FrameListViewFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 占位内容 */
    placeholder?: string
    /** 其他element-plus的input参数 */
    others?: Record<string, any>
    constructor(
        type: FrameListViewFilterType,
        name: string,
        code: string,
        show?: boolean,
        placeholder?: string,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.placeholder = placeholder || '请输入'
        this.others = others
    }
}

/**
 * select生成类
 */
export class XTableFilterSelect {
    /** 类型 */
    type: FrameListViewFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 字典项 */
    options: DictionaryItem[]
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 占位内容 */
    placeholder?: string
    /** 其他element-plus的select参数 */
    others?: Record<string, any>
    constructor(
        type: FrameListViewFilterType,
        name: string,
        code: string,
        options: DictionaryItem[],
        show?: boolean,
        placeholder?: string,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.show = show
        this.placeholder = placeholder || '请输入'
        this.others = others
    }
}

/**
 * daterange生成类
 */
export class XTableFilterDateRange {
    /** 类型 */
    type: FrameListViewFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 字典项（用于单选、多选等） */
    others?: Record<string, any>
    constructor(
        type: FrameListViewFilterType,
        name: string,
        code: string,
        show?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.others = others
    }
}

/**
 * cascader生成类
 */
export class XTableFilterCascader {
    /** 类型 */
    type: FrameListViewFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 字典项（用于单选、多选等） */
    options: DictionaryItem[]
    /** 其他element-plus的cascader参数 */
    others?: Record<string, any>
    constructor(
        type: FrameListViewFilterType,
        name: string,
        code: string,
        options: DictionaryItem[],
        show?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.show = show
        this.others = others
    }
}

/**
 * slot生成类
 */
export class XTableFilterSlot {
    /** 类型 */
    type: FrameListViewFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    constructor(
        type: FrameListViewFilterType,
        name: string,
        code: string,
        show?: boolean,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
    }
}

export class DictionaryItem {
    value: number | string
    label: number | string
    type?: string | undefined
    question?: string | undefined
    children?: DictionaryItem[]
    tips?: string | undefined
    disabled?: boolean
    constructor(
        value: number | string,
        label: number | string,
        type?: string | undefined,
        question?: string | undefined,
        children?: DictionaryItem[],
        tips?: string | undefined,
        disabled?: boolean,
    ) {
        this.value = value
        this.label = label
        this.type = type
        this.question = question
        this.children = children
        this.tips = tips
        this.disabled = disabled
    }
}
