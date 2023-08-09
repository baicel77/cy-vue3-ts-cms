<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from './BaseEchart.vue'
import type { EChartsOption } from 'echarts'
import type { IMapData } from '../type/type'
import { convertData } from '../utils'

interface IProps {
  mapData: IMapData[]
}
const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    tooltip: {}, // 提示框

    visualMap: {
      // 视觉映射组件
      left: '25',
      bottom: '40',
      seriesIndex: [0],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      }
    },

    geo: {
      // 注册一个地理坐标系组件( 给散点图用 )
      map: 'china',
      roam: false,
      label: { show: false },
      aspectScale: 0.75, // 缩放地图
    },
    color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)'],
    series: [
      {
        name: '中国地图',
        tooltip: {
          show: false
        },
        type: 'map',
        map: 'china',
      },
      {
        type: 'scatter',

        // 散点图使用的坐标系: geo定义的坐标系组件
        geoIndex: 0,
        colorBy: 'data',
        coordinateSystem: 'geo', // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件。
        data: convertData(props.mapData),
        symbolSize: 11,
        tooltip: {
          show: true,
          trigger: 'item',
          formatter(params: any) {
            return `${params.name} ${params.value[2]}`
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
