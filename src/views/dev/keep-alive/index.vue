<script lang='ts' setup>
defineOptions({
  name: 'KeepAlive',
})

const value = ref(0)
</script>

<template>
  <van-stepper v-model="value" />
</template>

<style scoped lang='scss'>
</style>
