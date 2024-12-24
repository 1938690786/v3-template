<script lang="ts" setup>
import type { XTtableOperate } from '@/utils/helper/table/table/index'

const props = defineProps<{ list: Array<XTtableOperate>, row: Record<string, any> }>()
const emits = defineEmits<{
    (e: 'click', row: any, index: number): void
}>()

function operateList(): any {
    return props.list.filter((item) => {
        let result = true
        if (typeof item.show === 'function') {
            const fnResult = item.show(props.row)
            if (fnResult === false)
                result = false
        }
        else if (typeof item.show === 'boolean') {
            result = item.show
        }
        else {
            result = true
        }
        return result
    })
}

function click(row: any, index: number) {
    emits('click', row, index)
}
</script>

<template>
    <el-button
        v-for="(item, index) of operateList()"
        :key="index"
        type="text"
        @click="click"
    >
        {{ item.label }}
    </el-button>
</template>

<style scoped lang="scss">
</style>
