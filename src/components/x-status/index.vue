<script lang="ts" setup>
import type { XStatusProps } from './types.ts'

const props = withDefaults(defineProps<XStatusProps>(), {
    type: 'success',
})

const tagClass = computed(() => `tag-type-${props.type}`)
</script>

<template>
    <span class="x-status flex items-center justify-center">
        <span class="tag-type" :class="[tagClass]" />
        <span class="tag-title">{{ props.title }}</span>
    </span>
</template>

<style lang="scss" scoped>
.x-status {
    vertical-align: middle;
    .tag-type {
        position: relative;
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 8px;

        @mixin set-color($color) {
            background-color: $color;
            &:after {
                border-color: $color;
                animation: antStatusProcessing 1.2s ease-in-out infinite;
            }
        }

        &-success {
            @include set-color(#58d55d);
        }
        &-primary {
            @include set-color(#76d3ff);
        }
        &-info {
            @include set-color(#999);
        }
        &-warning {
            @include set-color(#ffb025);
        }
        &-danger {
            @include set-color(#f85959);
        }
        &-default {
            @include set-color(#cdcdcd);
        }

        &:after {
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-width: 1px;
            border-style: solid;
            border-radius: 50%;
            content: '';
        }
    }
    @keyframes antStatusProcessing {
        0% {
            transform: scale(0.8);
            opacity: 0.5;
        }
        to {
            transform: scale(2.4);
            opacity: 0;
        }
    }
}
</style>
