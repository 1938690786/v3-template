<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useApp from '@/config/pinia/modules/app'
import useRouteCache from '@/config/pinia/modules/routeCache'

const app = useApp()
const { routeTransitionName } = storeToRefs(app)

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches as string[]
})
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="routeTransitionName">
      <keep-alive :include="keepAliveRouteNames">
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </transition>
  </router-view>
</template>
