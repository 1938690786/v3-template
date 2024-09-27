<script lang="ts" setup>
import { showDialog } from 'vant'
import useCopy from '@/hooks/useCopy'

const mobile = ref('13688888888')

function onSuccess(e: string): void {
  console.log(e)
}

function onError(e: string): void {
  console.log(e)
}

function copy(): void {
  useCopy(mobile.value)
    .then((res) => {
      showDialog({
        message: res,
      })
    })
    .catch((err) => {
      showDialog({
        message: err,
      })
    })
}
</script>

<template>
  <frame-view class="copy">
    <h1 class="text-[36px]">
      以指令的形式调用
    </h1>
    <div class="copy-list-item">
      电话：{{ mobile }}
      <span
        v-copy="{
          value: mobile,
        }"
        class="copy-btn"
      >
        &nbsp;复制
      </span>
    </div>
    <h1>以指令的形式调用(自定义成功、或者失败提示)</h1>
    <div class="copy-list-item">
      电话：{{ mobile }}
      <span
        v-copy="{
          value: mobile,
          onSuccess,
          onError,
        }"
        class="copy-btn"
      >
        &nbsp;复制
      </span>
    </div>
    <h1>以method的形式调用</h1>
    <van-notice-bar left-icon="volume-o" text="注意：该方法支持Promise 风格 调用，成功/失败交互需要自己写。" />
    <div class="copy-list-item">
      电话：{{ mobile }}
      <span class="copy-btn" @click="copy">复制</span>
    </div>
  </frame-view>
</template>

<style scoped>
h1 {
  font-size: 18px;
}
.copy-list-item {
  background: #ffffff;
  padding: 10px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 400;
  color: #3b3b3b;
  border-radius: 5px;
  margin-top: 10px;
}
.copy-btn {
  float: right;
  font-weight: 400;
  color: #e94534;
}
</style>
