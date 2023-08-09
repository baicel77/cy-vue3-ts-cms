<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from './BaseEchart.vue'
import type { EChartsOption } from 'echarts'
import type { ILineData } from '../type/type'

interface IProps {
  lineData: ILineData
}
const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    legend: {},
    grid: {
      bottom: 25,
      right: 25
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.lineData.name
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '分类销量统计',
        data: props.lineData.value,
        type: 'line',
        areaStyle: {}
      }
    ],
    color: ['#37a2da']
  }
})
</script>

<style lang="less" scoped></style>
