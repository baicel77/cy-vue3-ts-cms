<template>
  <div class="main-header">
    <div class="header-left">
      <el-icon size="28px" @click="handleHeaderIconClick">
        <component :is="isFold ? 'expand' : 'fold'"></component>
      </el-icon>
      <header-crumb />
    </div>
    <div class="header-right">
      <div class="icon">
        <el-icon size="20px"><Message /></el-icon>
        <el-icon class="icon-chat" size="20px"><ChatLineRound /></el-icon>
        <el-icon size="20px"><Search /></el-icon>
      </div>
      <!-- 用户信息 -->
      <header-user />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderUser from './c-cpns/HeaderUser.vue';
import HeaderCrumb from './c-cpns/HeaderCrumb.vue';

const emit = defineEmits(['changeFoldStatus'])

const isFold = ref(false)
const handleHeaderIconClick = () => {
  isFold.value = !isFold.value
  emit('changeFoldStatus', isFold.value)
}

</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .header-left {
    display: flex;
    align-items: center;
    .el-icon {
      margin-right: 15px;
      cursor: pointer;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      align-items: center;
      .icon-chat {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 3px;
          right: 0px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: red;
        }
      }
      .el-icon {
        cursor: pointer;
        width: 40px;
        height: 35px;
        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }
}
</style>
<style>

</style>
