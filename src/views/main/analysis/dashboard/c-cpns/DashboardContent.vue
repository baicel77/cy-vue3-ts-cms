<template>
  <div class="chart-card">
    <el-row :gutter="10">
      <el-col :span="7">
        <content-card>
          <pie-echart :pieData="finalPieData" />
        </content-card>
      </el-col>
      <el-col :span="10">
        <content-card>
          <map-echart :map-data="finalMapData"/>
        </content-card>
      </el-col>
      <el-col :span="7">
        <content-card>
          <rose-echart :roseData="finalPieData"/>
        </content-card>
      </el-col>
      <el-col :span="12">
        <content-card>
          <line-echart :lineData="finalLineData"/>
        </content-card>
      </el-col>
      <el-col :span="12">
        <content-card>
          <bar-echart :barData="finalBarData"/>
        </content-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ContentCard from './ContentCard.vue'
import PieEchart from '@/components/page-echarts/src/PieEchart.vue'
import RoseEchart from '@/components/page-echarts/src/RoseEchart.vue';
import LineEchart from '@/components/page-echarts/src/LineEchart.vue';
import BarEchart from '@/components/page-echarts/src/BarEchart.vue';
import MapEchart from '@/components/page-echarts/src/MapEchart.vue';
interface IProps {
  pieData: any[]
  lineData: any[]
  barData: any[]
  mapData: any[]
}
const props = withDefaults(defineProps<IProps>(), {
  pieData: () => [],
  lineData: () => [],
  barData: () => [],
  mapData: () => []
})

const finalPieData = computed(() => {
  return props.pieData.map((item) => {
    return {
      name: item.name,
      value: item.goodsCount
    }
  })
})

const finalLineData = computed(() => {
  const name: string[] = []
  const value: number[] = []
  props.lineData.forEach(item => {
    name.push(item.name)
    value.push(item.goodsCount)
  })
  return {
    name,
    value
  }
})

const finalBarData = computed(() => {
  const name: string[] = []
  const value: number[] = []
  props.barData.forEach(item => {
    name.push(item.name)
    value.push(item.goodsFavor)
  })
  return {
    name,
    value
  }
})

const finalMapData = computed(() => {
  return props.mapData.map((item) => {
    return {
      name: item.address,
      value: item.count
    }
  })
})
</script>

<style lang="less" scoped>
.el-col {
  margin-bottom: 10px;
}
</style>
