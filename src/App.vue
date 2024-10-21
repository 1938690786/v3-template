<script setup lang="ts">
import framework from './_layout/framework.vue'
import useApp from '@/config/pinia/modules/app'

const route = useRoute()
const signPageNames = useApp().signPageNames

const isSignPage = computed(() => {
    const pageName = route.name as string | undefined
    return pageName ? signPageNames.includes(pageName) : false
})
</script>

<template>
    <template v-if="isSignPage">
        <router-view />
    </template>
    <framework v-else />
</template>
