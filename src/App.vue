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
</script>

<template>
  <VanConfigProvider :theme="mode">
    <!-- <NavBar /> -->
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
