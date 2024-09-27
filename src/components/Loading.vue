<script lang="ts" setup>
const props = defineProps({
  // 加载状态
  loading: {
    type: Boolean,
    default: true,
  },
  // 自定义图片地址
  src: {
    type: String,
    default: '',
  },
  // loading颜色
  color: {
    type: String,
    default: '#409eff',
  },
  // loading文字
  text: {
    type: String,
    default: '',
  },
  // 加载错误
  error: {
    type: Boolean,
    default: false,
  },
  // 错误类型，同base-empty
  type: {
    type: String,
    default: 'error',
  },
  // 错误提示，同base-empty
  desc: {
    type: String,
    default: '加载失败',
  },
})
const emits = defineEmits<{
  (e: 'retry'): void
}>()
const innerStyle = reactive({
  borderColor: `${props.color} transparent;`,
})
function handleRetry(): void {
  emits('retry')
}
</script>

<template>
  <div class="base-loading">
    <div v-show="loading" class="loading">
      <div v-if="src" class="custom-wrapper">
        <img class="custom-loading-image" mode="widthFix" :src="src">
        <div class="custom-loading-text">
          {{ text }}
        </div>
      </div>
      <div v-else class="spin">
        <div class="inner" :style="innerStyle" />
      </div>
    </div>
    <div v-show="error" class="loading">
      <base-empty :type="props.type" :desc="props.desc">
        <van-button round type="danger" class="error-button" @click="handleRetry">
          重试
        </van-button>
      </base-empty>
    </div>
    <slot v-if="!loading && !error" />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  z-index: 9999;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .custom-loading-image {
    width: 100px;
    display: block;
  }

  .custom-loading-text {
    color: #999999;
    font-size: 14px;
  }

  .spin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16vw;
    height: 16vw;
    margin-bottom: 10vh;
  }
  .inner {
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    border: 0.6vw solid transparent;
    border-color: #409eff transparent;
    animation: spin 1.2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .error-button {
    width: 160px;
    height: 40px;
  }
}
</style>
