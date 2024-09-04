<script setup lang="ts">
function submit(e: any) {
  console.log(e)
}
</script>

<template>
  <van-button type="primary" @click="submit">
    button button
  </van-button>
</template>
