import type { RouteLocation, RouteMeta } from 'vue-router'

interface RouteConfig {
    path: string
    sort?: number
    name?: string
    children?: RouteConfig[]
    redirect?: string | RouteLocation
    alias?: string | string[]
    meta: {
        title: string
        [key: string]: any
    }
    component?: any
}

type _TouchEvent = TouchEvent & {
    _isScroller?: boolean
}
