import type { RouteRecordRaw } from 'vue-router'
import baseRouter from './base'
import { useEnv } from '@/hooks/useEnv'

const modulesFiles = (import.meta as any).glob('/src/config/router/*.ts', { eager: true })
const modules: any = {}
for (const key in modulesFiles) {
    modules[key.replace('/src/config/router/', '').replace('.ts', '')] = modulesFiles[key].default
}

const routers = []

for (const key in modules) {
    if (key !== 'dev') {
        routers.push(...modules[key])
    }
}

if (modules?.dev && useEnv('development')) {
    routers.push(...modules.dev)
}

routers.push(...baseRouter)

export default routers as RouteRecordRaw[]
