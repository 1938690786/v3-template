<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import useApp from '@/config/pinia/modules/app'
import uaHelper from '@/hooks/useUa'
import tabbar from '@/config/tabbar'

const props = withDefaults(defineProps<{
  // 自定义返回
  customBack?: () => void
  // 是否显示tabbar
  tabbar?: boolean
  // 沉浸式
  immersion?: boolean
  // 头部透明度
  opacity?: number
}>(), {
  tabbar: false,
  immersion: false,
  opacity: 100,
})

const router = useRouter()
const route = useRoute()

const app = useApp()
const { mode } = storeToRefs(app)

const showLeftArrow = computed(() => {
  if (route.meta.isTab || route.path === '/')
    return false
  return true
})

function onBack() {
  if (props.customBack) {
    props.customBack()
  }
  else {
    router.back()
  }
}

const title = computed(() => {
  if (!route.meta) {
    return ''
  }
  return route.meta.title as string || ''
})

/** 获取顶部安全距离，针对APP场景 */
const getSafeAreaTop = computed(() => {
  if (uaHelper.inApp) {
    return app.safeAreaTop || 0
  }
  return 0
})

/** 计算是否需要显示tabbar */
const showTabbar = computed(() => {
  return props.tabbar
})
</script>

<template>
  <VanConfigProvider :theme="mode">
    <div class="h-screen flex flex-col" :class="[getSafeAreaTop ? '' : 'top-safe-area', showTabbar ? '' : 'bottom-safe-area']">
      <!-- navbar -->
      <VanNavBar
        :title="title"
        :fixed="immersion"
        clickable
        placeholder
        :left-arrow="showLeftArrow"
        :style="{
          paddingTop: `${getSafeAreaTop}px`,
          backgroundColor: props.immersion ? `rgba(255, 255, 255,${props.opacity / 100})` : '',
        }"
        @click-left="onBack"
      >
        <template v-if="$slots['nav-right']" #right>
          <slot name="nav-right" />
        </template>
        <template v-if="$slots['nav-title']" #title>
          <slot name="nav-title" />
        </template>
        <template v-if="$slots['nav-left']" #left>
          <slot name="nav-left" />
        </template>
      </VanNavBar>
      <!-- content -->
      <div class="x-content flex-1 overflow-x-hidden overflow-y-auto">
        <slot />
      </div>
      <!-- tabbar -->
      <van-tabbar v-if="showTabbar" placeholder active-color="#F12F1A" inactive-color="#000" route :safe-area-inset-bottom="true">
        <van-tabbar-item v-for="(item, index) of tabbar" :key="index" replace :to="item.router">
          <span>{{ item.title }}</span><template #icon="props">
            <img :src="props.active ? item.active : item.inactive">
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </VanConfigProvider>
</template>

<style scoped lang="scss">
.x-content {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
