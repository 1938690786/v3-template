export type StatusType = 'success' | 'primary' | 'info' | 'warning' | 'danger' | 'default'
export interface XStatusProps {
    type: StatusType
    title: string | number
}
