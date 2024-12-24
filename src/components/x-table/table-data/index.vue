<script lang='ts' setup>
defineProps({
    columns: { type: Array<any>, default: () => [] },
    listData: { type: Array, default: () => [] },
    // 是否多选
    selectEnable: { type: Boolean, default: false },
    // 是否显示序号
    indexEnable: { type: Boolean, default: false },
})

const model: any = defineModel<{
    total: number
    filterData: Record<string, any>
    selected: any[]
    tabData: ''
    pageData: {
        page: number
        size: number
    }
}>()

function selectChange(e: any) {
    model.value.selected = e
}

/**
 * 获取字典值
 */
function getDictValue(option: Option[], value: string | number) {
    const index = option.findIndex((item: Option) => item.value === value)
    if (index > -1) {
        return option[index].label
    } else return '-'
}
</script>

<template>
    <el-table :data="listData" stripe height="100%" @selection-change="selectChange">
        <el-table-column v-if="indexEnable" type="index" width="50" />
        <el-table-column v-if="selectEnable" type="selection" width="55" />
        <template v-for="(item, index) of columns" :key="index">
            <template v-if="item?.others?.show !== false">
                <el-table-column
                    v-if="item.type === 'default'"
                    :label="item.name"
                    :prop="item.prop"
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
                <el-table-column
                    v-else-if="item.type === 'dict'"
                    :label="item.name"
                    :prop="item.prop"
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
                    <template #default="{ row }">
                        {{ getDictValue(item.dict, row[item.prop]) }}
                    </template>
                </el-table-column>
                <template v-else-if="item.type === 'slot'">
                    <slot :name="item.prop" />
                </template>
            </template>
        </template>
    </el-table>
</template>

<style scoped lang='scss'>
</style>
