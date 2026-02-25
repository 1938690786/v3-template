import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'types': fileURLToPath(new URL('./types', import.meta.url)),
        },
    },
    plugins: [
        vue(),
        Components({
            extensions: ['vue'],
            include: [/\.vue$/, /\.vue\?vue/],
            dts: 'src/components.d.ts',
        }),
        AutoImport({
            dts: 'src/auto-imports.d.ts',
            imports: ['vue', 'vue-router'],
        }),
        // svg-icon
        createSvgIconsPlugin({
            iconDirs: [fileURLToPath(new URL('./src/assets/svgs', import.meta.url))],
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
})
