<script lang='ts' setup>
import uaHelper from '@/hooks/useUa'

const list = ref([
  { title: '是否微信', value: uaHelper.isWechat },
  { title: '是否企业微信', value: uaHelper.isEntWechat },
  { title: '是否微信小程序', value: uaHelper.isWemp },
  { title: '是否移动端', value: uaHelper.isMobile },
  { title: '是否IOS', value: uaHelper.isIos },
  { title: '是否Android', value: uaHelper.isAndroid },
  { title: '是否IOSApp', value: uaHelper.isIosApp },
  { title: '是否AndroidApp', value: uaHelper.isAndroidApp },
  { title: '是否APP', value: uaHelper.inApp },
])
</script>

<template>
  <X-Layout>
    <van-cell-group>
      <van-cell v-for="(item, idx) of list" :key="idx" :title="item.title" :value="`${item.value}`" />
    </van-cell-group>
  </X-Layout>
</template>
