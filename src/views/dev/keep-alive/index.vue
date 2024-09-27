<script lang='ts' setup>
defineOptions({
  name: 'KeepAlive',
})

const value = ref(0)
</script>

<template>
  <div class="p-20">
    <h3>如下所示，下面组件会被缓存</h3>
    <van-stepper v-model="value" />
    <br>
    <br>
    <ul>
      <li>1、在路由中 meta 中标记 keepAlive: true</li>
      <li>2、在当前页面定义页面名称（要同 router 中 name 相同）</li>
    </ul>
  </div>
</template>

<style scoped lang='scss'>
</style>
