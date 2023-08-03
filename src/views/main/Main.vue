<template>
  <div class="main">
    <button @click="onBtnClick">修改button</button>
    <h3>main页面</h3>
    <h3>counter:{{ counterStore.counter }} doubleCounter: {{ counterStore.doubleCounter }}</h3>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()
const onBtnClick = () => {
  counterStore.changeCounterAction(200)
}
</script>

<style lang="less" scoped>
h3 {
  background-color: pink;
  padding: 20px;
}
</style>
