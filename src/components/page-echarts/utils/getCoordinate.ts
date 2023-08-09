// 1.先拿到地图的 geo json 对象

import * as echarts from 'echarts'

export function getCoordinate() {
  const geoCoordMap: any = {}
  const mapFeatures = echarts.getMap('china').geoJSON.features
  mapFeatures.forEach(function (item: any) {
    // 地区名称
    const name = item.properties.name
    // 地区经纬度
    geoCoordMap[name] = item.properties.cp
  })

  return geoCoordMap
}
