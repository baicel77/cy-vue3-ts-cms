<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from './BaseEchart.vue'
import type { EChartsOption } from 'echarts'
import type { IPieData } from '../type/type'

interface IProps {
  roseData: IPieData[]
}
const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item',
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: [10, 160],
        center: ['50%', '58%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: false
        },
        data: props.roseData
      },
    ],
    color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#9a60b4', '#ea7ccc']
  }
})
</script>

<style lang="less" scoped></style>
