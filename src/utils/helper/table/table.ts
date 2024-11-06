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

/** frame-list-view筛选器类型 */
export type FrameListViewFilterType =
    | 'input'
    | 'mobile'
    | 'date'
    | 'date-week'
    | 'date-rang-week'
    | 'date-range'
    | 'datetime-range'
    | 'select'
    | 'cascader'
    | 'int'
    | 'input-range'
    | 'int-range'
    | 'address'
    | 'select-list'
    | 'slot'
    | 'interval-input'

/** frame-list-view筛选器数据模型 */
export class FrameListViewFilterItem {
    /** 类型 */
    type: FrameListViewFilterType

    /** 标签名 */
    name: string

    /** 对应数据的key */
    code: string

    /** 是否展示（仅在===false时不展示） */
    if?: boolean

    /** 后缀图标 */
    icon?: string

    /** 字典项（用于单选、多选等） */
    options?: DictionaryItem[]
    clearable?: boolean
    width?: number | string

    /** 范围 */
    range?: number[]

    /** 其他配置项 */
    other?: any

    /** placeholder */
    placeholder?: string
    /** dataPicker 配置 */
    pickerOptions?: any
    /** 多选时是否将选中值按文字的形式展示 */
    collapseTags?: boolean
    constructor(
        type: FrameListViewFilterType,
        name: string,
        code: string,
        enable?: boolean,
        icon?: string,
        options?: DictionaryItem[],
        width?: number | string,
        range?: number[],
        other?: any,
        clearable?: boolean,
        placeholder?: string,
        pickerOptions?: string | any,
        collapseTags?: boolean,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.icon = icon
        this.width = width
        this.range = range
        this.other = other
        this.if = enable
        this.clearable = clearable
        this.placeholder = placeholder
        this.pickerOptions = pickerOptions
        this.collapseTags = collapseTags
    }
}

/** frame-list-view表格类型 */
export type FrameListViewTableType = 'default' | 'btn' | 'btn-group' | 'slot'

/** frame-list-view表格内置按钮数据模型 */
export interface FrameListViewTableColumnBtn {
    /** 标签（按钮文字） */
    label: string | ((row: any) => string)

    /** 点击事件 */
    handler: (row: any) => void

    /** 是否展示（仅在===false时不展示） */
    if?: boolean | ((row: any) => boolean)
}

/** frame-list-view表格数据模型 */
export class FrameListViewTableColumn {
    /** 类型 */
    type: FrameListViewTableType

    /** 对应数据的key */
    prop: string

    /** 表头标签文字 */
    label?: string

    /** 是否展示（仅在===false时不展示） */
    if?: boolean

    /** 字典项 */
    dictionary?: DictionaryItem[]

    /** 宽度 */
    width?: number | string

    /** 固定位置 */
    fixed?: 'left' | 'right'

    /** 是否排序 */
    sort?: boolean

    /** 点击事件（type==='btn'） */
    handler?: (row: any) => void

    /** 按钮列表（type==='btn-group'） */
    btns?: FrameListViewTableColumnBtn[]

    /** 提示文案 */
    tips?: string

    /**
     *Creates an instance of FrameListViewTableColumn.
     * @param {FrameListViewTableType} type 类型
     * @param {string} prop 对应数据的key
     * @param {string} [label] 表头标签文字
     * @param {boolean} [enable] 是否展示（仅在===false时不展示）
     * @param {DictionaryItem[]} [dictionary] 字典项
     * @param {(number | string)} [width] 宽度
     * @param {('left' | 'right')} [fixed] 固定位置
     * @param {boolean} [sort] 是否排序（仅在===true时排序）
     * @param {(row: any) => void} [handler] 点击事件（type==='btn'）
     * @param {FrameListViewTableColumnBtn[]} [btns] 按钮列表（type==='btn-group'）
     * @memberof FrameListViewTableColumn
     * @param {string} [tips] 提示文案
     */
    constructor(
        type: FrameListViewTableType,
        prop: string,
        label?: string,
        enable?: boolean,
        dictionary?: DictionaryItem[],
        width?: number | string,
        fixed?: 'left' | 'right',
        sort?: boolean,
        handler?: (row: any) => void,
        btns?: FrameListViewTableColumnBtn[],
        tips?: string,
    ) {
        this.type = type
        this.prop = prop
        this.label = label
        this.if = enable
        this.dictionary = dictionary
        this.width = width
        this.fixed = fixed
        this.sort = sort
        this.handler = handler
        this.btns = btns
        this.tips = tips
    }
}

export const tableHepler = {
    /**
     * 插槽列
     *
     * @param {string} prop 属性
     * @param {boolean} [enable] 是否隐藏（仅在为false时隐藏）
     */
    slot: (prop: string, enable?: boolean) =>
        new FrameListViewTableColumn('slot', prop, undefined, enable),

    /**
     * 默认列（数据列）
     *
     * @param {string} label 标签
     * @param {string} prop 属性
     * @param {(number | string)} [width] 宽度
     * @param {boolean} [enable] 是否隐藏（仅在为false时隐藏）
     * @param {('left' | 'right')} [fixed] 定位
     * @param {boolean} [sort] 是否排序
     * @param {string} [tips] 提示文案
     */
    default: (
        label: string,
        prop: string,
        width?: number | string,
        enable?: boolean,
        fixed?: 'left' | 'right',
        sort?: boolean,
        tips?: string,
        leftExtra?: string | number,
        rightExtra?: string | number,
    ) =>
        new FrameListViewTableColumn(
            'default',
            prop,
            label,
            enable,
            undefined,
            width,
            fixed,
            sort,
            undefined,
            undefined,
            tips,
            false,
            undefined,
            leftExtra,
            rightExtra,
        ),

    /**
     * 时间（数据列）
     *
     * @param {string} label 标签
     * @param {string} prop 属性
     * @param {(number | string)} [width] 宽度
     * @param {boolean} [enable] 是否隐藏（仅在为false时隐藏）
     * @param {('left' | 'right')} [fixed] 定位
     * @param {boolean} [sort] 是否排序
     * @param {string} [tips] 提示文案
     */
    time: (
        label: string,
        prop: string,
        width?: number | string,
        enable?: boolean,
        fixed?: 'left' | 'right',
        sort?: boolean,
        tips?: string,
    ) =>
        new FrameListViewTableColumn(
            'time',
            prop,
            label,
            enable,
            undefined,
            width,
            fixed,
            sort,
            undefined,
            undefined,
            tips,
        ),

    /**
     * 字典列
     *
     * @param {string} label 标签
     * @param {string} prop 属性
     * @param {DictionaryItem[]} dictionary 字典
     * @param {(number | string)} [width] 宽度
     * @param {boolean} [enable] 是否隐藏（仅在为false时隐藏）
     * @param {('left' | 'right')} [fixed] 定位
     */
    dictionary: (
        label: string,
        prop: string,
        dictionary: DictionaryItem[],
        width?: number | string,
        enable?: boolean,
        fixed?: 'left' | 'right',
    ) =>
        new FrameListViewTableColumn(
            'dictionary',
            prop,
            label,
            enable,
            dictionary,
            width,
            fixed,
        ),

    /**
     * 图片
     *
     * @param {string} label 标签
     * @param {string} prop 属性
     * @param {(number | string)} [width] 宽度
     * @param {boolean} [enable] 是否隐藏（仅在为false时隐藏）
     * @param {('left' | 'right')} [fixed] 定位
     * @param {boolean} [sort] 是否排序
     * @param {string} [tips] 提示文案
     */
    image: (
        label: string,
        prop: string,
        width?: number | string,
        enable?: boolean,
        fixed?: 'left' | 'right',
        sort?: boolean,
        tips?: string,
    ) =>
        new FrameListViewTableColumn(
            'image',
            prop,
            label,
            enable,
            undefined,
            width,
            fixed,
            sort,
            undefined,
            undefined,
            tips,
        ),

    /**
     * 按钮列（按钮标签来源自数据）
     * 如需自定义按钮标签，请使用按钮组
     *
     * @param {string} label 标签
     * @param {string} prop 属性
     * @param {(row: any) => void} handler 句柄（点击按钮触发的事件）
     * @param {(number | string)} [width] 宽度
     * @param {boolean} [enable] 是否隐藏（仅在为false时隐藏）
     * @param {('left' | 'right')} [fixed] 定位
     * @param {boolean} [sort]
     */
    btn: (
        label: string,
        prop: string,
        handler: (row: any) => void,
        width?: number | string,
        enable?: boolean,
        fixed?: 'left' | 'right',
        sort?: boolean,
        tips?: string,
    ) =>
        new FrameListViewTableColumn(
            'btn',
            prop,
            label,
            enable,
            undefined,
            width,
            fixed,
            sort,
            handler,
            undefined,
            tips,
        ),

    /**
     * 按钮组（自定义多按钮）
     *
     * @param {string} label 标签（列标签）
     * @param {FrameListViewTableColumnBtn[]} btns 按钮组
     * @param {(number | string)} [width] 宽度
     * @param {boolean} [enable] 是否隐藏（仅在为false时隐藏）
     * @param {('left' | 'right')} [fixed] 定位
     * @param {('left' | 'center' | 'right')} [align] 对齐方式  left/center/right
     */
    btnGroup: (
        label: string,
        btns: FrameListViewTableColumnBtn[],
        width?: number | string,
        enable?: boolean,
        fixed?: 'left' | 'right',
        align?: 'left' | 'right' | 'center',
    ) =>
        new FrameListViewTableColumn(
            'btn-group',
            '',
            label,
            enable,
            undefined,
            width,
            fixed,
            undefined,
            undefined,
            btns,
            undefined,
            undefined,
            align,
        ),
}
