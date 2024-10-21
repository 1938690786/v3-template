<script lang='ts' setup>
const route = useRoute()
const router = useRouter()

const menus = ref<any>([])

function filterMenus() {
    const FILTER_PATH = ['/login', '/:pathMatch(.*)*']
    menus.value = router.options.routes.filter(item => !FILTER_PATH.includes(item.path)).sort((a: RouteRecordRaw, b: RouteRecordRaw) => {
        return a?.sort - b?.sort
    }).map((item: any) => {
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
    <el-menu
        class="el-menu-vertical-demo"
        background-color="#001529"
        text-color="#fff"
        :default-active="route.path"
        router
    >
        <template v-for="(item, index) of menus" :key="index">
            <el-sub-menu v-if="item?.children?.length > 1" :index="item.path">
                <template #title>
                    <XSvg :name="item.meta?.icon" size="18" />
                    <span>{{ item.meta.title }}</span>
                </template>
                <template v-for="(childItem, childIndex) of item.children" :key="childIndex">
                    <el-sub-menu v-if="childItem?.children?.length > 1" :key="childIndex">
                        <template #title>
                            <el-icon><location /></el-icon>
                            <span>{{ childItem.meta.title }}</span>
                        </template>
                        <el-menu-item v-for="(grandsonItem, grandsonIndex) of childItem?.children" :key="grandsonIndex">
                            {{ grandsonItem.meta.title }}
                        </el-menu-item>
                    </el-sub-menu>
                    <el-menu-item v-else :index="childItem.path">
                        {{ childItem.meta.title }}
                    </el-menu-item>
                </template>
            </el-sub-menu>
            <el-menu-item v-else :index="item.path">
                <template #title>
                    <XSvg :name="item.meta?.icon" size="18" />
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>
        <!-- <el-sub-menu index="1">
            <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item-group>
                <template #title>
                    <span>Group One</span>
                </template>
                <el-menu-item index="1-1">
                    item one
                </el-menu-item>
                <el-menu-item index="1-2">
                    item two
                </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">
                    item three
                </el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title>
                    <span>item four</span>
                </template>
                <el-menu-item index="1-4-1">
                    item one
                </el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>
                Navigator Two
            </template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>
                Navigator Three
            </template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>
                Navigator Four
            </template>
        </el-menu-item> -->
    </el-menu>
</template>

<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}
</style>
