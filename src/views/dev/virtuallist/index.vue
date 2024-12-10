<script lang='ts' setup>
import { computed, ref, watch } from 'vue'
import { useElementBounding } from '@vueuse/core'

// 开始 index
const startIndex = ref(0)
// 结束 index
const endIndex = computed(() => {
  return startIndex.value + 10
})
// 每项高度
const itemSize = ref(100)
// 数据源
const list: any = ref([])
// 偏移量
const startOffset = ref(0)
// 可视区滚动
const viewport = ref(null)

for (let id = 0; id < 1000; id++) {
  list.value.push({
    id,
  })
}

// 获取开始 index
function getStartIndex(scrollTop) {
  return Math.floor(scrollTop / itemSize.value)
}

// 是否在显示范围之间
function isBetweenViewRanges(index) {
  return index >= startIndex.value && index <= endIndex.value
}

// 获取startOffset
function getStartOffset(startIndex) {
  return startIndex * itemSize.value
}

const { top } = useElementBounding(viewport)

watch(() => top.value, (top) => {
  console.log(top)
  if (top <= 46) {
    const scrollTop = Math.abs(top - 46)
    startIndex.value = getStartIndex(Math.abs(scrollTop))
    startOffset.value = getStartOffset(startIndex.value)
  }
})
</script>

<template>
  <div class="virtuallist">
    <div ref="viewport" class="viewport relative h-[100%]">
      <div class="list-phantom absolute left-0 top-0 w-full" :style="`height: ${list.length * itemSize}px`" />
      <div class="list-area" :style="`transform: translate3d(0,${startOffset}px, 0)`">
        <template v-for="(item, index) of list" :key="item.id">
          <div v-if="isBetweenViewRanges(index)" class="item border border-b-sky-500 border-b-solid text-center text-sky-500" :style="`height: ${itemSize}px; line-height: ${itemSize}px`">
            {{ item.id }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
body {
  overflow: hidden;
}
</style>
