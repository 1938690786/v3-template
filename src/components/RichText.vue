<script lang="ts" setup>
defineProps({
  content: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div v-dompurify-html="content" />
</template>

<style scoped>
:deep(img) {
  max-width: 100%;
}
</style>
