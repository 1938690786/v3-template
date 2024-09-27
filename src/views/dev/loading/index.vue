<script lang="ts" setup>
import { showToast } from 'vant'

const loading = ref(true)
const error = ref(false)
function handleRetry(): void {
  showToast('执行重试动作')
}
onMounted(() => {
  setTimeout(() => {
    loading.value = false
    error.value = true
  }, 1500)
})
</script>

<template>
  <Loading :loading="loading" :error="error" @retry="handleRetry">
    <p>加载完成</p>
  </Loading>
</template>

<style lang="scss" scoped>
p {
  text-align: center;
  margin-top: 200px;
}
</style>
