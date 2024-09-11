import { defineStore } from 'pinia'

const useRouteTransitionNameStore = defineStore('route-transition-name', () => {
  const routeTransitionName = ref('')

  const setName = (name: string) => {
    routeTransitionName.value = name
  }

  const isBack = ref<any>(null)
  const setBack = (val: boolean | null) => {
    isBack.value = val
  }

  return {
    routeTransitionName,
    setName,

    isBack,
    setBack,
  }
})

export default useRouteTransitionNameStore
