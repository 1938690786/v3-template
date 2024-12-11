<script lang='ts' setup>
defineOptions({
  name: 'KeepAlive',
})

const value = ref(0)
</script>

<template>
  <X-Layout>
    <div class="p-20">
      <div class="text-32 font-semibold">
        如下所示，下面组件会被缓存
      </div>
      <van-stepper v-model="value" />
      <br>
      <br>
      <ul>
        <li class="text-28">
          1、在路由中 meta 中标记 keepAlive: true
        </li>
        <li class="text-28">
          2、在当前页面定义页面名称（要同 router 中 name 相同）
        </li>
      </ul>
    </div>
  </X-Layout>
</template>

<style scoped lang='scss'>
</style>
