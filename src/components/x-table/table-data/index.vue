<script lang='ts' setup>
defineProps({
    columns: { type: Array<any>, default: () => [] },
    listData: { type: Array, default: () => [] },
})
</script>

<template>
    <el-table :data="listData" stripe height="100%">
        <template v-for="(item, index) of columns" :key="index">
            <el-table-column
                v-if="item?.others?.show !== false"
                :label="item.name" :prop="item.prop"
                :width="item.width ? `${item.width}px` : undefined"
                v-bind="item.others"
            >
                <template v-if="item.others?.tips" #header>
                    {{ item.name }}
                    <el-tooltip
                        class="item"
                        effect="dark"
                        :content="item.others?.tips"
                        placement="top"
                    >
                        <el-icon><QuestionFilled /></el-icon>
                    </el-tooltip>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>

<style scoped lang='scss'>
</style>
