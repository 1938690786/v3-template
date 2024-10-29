export interface CurrentTableProps {
    req: any
    total: number
    selected: Record<string, any>[]
    pagination: boolean
    pageKey: string
    sizeKey: string
    rowKey: string
}
