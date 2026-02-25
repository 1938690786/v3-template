/**
 * x-form 表单字段类型与数据模型
 * 定义所有表单字段的类型枚举和对应的数据类，用于 x-form 组件的配置
 */
import type { FormItemRule } from 'element-plus'
import type { DictionaryItem } from '@/utils/helper/table/filters/class'

/** 表单字段类型枚举 */
export type XFormFieldType =
    | 'input'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'switch'
    | 'number'
    | 'date'
    | 'daterange'
    | 'datetimerange'
    | 'cascader'
    | 'slot'

/**
 * 输入框字段
 * @example formHelper.input('用户名', 'username')
 */
export class XFormFieldInput {
    type: XFormFieldType
    name: string
    code: string
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    placeholder?: string
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        show?: boolean,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.placeholder = placeholder || '请输入'
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 文本域字段
 * @example formHelper.textarea('备注', 'remark')
 */
export class XFormFieldTextarea {
    type: XFormFieldType
    name: string
    code: string
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    placeholder?: string
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        show?: boolean,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.placeholder = placeholder || '请输入'
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 下拉选择字段
 * @example formHelper.select('角色', 'role', roleOptions)
 */
export class XFormFieldSelect {
    type: XFormFieldType
    name: string
    code: string
    options: DictionaryItem[]
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    placeholder?: string
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        options: DictionaryItem[],
        show?: boolean,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.show = show
        this.placeholder = placeholder || '请选择'
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 单选框字段
 * @example formHelper.radio('性别', 'gender', genderOptions)
 */
export class XFormFieldRadio {
    type: XFormFieldType
    name: string
    code: string
    options: DictionaryItem[]
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        options: DictionaryItem[],
        show?: boolean,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.show = show
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 复选框字段
 * @example formHelper.checkbox('爱好', 'hobbies', hobbyOptions)
 */
export class XFormFieldCheckbox {
    type: XFormFieldType
    name: string
    code: string
    options: DictionaryItem[]
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        options: DictionaryItem[],
        show?: boolean,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.show = show
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 开关字段
 * @example formHelper.switch('启用', 'enabled')
 */
export class XFormFieldSwitch {
    type: XFormFieldType
    name: string
    code: string
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        show?: boolean,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 数字输入框字段
 * @example formHelper.number('年龄', 'age')
 */
export class XFormFieldNumber {
    type: XFormFieldType
    name: string
    code: string
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    placeholder?: string
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        show?: boolean,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.placeholder = placeholder || '请输入'
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 单日期选择字段
 * @example formHelper.date('生日', 'birthday')
 */
export class XFormFieldDate {
    type: XFormFieldType
    name: string
    code: string
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    placeholder?: string
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        show?: boolean,
        placeholder?: string,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.placeholder = placeholder || '请选择日期'
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 日期范围字段
 * @example formHelper.dateRange('注册时间', 'createTime')
 */
export class XFormFieldDateRange {
    type: XFormFieldType
    name: string
    code: string
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        show?: boolean,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.span = 2
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 日期时间范围字段
 * @example formHelper.datetimeRange('操作时间', 'operateTime')
 */
export class XFormFieldDatetimeRange {
    type: XFormFieldType
    name: string
    code: string
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        show?: boolean,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.span = 2
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 级联选择字段
 * @example formHelper.cascader('地区', 'area', areaOptions)
 */
export class XFormFieldCascader {
    type: XFormFieldType
    name: string
    code: string
    options: DictionaryItem[]
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    disabled?: boolean
    others?: Record<string, any>
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        options: DictionaryItem[],
        show?: boolean,
        rules?: FormItemRule | FormItemRule[],
        disabled?: boolean,
        others?: Record<string, any>,
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.options = options
        this.show = show
        this.rules = rules
        this.disabled = disabled
        this.others = others
    }
}

/**
 * 插槽字段（自定义内容）
 * @example formHelper.slot('自定义', 'custom')
 */
export class XFormFieldSlot {
    type: XFormFieldType
    name: string
    code: string
    show?: boolean
    span?: number
    rules?: FormItemRule | FormItemRule[]
    constructor(
        type: XFormFieldType,
        name: string,
        code: string,
        show?: boolean,
        rules?: FormItemRule | FormItemRule[],
    ) {
        this.type = type
        this.name = name
        this.code = code
        this.show = show
        this.rules = rules
    }
}
