<template>
  <div class="dashboard">
    <dashboard-header :goodsAmountList="goodsAmountList" />
    <dashboard-content :pieData="goodsCategoryCount" :lineData="goodsCategorySale" :bar-data="goodsCategoryFavor" :map-data="goodsAddressSale"/>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from './c-cpns/DashboardHeader.vue'
import DashboardContent from './c-cpns/DashboardContent.vue'

import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia';
const analysisStore = useAnalysisStore()
// 1.发起action
analysisStore.getGoodsAmountListAction()
analysisStore.getGoodsCategoryCountAction()
analysisStore.getGoodsCategorySaleAction()
analysisStore.getGoodsCategoryFavorAction()
analysisStore.getGoodsAddressSaleAction()
// 2.获取数据
const { goodsAmountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor, goodsAddressSale } = storeToRefs(analysisStore)
</script>

<style lang="less" scoped>

</style>
