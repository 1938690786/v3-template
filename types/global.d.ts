/**
 * 常用字典接口
 * @property {string | number} label 显示文本
 * @property {string | number} value 值
 */
interface Option {
    label: string | number
    value: string | number
};

/**
 * 状态类型
 * @property {string} status 状态类型
 */
type StatusType = 'success' | 'primary' | 'info' | 'warning' | 'danger' | 'default'

/**
 * 状态接口
 * @property {StatusType} status 状态类型
 * @property {string | number} label 显示文本
 * @property {string | number} value 值
 */
interface Status extends Option {
    status: StatusType
}
