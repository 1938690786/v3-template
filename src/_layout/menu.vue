<script lang='ts' setup>
import { SIDER_ROUTES } from '@/packages/vue-router'

const route = useRoute()

const collapse = ref(false)

const menus = ref<any>([])

function filterMenus() {
    menus.value = SIDER_ROUTES.map((item: any) => {
        return {
            meta: item.meta,
            path: item.path,
            children: item?.children?.map((child: any) => {
                return {
                    meta: child?.meta,
                    path: child?.path,
                    children: child?.children?.map((grandson: any) => {
                        return {
                            meta: grandson?.meta,
                            path: grandson?.path,
                        }
                    }),
                }
            }),
        }
    })
}
filterMenus()
</script>

<template>
    <div class="side-menu">
        <div class="menu-area">
            <el-menu
                class="el-menu-vertical-demo"
                background-color="#001529"
                text-color="#fff"
                :default-active="route.path"
                router
                :collapse="collapse"
            >
                <template v-for="(item, index) of menus" :key="index">
                    <el-sub-menu v-if="item?.children?.length > 0" :index="item.path">
                        <template #title>
                            <el-icon><XSvg class="menu-icon" :name="item.meta?.icon" size="20" /></el-icon>
                            <span>{{ item.meta.title }}</span>
                        </template>
                        <template v-for="(childItem, childIndex) of item.children" :key="childIndex">
                            <el-sub-menu v-if="childItem?.children?.length > 1" :key="childIndex">
                                <template #title>
                                    <span>{{ childItem.meta.title }}</span>
                                </template>
                                <el-menu-item v-for="(grandsonItem, grandsonIndex) of childItem?.children" :key="grandsonIndex">
                                    <template #title>
                                        {{ grandsonItem.meta.title }}
                                    </template>
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="childItem.path">
                                <template #title>
                                    {{ childItem.meta.title }}
                                </template>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                    <el-menu-item v-else :index="item.path">
                        <el-icon>
                            <XSvg class="menu-icon" :name="item.meta?.icon" size="20" />
                        </el-icon>
                        <template #title>
                            <span>{{ item.meta.title }}</span>
                        </template>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
        <div class="menu-tariger" @click="collapse = !collapse">
            <div class="tariger-icon">
                <el-icon :size="20">
                    <CaretRight v-if="collapse" />
                    <CaretLeft v-else />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.side-menu {
    height: 100%;
    position: relative;
    background: #041528;
    overflow: hidden;
    .el-menu {
        border-right: 0;
    }
    .menu-area {
        height: calc(100% - 48px);
        overflow-y: scroll;
        overflow-x: hidden;
        background: #041528;
        &::-webkit-scrollbar {
            display: none;
        }
        .menu-icon {
            margin-right: 5px;
        }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
    .menu-tariger {
        width: 100%;
        height: 48px;
        position: absolute;
        bottom: 0;
        left: 0;
        cursor: pointer;
        .tariger-icon {
            display: inline-block;
            padding: 0 16px;
            height: 100%;
            text-align: left;
            align-items: center;
            font-size: 20px;
            color: #fff;
        }
    }
}
</style>
