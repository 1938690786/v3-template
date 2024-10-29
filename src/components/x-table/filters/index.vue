<script lang='ts' setup>
defineProps({
    // 表格筛选项
    filters: { type: Array, default: () => [] },
})
</script>

<template>
    <div class="x-table-filters">
        <el-row :gutter="10">
            <el-col v-for="item of 10" :key="item" :lg="6" :span="8">
                <div class="grid-content" />
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang='scss'>
.x-table-filters {
    width: 100%;
    background: #fff;
    .grid-content {
        width: 100%;
        height: 50px;
        background: pink;
    }
}
</style>
