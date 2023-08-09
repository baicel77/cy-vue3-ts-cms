<template>
  <div class="header-card">
    <div class="top">
      <div class="title">{{ itemData.title }}</div>
      <el-tooltip effect="dark" :content="itemData.tips" placement="top">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="number1" ref="number1Ref">{{ itemData.number1 }}</div>
    <div class="bottom">
      <div class="subtitle">{{ itemData.subtitle }}</div>
      <div class="number2" ref="number2Ref">{{ itemData.number2 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js';
import { onMounted, ref } from 'vue';

interface IProps {
  itemData: {
    amount: string
    number1: number
    number2: number
    subtitle: string
    tips: string
    title: string
  }
}
const props = defineProps<IProps>()
const number1Ref = ref()
const number2Ref = ref()
// eslint-disable-next-line vue/no-setup-props-destructure
const option = {
  prefix: props.itemData.amount === "saleroom" ? '￥' : ''
}
onMounted(() => {
  new CountUp(number1Ref.value, props.itemData.number1, option).start()
  new CountUp(number2Ref.value, props.itemData.number2, option).start()
})

</script>

<style lang="less" scoped>
.header-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 130px;
  padding: 0 20px;
  font-size: 14px;
  color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 38px;
    color: rgba(0, 0, 0, 0.45);
  }
  .number1 {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 26px;
  }
  .bottom {
    display: flex;
    height: 38px;
    border-top: 1px solid #f0f0f0;
    line-height: 38px;
    letter-spacing: 1px;
  }
}
</style>
