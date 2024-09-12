<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useAppStore from '@/config/pinia/modules/app'
import useRouteTransitionNameStore from '@/config/pinia/modules/routeTransitionName'
import useRouteCache from '@/config/pinia/modules/routeCache'

const appStore = useAppStore()
const { mode } = storeToRefs(appStore)

const routeTransitionNameStore = useRouteTransitionNameStore()
const { routeTransitionName } = storeToRefs(routeTransitionNameStore)

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches as string[]
})

/** 监听浏览器后退事件 */
function handleListenBack(): void {
  window.addEventListener(
    'popstate',
    () => {
      console.log("popstate1")
      routeTransitionNameStore.setBack(true)
    },
    false,
  )
}
handleListenBack()
</script>

<template>
  <VanConfigProvider :theme="mode">
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <transition :name="routeTransitionName">
        <keep-alive :include="keepAliveRouteNames">
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </transition>
    </router-view>
    <TabBar />
  </VanConfigProvider>
</template>
