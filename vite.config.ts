import path, { resolve } from 'node:path'
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
            '@': path.resolve(__dirname, 'src'),
            'types': path.resolve(__dirname, 'types'),
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
            iconDirs: [resolve(__dirname, 'src/assets/svgs')],
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
})
