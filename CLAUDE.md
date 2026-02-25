# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指导。

## 项目概述

Vue 3 后台管理模板（分支：`web-elementui`），使用 Element Plus、Pinia 和 Vite 构建，专为 CRUD 密集型应用设计，内置完善的表格/筛选系统。

## 常用命令

```bash
pnpm dev          # 启动开发服务器（支持 HMR 热更新）
pnpm build        # 生产环境构建（输出目录：dist/）
pnpm preview      # 预览生产构建结果
pnpm lint         # ESLint 自动修复（Vue/TS/JS）
pnpm lint:error   # ESLint 仅显示错误（静默模式）
```

## 架构说明

### 布局系统 (`src/_layout/`)
- `App.vue` 根据路由条件渲染：登录页/404 等签名页面 或 框架主布局
- 框架布局结构：固定头部（56px）+ 侧边栏菜单 + 内容区域
- 签名页面名称在 `app` Pinia store 的 `signPageNames` 中注册

### 路由 (`src/packages/vue-router/` + `src/config/router/`)
- 路由以配置文件形式定义在 `src/config/router/` 中，动态加载
- 开发专用路由（`develop.ts`）在生产环境中通过环境检测排除
- 路由配置使用 `sort` 字段排序，遵循 `types/index.d.ts` 中的 `RouteConfig` 类型
- Keep-alive 缓存由 `route-cache` Pinia store 管理

### 状态管理 (`src/config/pinia/modules/`)
- `app` store：主题（明/暗）、权限（使用 `Set` 存储，O(1) 查找）、签名页面名称
- `route-cache` store：管理 keep-alive 路由名称列表
- 两个 store 均使用 `pinia-plugin-persistedstate` 实现持久化

### 自定义组件 (`src/components/`)
- **x-table**：功能丰富的数据表格，支持动态列、筛选、分页、排序、多选、标签页切换和操作按钮。列类型：`default`、`dict`、`status`、`slot`、`operate`
- **x-operate**：表格操作按钮列
- **x-status**：状态标签组件，使用 `StatusType`（`success | primary | info | warning | danger | default`）
- **x-svg**：SVG 图标渲染器（图标放置于 `src/assets/svgs/`）

### 表格/筛选辅助工具 (`src/utils/helper/table/`)
使用建造者模式定义表格列和筛选项：
```ts
// 表格列
tableHelper.default(prop, label)
tableHelper.dict(prop, label)
tableHelper.status(prop, label)
tableHelper.slot(prop, label)
tableHelper.operate()

// 筛选项
filterHelper.input(prop, label)
filterHelper.select(prop, label)
filterHelper.dateRange(prop, label)
filterHelper.cascader(prop, label)
filterHelper.slot(prop, label)
```

### HTTP 客户端 (`src/packages/request/`)
- 基于 Axios 封装，超时时间 5 秒
- 请求拦截器自动注入 `Authorization` 请求头
- 响应拦截器通过 `ElMessage` 处理错误提示

### 自动导入
- Vue API（`ref`、`computed`、`reactive`、`watch` 等）和 Vue Router API（`useRoute`、`useRouter`）自动导入，无需手动引入
- `src/components/` 下的组件自动注册
- 生成的类型文件：`src/auto-imports.d.ts`、`src/components.d.ts`（请勿手动编辑）

## 关键约定

- **包管理器**：pnpm
- **代码格式**：4 空格缩进、单引号、无分号（由 @antfu/eslint-config 强制执行）
- **样式方案**：UnoCSS 原子化类 + SCSS（sass-embedded）
- **全局类型**：`Option`、`Status`、`StatusType` 定义在 `types/global.d.ts`
- **路径别名**：`@/` → `src/`，`types/` → `types/`
- **Element Plus 图标**：在 `main.ts` 中全局注册
- **国际化**：Element Plus 配置为中文（zhCn）
