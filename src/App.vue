<template>
  <div class="app">
    <h3>App~</h3>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
a {
  display: inline-block;
  background-color: antiquewhite;
  padding: 10px;
  margin-right: 10px;
  &.router-link-active {
    color: red;
  }
}
</style>
