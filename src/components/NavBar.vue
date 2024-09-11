<script setup lang="ts">
const route = useRoute()
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    router.back()
  else
    router.replace('/')
}

const title = computed(() => {
  if (!route.meta)
    return ''

  return route.meta.title || ''
})

const showLeftArrow = computed(() => {
  if (route.meta.isTab || route.path === '/')
    return false
  return true
})
</script>

<template>
  <VanNavBar
    :title="title"
    :fixed="true"
    clickable
    placeholder
    :left-arrow="showLeftArrow"
    @click-left="onBack"
  />
</template>
