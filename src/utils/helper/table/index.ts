export const filterHelper = {
    /**
     * 输入框
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     * @param {string} placeholder 占位文案
     */
    input: (
        name: string,
        code: string,
        enable?: boolean,
        icon?: string,
        placeholder?: string,
    ) =>
        new FrameListViewFilterItem(
            'input',
            name,
            code,
            enable,
            icon,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            placeholder,
        ),

    /**
     * 手机号输入框
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     */
    mobile: (name: string, code: string, enable?: boolean, icon?: string) =>
        new FrameListViewFilterItem('mobile', name, code, enable, icon),

    /**
     * 日期选择器
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     */
    date: (
        name: string,
        code: string,
        enable?: boolean,
        clearable?: boolean,
        icon?: string,
    ) =>
        new FrameListViewFilterItem(
            'date',
            name,
            code,
            enable,
            icon,
            undefined,
            undefined,
            undefined,
            undefined,
            clearable,
        ),

    /**
     * 日期范围选择器
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     */
    dateRange: (
        name: string,
        code: string,
        enable?: boolean,
        icon?: string,
        clearable?: boolean,
        otherOptions?: any,
    ) =>
        new FrameListViewFilterItem(
            'date-range',
            name,
            code,
            enable,
            icon,
            undefined,
            undefined,
            undefined,
            otherOptions,
            clearable,
        ),

    /**
     * 日期时间范围选择器
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     */
    datetimeRange: (
        name: string,
        code: string,
        enable?: boolean,
        icon?: string,
        other?: any,
        pickerOptions?: string,
    ) =>
        new FrameListViewFilterItem(
            'datetime-range',
            name,
            code,
            enable,
            icon,
            undefined,
            undefined,
            undefined,
            other,
            undefined,
            undefined,
            pickerOptions,
        ),

    /**
     * 下拉选择
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {DictionaryItem[]} options 下拉菜单列表
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     * @param {(number | string)} [width] 宽度
     */
    select: (
        name: string,
        code: string,
        options: DictionaryItem[],
        multiple?: boolean,
        enable?: boolean,
        icon?: string,
        width?: number | string,
        collapseTags?: boolean,
        placeholder?: string,
        clearable = true,
    ) => {
        const other = {
            multiple,
            collapseTags,
        }

        return new FrameListViewFilterItem(
            'select',
            name,
            code,
            enable,
            icon,
            options,
            width,
            undefined,
            other,
            clearable,
            placeholder,
            undefined,
            collapseTags,
        )
    },

    /**
     * 多级下拉选择
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {DictionaryItem[]} options 字典
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     * @param {cascaderOptions} [otherOptions] cascader配置
     * @param {(number | string)} [width] 宽度
     */
    cascader: (
        name: string,
        code: string,
        options: DictionaryItem[],
        enable?: boolean,
        icon?: string,
        otherOptions?: cascaderOptions,
        width?: number | string,
    ) =>
        new FrameListViewFilterItem(
            'cascader',
            name,
            code,
            enable,
            icon,
            options,
            width,
            undefined,
            otherOptions,
        ),

    /**
     * 整数输入框
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     * @param {number[]} [range] 选择范围（默认1-100）
     * @param {(number | string)} [width] 宽度
     */
    int: (
        name: string,
        code: string,
        enable?: boolean,
        icon?: string,
        range?: number[],
        width?: number | string,
    ) =>
        new FrameListViewFilterItem(
            'int',
            name,
            code,
            enable,
            icon,
            undefined,
            width,
            range,
        ),

    /**
     * 整数范围选择器
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     * @param {number[]} [range] 选择范围（默认1-100）
     */
    intRange: (
        name: string,
        code: string,
        enable?: boolean,
        icon?: string,
        range?: number[],
    ) =>
        new FrameListViewFilterItem(
            'int-range',
            name,
            code,
            enable,
            icon,
            undefined,
            undefined,
            range,
        ),

    /**
     * 区间输入框
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     */
    intervalInput: (
        name: string,
        code: string,
        enable?: boolean,
        icon?: string,
    ) =>
        new FrameListViewFilterItem('interval-input', name, code, enable, icon),
    /**
     * 选择-分页器
     *
     * @param {string} name 筛选器名称
     * @param {string} code 对应数据
     * @param {(params: any) => Promise<any>} fn 请求方法 传参是 params
     * @param {boolean} [enable] 启用状态（默认启用，传入false禁用）
     * @param {string} [icon] 输入框尾部图标（默认el-icon-search）
     * @param {number|string} [width] 宽度（默认136 单位px）
     * @param {boolean} [clearable] 是否可以清空选项 （默认 true）
     * @param {string} [placeholder] 占位符 （默认 请选择）
     * @param {boolean} [multiple] 是否多选 （默认 false）
     * @param {number} [multipleLimit] 多选时用户最多可以选择的项目数，为 0 则不限制（默认 0）
     * @param {boolean} [collapseTags] 多多选时是否将选中值按文字的形式展示（默认 true）
     * @param {string} [className] 自定义类名（默认 ''）
     * @param {string} [popperClass] Select 下拉框的类名（默认 ''）
     * @param {number} [debounce] 模糊搜索防抖间隔（默认 300）
     * @param {boolean} [filterable] 是否可搜索（默认 true）
     * @param {string} [rowKey] 响应参数-数据集合key（默认 rows）
     * @param {string} [totalKey] 响应参数-总数量key（默认 total）
     * @param {string} [pageKey] 请求参数-第几页key（默认 page）
     * @param {string} [sizeKey] 请求参数-每页数量key（默认 size）
     * @param {string} [searchKey] 请求参数-模糊搜索key（默认 name）
     * @param {string} [valueKey] 选项的值key（默认 id）
     * @param {string} [labelKey] 选项的标签key（默认 name）
     */
    selectList: (
        name: string,
        code: string,
        fn: (params: any) => Promise<any>,
        multiple?: boolean,
        multipleLimit?: number,
        collapseTags?: boolean,
        enable?: boolean,
        icon?: string,
        width?: number | string,
        placeholder?: string,
        valueKey?: string,
        labelKey?: string,
        searchKey?: string,
        rowKey?: string,
        totalKey?: string,
        pageKey?: string,
        sizeKey?: string,
        clearable?: boolean,
        className?: string,
        popperClass?: string,
        debounce?: number,
        filterable?: boolean,
    ) => {
        const other = {
            fn,
            multiple,
            multipleLimit,
            collapseTags,
            debounce,
            filterable,
            className,
            popperClass,
            rowKey,
            totalKey,
            pageKey,
            sizeKey,
            searchKey,
            valueKey,
            labelKey,
        }
        return new FrameListViewFilterItem(
            'select-list',
            name,
            code,
            enable,
            icon,
            undefined,
            width,
            undefined,
            other,
            clearable,
            placeholder,
        )
    },

    /**
     * 插槽
     *
     * @param name
     * @param code
     * @param enable
     * @param icon
     * @returns slot
     */
    slot: (name: string, code: string, enable?: boolean, icon?: string) =>
        new FrameListViewFilterItem('slot', name, code, enable, icon),
}

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
