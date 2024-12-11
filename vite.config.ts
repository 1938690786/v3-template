import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'types': path.resolve(__dirname, 'types'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
          javascriptEnabled: true,
          additionalData: `@import "@/styles/utils/@util.scss";`
      }
  }
  },
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      extensions: ['vue'],
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],
    }),
    viteCompression(),
  ],
  server: {
    hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // 服务配置
    port: 5173, // 类型： number 指定服务器端口;
    open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    host: '0.0.0.0', // IP配置，支持从IP启动
  },
})

// function getPlugins(envMap: Record<string, string>): any[] {
//   const plugins = [
//     vue(),
//     UnoCSS(),
//     Components({
//       extensions: ['vue'],
//       resolvers: [VantResolver()],
//       include: [/\.vue$/, /\.vue\?vue/],
//       dts: 'src/components.d.ts',
//     }),
//     AutoImport({
//       dts: 'src/auto-imports.d.ts',
//       imports: ['vue', 'vue-router'],
//     }),
//   ]
//   if (envMap.VITE_APP_COMPRESS) {
//     // gzip
//     const algorithm = <'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw'>envMap.VITE_APP_COMPRESS
//     plugins.push(viteCompression({ algorithm }))
//   }
//   return plugins
// }
