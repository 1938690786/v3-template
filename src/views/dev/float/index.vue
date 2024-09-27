<script lang="ts" setup>
import floatHelper from '@/utils/helper/float'
</script>

<template>
  <div class="body">
    <h6>浮点运算加法</h6>
    <p>0.08+0.7={{ 0.08 + 0.7 }}</p>
    <p>0.08+0.7={{ floatHelper.plus(0.08, 0.7) }}</p>
    <h6>浮点运算减法</h6>
    <p>0.3-0.1={{ 0.3 - 0.1 }}</p>
    <p>0.3-0.1={{ floatHelper.min(0.3, 0.1) }}</p>
    <h6>浮点运算乘法</h6>
    <p>0.6*3={{ 0.6 * 3 }}</p>
    <p>0.6*3={{ floatHelper.tim(0.6, 3) }}</p>
    <h6>浮点运算除法</h6>
    <p>355/113={{ 355 / 113 }}</p>
    <p>355/113={{ floatHelper.div(355, 113) }}</p>
    <h6>浮点运算取余数</h6>
    <p>1%0.9={{ 1 % 0.9 }}</p>
    <p>1%0.9={{ floatHelper.mod(1, 0.9) }}</p>
    <h6>补全小数位</h6>
    <p>{{ floatHelper.fix(0.9226, 3) }}</p>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
h6 {
  margin: 8px;
  font-size: 20px;
}
p {
  margin: 8px;
  font-size: 14px;
}
</style>
