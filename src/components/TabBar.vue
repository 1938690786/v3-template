<script setup lang="ts">
import tabbar from '@/config/tabbar'

const route = useRoute()

const show = computed(() => {
  if (route.meta?.isTab && tabbar.findIndex(i => i.router === route.path) !== -1)
    return true
  return false
})
</script>

<template>
  <van-tabbar v-if="show" placeholder active-color="#F12F1A" inactive-color="#000" route :safe-area-inset-bottom="true">
    <van-tabbar-item v-for="(item, index) of tabbar" :key="index" replace :to="item.router">
      <span>{{ item.title }}</span><template #icon="props">
        <img :src="props.active ? item.active : item.inactive">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
