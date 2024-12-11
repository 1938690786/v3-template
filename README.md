# h5 项目基础框架

## 简介

### 技术栈

Vue 3 + TypeScript + Vite + Vue Router + Pinia + vant4 + unocss

> 基于当前框架，作为开发者只需要关心以下目录：
>
> **src/assets：** 存放图片资源
>
> **src/config/api：** 接口请求存放
>
> **src/config/pinia：** pinia状态机存放，每个文件代表一个模块
>
> **src/config/router：** 路由配置存放，会自动引入多个路由文件
>
> **src/views：** 视图开发目录

### Node版本

`node v18+`

## 开发规范

### 常用命名

-   **大驼峰：**BaseButton
-   **小驼峰：**baseButton
-   **中划线：**base-button
-   **下划线：**base_button
-   **常量：**BASE_BUTTON,BASEBUTTON

文件夹命名：**中划线**

### 路由和文件夹命名

路由命名需要简短，并能准确定位到对应的视图目录中。

-   **路由 path：**/order/list

-   **路由 name：**order-list

-   **路由对应文件夹：**/views/order/list

### 组件命名

组件 name 全部以大坨峰命名，组件引入全部以大坨峰引入，组件在 template 模板中使用全部以中划线引入。

**src\components**和**src\views\components**下的组件可以直接使用，无需手动引入。



┌─ README.md                            项目介绍                       
├─ eslint.config.js                     eslint 配置文件                   
├─ index.html                           html 模板文件              
├─ package.json                         package.json 文件                   
├─ postcss.config.js                    postcss 配置文件
├─ src
├─ ─ src/App.vue
├─ ─ src/assets                         静态资源
├─ ─ ─ src/assets/images                图片资源
├─ ─ src/components                     全局组件
├─ ─ ─ src/components/Loading.vue       加载动画
├─ ─ ─ src/components/RichText.vue      富文本组件
├─ ─ ─ src/components/TabBar.vue        底部导航栏
├─ ─ ─ src/components/Welcome.vue       欢迎页
├─ ─ ─ src/components/XDrag.vue         拖拽组件
├─ ─ ─ src/components/XLayout.vue       布局组件
├─ ─ src/config                         配置文件
├─ ─ ─ src/config/apis                  接口配置文件
├─ ─ ─ src/config/pinia                 状态管理文件
├─ ─ ─ src/config/router                路由配置文件
├─ ─ ─ src/config/tabbar.ts             底部导航栏配置文件
├─ ─ src/hooks                          自定义hooks
├─ ─ ─ src/hooks/useCopy.ts             复制文本
├─ ─ ─ src/hooks/useEnv.ts              获取环境变量
├─ ─ ─ src/hooks/useSleep.ts            模拟延时
├─ ─ ─ src/hooks/useUa.ts               获取ua信息
├─ ─ src/main.ts
├─ ─ src/packages                       自定义组件库
├─ ─ ─ src/packages/directive           自定义指令
├─ ─ ─ src/packages/init                初始化配置文件
├─ ─ ─ src/packages/request             请求封装
├─ ─ ─ src/packages/vue-router          路由封装
├─ ─ src/styles                         全局样式
├─ ─ ─ src/styles/index.css             全局样式
├─ ─ ─ src/styles/utils                 样式工具
├─ ─ src/utils                          工具类
├─ ─ ─ src/utils/helper                 常用工具
├─ ─ ─ ─ src/utils/helper/date          日期处理
├─ ─ ─ ─ src/utils/helper/env           环境变量
├─ ─ ─ ─ src/utils/helper/float         
├─ ─ ─ ─ src/utils/helper/form          表单处理
├─ ─ ─ ─ src/utils/helper/image         图片处理
├─ ─ ─ ─ src/utils/helper/type          
├─ ─ ─ ─ src/utils/helper/ua            ua信息
├─ ─ ─ ─ src/utils/helper/validator     验证器
├─ ─ ─ src/utils/tools                  工具类
├─ ─ ─ ─ src/utils/tools/get-realpx     获取实际px
├─ ─ ─ ─ src/utils/tools/native-bridge  原生桥接
├─ ─ ─ ─ src/utils/tools/retry          重试
├─ ─ ─ ─ src/utils/tools/session        session
├─ ─ ─ ─ src/utils/tools/storage        本地存储
├─ ─ ─ ─ src/utils/tools/wx             微信公号
├─ ─ src/views                          视图
├─ ─ ─ src/views/404
├─ ─ ─ src/views/dev
├─ template                             模板文件
├─ tsconfig.app.json                    tsconfig.json
├─ tsconfig.json                        tsconfig.json
├─ tsconfig.node.json                   tsconfig.json
├─ types                                类型声明文件
├─ uno.config.ts                        unocss 配置文件
└─ vite.config.ts                       vite 配置文件