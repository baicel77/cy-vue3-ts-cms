<template>
  <div class="base-echart" ref="baseEchartRef" :style="{ height }"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import chinaJSON from '../data/china.json'
interface IProps {
  height?: string
  option: EChartsOption
}
const props = withDefaults(defineProps<IProps>(), {
  height: '300px'
})

const baseEchartRef = ref()
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  const echartsInstance = echarts.init(baseEchartRef.value, null, { renderer: 'canvas' })
  // 注册地图
  watchEffect(() => {
    echartsInstance.setOption(props.option)
  })
  // 响应式
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })
})
</script>

<style lang="less" scoped></style>
