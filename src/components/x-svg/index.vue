<script lang="ts">
export default {
    name: 'XSvg',
}
</script>

<script setup lang="ts">
withDefaults(
    defineProps<{
        className?: string
        name?: string
        size?: string | number
        color?: string
    }>(),
    {
        className: '',
        name: '404',
        color: '',
        size: '14',
    },
)
</script>

<template>
    <svg
        class="svg-icon" :class="[className]"
        :style="{
            width: `${size}px`,
            height: `${size}px`,
        }"
        aria-hidden="true"
    >
        <use :xlink:href="`#icon-${name}`" :fill="color" />
    </svg>
</template>

<style scope lang="scss">
.svg-icon {
    fill: currentColor;
    vertical-align: middle;
}
</style>
