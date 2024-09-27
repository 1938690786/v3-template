<script lang='ts' setup>
const router = useRouter()

function jump(path: string) {
  router.push({ path })
}

const list = reactive([
  {
    title: '页面缓存',
    data: [
      {
        route: '/dev/keep-alive',
        name: 'keep-alive',
      },
    ],
  },
  {
    title: '基础组件',
    data: [
      {
        route: '/dev/rich-text',
        name: '富文本渲染',
      },
      {
        route: '/dev/loading',
        name: '局部加载动画',
      },
    ],
  },
  {
    title: '业务组件',
    data: [
    ],
  },
  {
    title: '工具类',
    data: [
      {
        route: '/dev/float',
        name: '浮点运算',
      },
    ],
  },
  {
    title: '全局指令',
    data: [
      {
        route: '/dev/copy',
        name: '复制',
      },
    ],
  },
])
</script>

<template>
  <div class="bg-white px-16 py-16">
    <h1> 开发者工具 </h1>
    <section>
      <div v-for="(item, index) of list" :key="index">
        <h3>{{ item.title }}</h3>
        <div v-for="detail in item.data" :key="detail.route" class="mb-10 h-36 w-full rounded-24 bg-[#f7f8fa] px-24 leading-36" @click="jump(detail.route)">
          {{ detail.name }}
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang='scss'>
</style>
