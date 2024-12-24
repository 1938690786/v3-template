/** 年纪字典 */
export const roleOption: Option[] = [
    {
        label: '全部',
        value: '',
    },
    {
        label: '运营',
        value: 1,
    },
    {
        label: '管理员',
        value: 2,
    },
    {
        label: '超级管理员',
        value: 3,
    },
]

/** 状态字典 */
export const statusOption: Status[] = [
    {
        label: '启用',
        value: 1,
        status: 'success',
    },
    {
        label: '禁用',
        value: 0,
        status: 'danger',
    },
]

export function API() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [{
                    account: 'yy',
                    role: 1,
                    lastLogTime: '2021-01-01',
                    createTime: '2024-12-24',
                    status: 1,
                }, {
                    account: 'gly',
                    role: 2,
                    lastLogTime: '2021-01-01',
                    createTime: '2024-12-24',
                    status: 0,
                }, {
                    account: 'cjgly',
                    role: 3,
                    lastLogTime: '2021-01-01',
                    createTime: '2024-12-24',
                    status: 1,
                }],
                total: 3,
            })
        }, 1000)
    })
}
