import type { RouteLocation, RouteMeta } from 'vue-router'

interface RouteConfig {
  path: string
  name?: string
  children?: RouteConfig[]
  redirect?: string | RouteLocation
  alias?: string | string[]
  meta?: {
    isTab?: boolean
    title: string
    [key: string]: any
  }
  component?: any
}

type _TouchEvent = TouchEvent & {
  _isScroller?: boolean
}

export interface GeoLocationType {
  module?: string
  latlng: {
    lat: number
    lng: number
  }
  poiaddress?: string
  poiname?: string
  cityname?: string
}
