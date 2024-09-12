<script lang='ts' setup>
const router = useRouter()

function jump(name: string) {
  router.push({ name })
}
</script>

<template>
  <div class="px-16 py-16">
    <h1> 开发者工具 </h1>
    <section>
      <h3>基础组件</h3>
      <div class="h-48 w-full rounded-24 bg-gray-200 px-24 leading-48" @click="jump('KeepAlive')">
        keep-alive
      </div>
    </section>
  </div>
</template>

<style scoped lang='scss'>
</style>
