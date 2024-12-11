<script lang='ts' setup>
import vueIcon from '@/assets/images/svg/vue.svg'
import viteIcon from '@/assets/images/svg/vite.svg'
import unocssIcon from '@/assets/images/svg/unocss.svg'

const router = useRouter()

const list = ref([
  {
    name: 'vue',
    version: '3.4',
    icon: vueIcon,
  },
  {
    name: 'vite',
    version: '5.4',
    icon: viteIcon,
  },
  {
    name: 'unocss',
    version: '0.62',
    icon: unocssIcon,
  },
])

function handleJump() {
  router.push('/dev')
}
</script>

<template>
  <div class="my-30 text-center text-44">
    welcome to h5-template
  </div>
  <div class="flex items-center justify-center">
    <template v-for="(item, index) of list" :key="index">
      <div class="mr-60 flex flex-col items-center text-blueGray last-of-type:mr-0">
        <img class="w-100" :src="item.icon" alt="">
        <span class="mt-10 text-32">@{{ item.version }}</span>
      </div>
    </template>
  </div>
  <button class="mx-auto mt-30 flex items-center justify-center text-32" @click="handleJump">
    开发者工具库<van-icon name="arrow" />
  </button>
</template>
