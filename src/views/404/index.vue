<script setup lang="ts">
const router = useRouter()
function handleRetry(): void {
  router.replace({
    path: '/',
  })
}
</script>

<template>
  <frame-view>
    <van-empty type="error" desc="这是一个404页面">
      <van-button round type="danger" class="error-button" @click="handleRetry">
        回到首页
      </van-button>
    </van-empty>
  </frame-view>
</template>

<style lang="scss" scoped>
.error-button {
  width: 160px;
  height: 40px;
}
</style>
