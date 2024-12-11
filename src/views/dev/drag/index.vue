<script lang="ts" setup>
import { showToast } from 'vant'

function handleClick(): void {
  showToast('触发点击事件')
}
</script>

<template>
  <X-Layout>
    <XDrag :auto-ads="true" @click="handleClick">
      <div class="h-[60px] w-[60px] flex items-center justify-center rounded-[50%] bg-[#3b3b3b] text-[14px] text-white">
        拖我
      </div>
    </XDrag>
  </X-Layout>
</template>

<style lang="scss" scoped>
.drag {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 60px;
  height: 60px;
  background-color: #3b3b3b;
  border-radius: 50%;
  color: #ffffff;
}
</style>
