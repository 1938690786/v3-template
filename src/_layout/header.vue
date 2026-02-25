<script lang='ts' setup>
import { removeToken } from '@/utils/storage'

const router = useRouter()

function handleLogout() {
    removeToken()
    router.replace('/login')
}
</script>

<template>
    <div class="header">
        <div class="left">
            <el-icon size="30">
                <ElementPlus />
            </el-icon>
        </div>
        <div class="right">
            <el-button type="danger" text @click="handleLogout">
                <el-icon class="mr-4px">
                    <SwitchButton />
                </el-icon>
                退出登录
            </el-button>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.header {
    transition: all 0.2s;
    z-index: 999;
    width: 100%;
    height: 56px;
    line-height: 56px;
    background-color: #001529;
    box-shadow: 0 2px 8px #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
        color: #fff;
        padding-left: 20px;
        display: flex;
        align-items: center;
    }
    .right {
        padding-right: 20px;
    }
}
</style>
