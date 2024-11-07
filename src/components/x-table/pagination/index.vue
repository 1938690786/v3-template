<script lang='ts' setup>
const emits = defineEmits(['change'])

const model: any = defineModel<{
    total: number
    filterData: Record<string, any>
    selected: Record<string, any>[]
    pageData: {
        page: number
        size: number
    }
}>()

function handleSizeChange(e: number) {
    model.value.pageData.size = e
    emits('change')
}
function handlePageChange(e: number) {
    model.value.pageData.page = e
    emits('change')
}
</script>

<template>
    <div class="pagination">
        <div>
            <slot name="footer" />
        </div>
        <el-pagination
            :current-page="model?.pageData?.page"
            :page-size="model?.pageData?.size"
            :page-sizes="[10, 20, 30, 50]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="model?.total"
            @size-change="handleSizeChange"
            @current-change="handlePageChange"
        />
    </div>
</template>

<style scoped lang='scss'>
.pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
}
</style>
