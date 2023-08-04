<template>
  <div class="main-menu">
    <div class="menu-title">
      <img src="../../assets/img/logo.svg" alt="" />
      <div class="text" v-show="!isCollapse">后台管理系统</div>
    </div>
    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      default-active="39"
      text-color="#b7bdc3"
      :collapse="isCollapse"
      :collapse-transition="true"
    >
      <template v-for="item in loginStore.menuInfo" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="citem in item.children" :key="citem.id">
            <el-menu-item :index="citem.id + ''" @click="handleMenuItemClick(citem)">{{ citem.name }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { useRouter } from 'vue-router';

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()

const router = useRouter()
const handleMenuItemClick = (item :any) => {
  router.push(item.url)
}
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
  .menu-title {
    position: relative;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    img {
      width: 28px;
      height: 28px;
    }
    .text {
      height: 100%;
      margin-left: 10px;
      color: #fff;
      font-weight: 600;
      overflow: hidden;
    }
  }
  .el-menu {
    border-right: none;
  }
  .el-menu-item {
    &.is-active {
      background-color: #0a60bd;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
