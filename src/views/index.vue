<script lang='ts' setup>
const router = useRouter()
const jgList = ref([
  {
    label: '全产品分享',
    icon: '/src/assets/images/home/icon1.png',
  },
  {
    label: '用户分析',
    icon: '/src/assets/images/home/icon2.png',
  },
  {
    label: '启动助手',
    icon: '/src/assets/images/home/icon3.png',
  },
  {
    label: '顾客档案',
    icon: '/src/assets/images/home/icon1.png',
  },
])

function jumpDevelop() {
  router.push({
    name: 'dev',
  })
}
</script>

<template>
  <X-Layout tabbar background-color="#fff">
    <div class="w-full px-32 pt-48">
      <!-- banner -->
      <img class="mb-24 h-332 w-full" src="@/assets/images/home/banner.png" alt="">
      <!-- notice -->
      <div class="mb-48 h-80 flex items-center border border-[#C9C9C9] rounded-24 border-solid px-24">
        <img class="mr-16 h-40 w-40" src="@/assets/images/home/notice.png" alt="">
        <van-notice-bar class="flex-1 !px-0 !text-24" color="#444444" background="transparent" scrollable text="米袋虽空——樱花开哉！" />
      </div>
      <!-- 金刚区 -->
      <div class="mb-64 flex">
        <div v-for="(item, index) in jgList" :key="index" class="mr-60 flex flex-col items-center text-blueGray last-of-type:mr-0">
          <img class="mb-16 h-118 w-118 flex flex-col items-center" :src="item.icon" alt="">
          <span class="text-24 text-[#444444]">{{ item.label }}</span>
        </div>
      </div>
      <!-- 我的 nu 店 -->
      <div v-for="item of 3" :key="item" class="mb-24">
        <div class="mb-32 h-40 flex items-center justify-between">
          <img src="@/assets/images/home/nu.png" class="h-40 w-214" alt="">
          <div class="h-40 flex items-center justify-center text-24 text-[#8D8D8D]">
            查看全部 <img class="h-24 w-24" src="@/assets/images/home/right-arrow.png" alt="">
          </div>
        </div>
        <div class="nu h-240 flex items-center">
          <div class="w-272 flex flex-col items-center text-[#444444]">
            <div class="mb-24 text-24">
              当月订单金额
            </div>
            <div class="mb-36 text-32 font-semibold">
              $61,888
            </div>
            <div class="h-50 w-200 flex items-center justify-center border-2 border-[#ef817e] border-rounded-[27px] border-solid text-28 text-[#ef817e] font-semibold">
              当月<span>¥4230</span>↑
            </div>
          </div>
          <div class="mr-16 h-208 w-192 flex flex-col items-center justify-center text-[#444444]">
            <span class="mb-16 text-24">店铺粉丝</span>
            <span class="text-36">1,123人</span>
          </div>
          <div class="h-208 w-192 flex flex-col items-center justify-center text-[#444444]">
            <span class="mb-16 text-24">我的NU币</span>
            <span class="text-36">1123个</span>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-200 right-30 h-100 w-100 rounded-[50px] bg-dark bg-opacity-50 text-center text-24 text-white font-semibold leading-[100px]" @click="jumpDevelop">
      devtool
    </div>
  </X-Layout>
</template>

<style lang="scss" scoped>
.nu {
  background-image: url('@/assets/images/home/nu-BG.png');
  background-size: 100%;
  border-radius: 24px;
  overflow: hidden;
}
</style>
