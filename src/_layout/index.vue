<script setup lang="ts">
import useRouteCache from '@/config/pinia/modules/routeCache'

const keepAliveRouteNames = computed(() => {
    return useRouteCache().routeCaches as string[]
})
</script>

<template>
    <router-view v-slot="{ Component, route }">
        <transition class="index">
            <keep-alive :include="keepAliveRouteNames">
                <component :is="Component" :key="route.name" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<style lang="scss" scoped>
.index {
    width: 100%;
}
</style>
