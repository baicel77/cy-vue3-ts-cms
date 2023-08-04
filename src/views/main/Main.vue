<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <main-menu :isCollapse="isCollapse"></main-menu>
      </el-aside>
      <el-container class="content-container">
        <el-header height="50px">
          <main-header @changeFoldStatus="changeFoldStatus"></main-header>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from '@/components/main-menu/MainMenu.vue'
import MainHeader from '@/components/main-header/MainHeader.vue'

const isCollapse = ref(false)
const changeFoldStatus = (collapseStatus: boolean) => {
  isCollapse.value = collapseStatus
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .main-container {
    height: 100%;
    .el-aside {
      transition: width 0.25s ease-in-out;
    }
    .content-container {
      .el-main {
        background-color: #f0f2f5;
      }
    }
  }
}
</style>
