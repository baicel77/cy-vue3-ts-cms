<template>
  <div class="amount-card">
    <el-row :gutter="10">
      <template v-for="item in goodsAmountList" :key="item.amount">
        <el-col :span="6">
          <header-card :itemData="item"/>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import HeaderCard from './HeaderCard.vue'
interface IProps {
  goodsAmountList: any[]
}
withDefaults(defineProps<IProps>(), {
  goodsAmountList: () => []
})
</script>

<style lang="less" scoped>
.amount-card {
  margin-bottom: 10px;
}
</style>
