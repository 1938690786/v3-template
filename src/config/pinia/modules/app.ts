import { defineStore } from 'pinia'

// 跟随系统设置主题色
// const prefersDark
// = window.matchMedia
// && window.matchMedia('(prefers-color-scheme: dark)').matches

const useApp = defineStore('app', () => {
  // 主题
  const mode = ref<'light' | 'dark'>('light')
  const switchMode = (val: 'light' | 'dark') => {
    mode.value = val
  }

  // 动画
  const routeTransitionName = ref('')
  const setName = (name: string) => {
    routeTransitionName.value = name
  }

  return {
    mode,
    switchMode,

    routeTransitionName,
    setName,
  }
})

export default useApp
