/**
 * x-table 筛选器类型与数据模型
 * 定义所有筛选器的类型枚举和对应的数据类，用于 x-table 组件的筛选栏配置
 */

/** 筛选器类型枚举 */
export type XTableFilterType =
    | 'input'
    | 'select'
    | 'daterange'
    | 'date'
    | 'datetimerange'
    | 'number'
    | 'cascader'
    | 'slot'

/**
 * 输入框筛选器
 * @example filterHelper.input('账号', 'account')
 */
export class XTableFilterInput {
    /** 类型 */
    type: XTableFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 栅格列数倍数（1=默认宽度，2=双倍宽度） */
    span?: number
    /** 占位内容 */
    placeholder?: string
    /** 其他element-plus的input参数 */
    others?: Record<string, any>
    constructor(
        type: XTableFilterType,
        name: string,
        code: string,
        show?: boolean,
        placeholder?: string,
        others?: Record<string, any>,
        span?: number,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.span = span
        this.placeholder = placeholder || '请输入'
        this.others = others
    }
}

/**
 * 下拉选择筛选器
 * @example filterHelper.select('角色', 'role', roleOptions)
 */
export class XTableFilterSelect {
    /** 类型 */
    type: XTableFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 字典项 */
    options: DictionaryItem[]
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 栅格列数倍数（1=默认宽度，2=双倍宽度） */
    span?: number
    /** 占位内容 */
    placeholder?: string
    /** 其他element-plus的select参数 */
    others?: Record<string, any>
    constructor(
        type: XTableFilterType,
        name: string,
        code: string,
        options: DictionaryItem[],
        show?: boolean,
        placeholder?: string,
        others?: Record<string, any>,
        span?: number,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.show = show
        this.span = span
        this.placeholder = placeholder || '请输入'
        this.others = others
    }
}

/**
 * 日期范围筛选器
 * @example filterHelper.dateRange('注册时间', 'createTime')
 */
export class XTableFilterDateRange {
    /** 类型 */
    type: XTableFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 栅格列数倍数（1=默认宽度，2=双倍宽度），默认2 */
    span?: number
    /** 其他element-plus的date-picker参数 */
    others?: Record<string, any>
    constructor(
        type: XTableFilterType,
        name: string,
        code: string,
        show?: boolean,
        others?: Record<string, any>,
        span?: number,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.span = span ?? 2
        this.others = others
    }
}

/**
 * 单日期筛选器
 * @example filterHelper.date('生日', 'birthday')
 */
export class XTableFilterDate {
    /** 类型 */
    type: XTableFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 栅格列数倍数（1=默认宽度，2=双倍宽度） */
    span?: number
    /** 占位内容 */
    placeholder?: string
    /** 其他element-plus的date-picker参数 */
    others?: Record<string, any>
    constructor(
        type: XTableFilterType,
        name: string,
        code: string,
        show?: boolean,
        placeholder?: string,
        others?: Record<string, any>,
        span?: number,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.span = span
        this.placeholder = placeholder || '请选择日期'
        this.others = others
    }
}

/**
 * 日期时间范围筛选器
 * @example filterHelper.datetimeRange('操作时间', 'operateTime')
 */
export class XTableFilterDatetimeRange {
    /** 类型 */
    type: XTableFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 栅格列数倍数（1=默认宽度，2=双倍宽度），默认2 */
    span?: number
    /** 其他element-plus的date-picker参数 */
    others?: Record<string, any>
    constructor(
        type: XTableFilterType,
        name: string,
        code: string,
        show?: boolean,
        others?: Record<string, any>,
        span?: number,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.span = span ?? 2
        this.others = others
    }
}

/**
 * 数字输入框筛选器
 * @example filterHelper.number('年龄', 'age')
 */
export class XTableFilterNumber {
    /** 类型 */
    type: XTableFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 栅格列数倍数（1=默认宽度，2=双倍宽度） */
    span?: number
    /** 占位内容 */
    placeholder?: string
    /** 其他element-plus的input-number参数 */
    others?: Record<string, any>
    constructor(
        type: XTableFilterType,
        name: string,
        code: string,
        show?: boolean,
        placeholder?: string,
        others?: Record<string, any>,
        span?: number,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.span = span
        this.placeholder = placeholder || '请输入'
        this.others = others
    }
}

/**
 * 级联选择筛选器
 * @example filterHelper.cascader('地区', 'area', areaOptions)
 */
export class XTableFilterCascader {
    /** 类型 */
    type: XTableFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 栅格列数倍数（1=默认宽度，2=双倍宽度） */
    span?: number
    /** 字典项（用于级联选择） */
    options: DictionaryItem[]
    /** 其他element-plus的cascader参数 */
    others?: Record<string, any>
    constructor(
        type: XTableFilterType,
        name: string,
        code: string,
        options: DictionaryItem[],
        show?: boolean,
        others?: Record<string, any>,
        span?: number,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.show = show
        this.span = span
        this.others = others
    }
}

/**
 * 插槽筛选器（自定义内容）
 * @example filterHelper.slot('自定义', 'custom')
 */
export class XTableFilterSlot {
    /** 类型 */
    type: XTableFilterType
    /** 标签名 */
    name: string
    /** 对应数据的key（同时作为插槽名） */
    code: string
    /** 是否展示（仅在===false时不展示） */
    show?: boolean
    /** 栅格列数倍数（1=默认宽度，2=双倍宽度） */
    span?: number
    constructor(
        type: XTableFilterType,
        name: string,
        code: string,
        show?: boolean,
        span?: number,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.span = span
    }
}

/** 字典数据项 */
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
