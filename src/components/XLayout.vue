<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import useApp from '@/config/pinia/modules/app'

const app = useApp()
const { mode } = storeToRefs(app)
</script>

<template>
  <VanConfigProvider :theme="mode">
    <NavBar />
    <slot />
    <TabBar />
  </VanConfigProvider>
</template>
