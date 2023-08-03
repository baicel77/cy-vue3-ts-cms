<template>
  <div class="main">
    <h3>main</h3>
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
</style>
