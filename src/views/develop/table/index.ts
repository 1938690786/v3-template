/** 角色字典 */
export const roleOption: Option[] = [
    { label: '全部', value: '' },
    { label: '运营', value: 1 },
    { label: '管理员', value: 2 },
    { label: '超级管理员', value: 3 },
]

/** 状态字典 */
export const statusOption: Status[] = [
    { label: '启用', value: 1, status: 'success' },
    { label: '禁用', value: 0, status: 'danger' },
]

/** 部门级联选项 */
export const departmentOption = [
    {
        label: '技术部',
        value: 'tech',
        children: [
            { label: '前端组', value: 'frontend' },
            { label: '后端组', value: 'backend' },
        ],
    },
    {
        label: '产品部',
        value: 'product',
        children: [
            { label: '产品设计', value: 'design' },
            { label: '产品运营', value: 'operation' },
        ],
    },
]

/** 模拟 API 请求 */
export function API(params: Record<string, any>) {
    console.log('请求参数:', params)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        account: 'zhangsan',
                        role: 1,
                        status: 1,
                        age: 28,
                        birthday: '1997-05-15',
                        createTime: '2024-12-24',
                        lastLogTime: '2025-02-20 14:30:00',
                        department: ['tech', 'frontend'],
                    },
                    {
                        account: 'lisi',
                        role: 2,
                        status: 0,
                        age: 35,
                        birthday: '1990-11-08',
                        createTime: '2024-06-10',
                        lastLogTime: '2025-01-15 09:20:00',
                        department: ['product', 'design'],
                    },
                    {
                        account: 'wangwu',
                        role: 3,
                        status: 1,
                        age: 42,
                        birthday: '1983-03-22',
                        createTime: '2023-09-01',
                        lastLogTime: '2025-02-24 18:00:00',
                        department: ['tech', 'backend'],
                    },
                    {
                        account: 'zhaoliu',
                        role: 1,
                        status: 1,
                        age: 24,
                        birthday: '2001-08-30',
                        createTime: '2025-01-15',
                        lastLogTime: '2025-02-25 10:15:00',
                        department: ['product', 'operation'],
                    },
                ],
                total: 4,
            })
        }, 800)
    })
}
