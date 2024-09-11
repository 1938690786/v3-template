<script lang='ts' setup>
const router = useRouter()

function jump(name: string) {
  router.push({ name })
}
</script>

<template>
  <div class="px-4 py-4">
    <h1> 开发者工具 </h1>
    <section>
      <h3>基础组件</h3>
      <div class="h-12 w-full rounded-6 bg-gray-200 px-4 leading-12" @click="jump('KeepAlive')">
        keep-alive
      </div>
    </section>
  </div>
</template>

<style scoped lang='scss'>
</style>
