<script setup lang="ts">
import useRouteCache from '@/config/pinia/modules/routeCache'

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches as string[]
})
</script>

<template>
  <div class="root">
    <router-view v-slot="{ Component, route }">
      <transition>
        <keep-alive :include="keepAliveRouteNames">
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
