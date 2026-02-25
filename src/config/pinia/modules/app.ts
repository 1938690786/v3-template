import { defineStore } from 'pinia'

const useApp = defineStore('app', () => {
    // 单页面
    const signPageNames = ref(['login', '404'])

    // 主题
    const mode = ref<'light' | 'dark'>('light')
    const switchMode = (val: 'light' | 'dark') => {
        mode.value = val
    }

    // 权限
    // 为什么用 set?
    // 实测 set permissions.has('10001') 方法判断是否存在某个权限是数组 permissions.includes('10001')计算速度的约 5 倍
    let permissions = new Set('10001')
    const setPermissions = (val: string[]) => {
        permissions = new Set(val)
    }

    return {
        mode,
        switchMode,

        signPageNames,

        permissions,
        setPermissions,
    }
})

export default useApp
