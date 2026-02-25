<script lang="ts" setup>
/**
 * x-operate 操作按钮列组件
 * 渲染表格操作列中的按钮，支持动态显示/隐藏和禁用
 */
import type { XTtableOperate } from '@/utils/helper/table/table/index'

const props = defineProps<{ list: Array<XTtableOperate>, row: Record<string, any>, idx: number }>()
const emits = defineEmits<{
    (e: 'click', label: string, row: any, index: number): void
}>()

/** 根据 show 条件过滤后的可见操作按钮列表 */
const operateList = computed(() => {
    return props.list.filter((item) => {
        if (typeof item.show === 'function') {
            return item.show(props.row) !== false
        }
        if (typeof item.show === 'boolean') {
            return item.show
        }
        return true
    })
})

/** 获取按钮标签文字（支持函数类型） */
function getLabel(item: XTtableOperate): string {
    return typeof item.label === 'function' ? item.label(props.row) : item.label
}

/** 获取按钮禁用状态（支持函数类型） */
function getDisabled(item: XTtableOperate): boolean {
    if (typeof item.disabled === 'function') {
        return item.disabled(props.row, props.idx)
    }
    return item.disabled === true
}

function click(item: XTtableOperate) {
    emits('click', getLabel(item), props.row, props.idx)
}
</script>

<template>
    <el-button
        v-for="(item, index) of operateList"
        :key="index"
        link
        :disabled="getDisabled(item)"
        v-bind="item.others"
        @click="click(item)"
    >
        {{ getLabel(item) }}
    </el-button>
</template>
