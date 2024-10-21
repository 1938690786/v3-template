import { defineStore } from 'pinia'

const useApp = defineStore('app', () => {
    // 单页面
    const signPageNames = ref(['login', '404'])

    // 主题
    const mode = ref<'light' | 'dark'>('light')
    const switchMode = (val: 'light' | 'dark') => {
        mode.value = val
    }

    return {
        mode,
        switchMode,

        signPageNames,
    }
})

export default useApp
