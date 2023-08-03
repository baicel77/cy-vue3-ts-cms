<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url(./assets/img/login-bg.svg);
}
</style>
