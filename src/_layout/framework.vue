<script lang='ts' setup>
import Header from './header.vue'
import Menu from './menu.vue'
import Index from './index.vue'
</script>

<template>
    <div class="framework">
        <Header />
        <div class="framework-main">
            <Menu class="framework-menu" />
            <div class="framework-content">
                <Index />
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.framework {
    height: 100vh;
    .framework-main {
        height: calc(100vh - 56px);
        display: flex;
        justify-content: space-between;
        .framework-menu {
            flex-shrink: 0;
        }
        .framework-content {
            flex: 1;
        }
    }
}
</style>
