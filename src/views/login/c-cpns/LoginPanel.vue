<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

    <div class="tab">
      <el-tabs type="border-card" v-model="activeName" stretch>
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </span>
          </template>
          <!-- 账号登录面板 -->
          <panel-account ref="accountRef"/>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </span>
          </template>
          <!-- 手机登录面板 -->
          <panel-phone />
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="control">
      <el-checkbox v-model="isKeepPassword" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <div class="login">
      <el-button type="primary" size="large" @click="handleLoginAction">立即登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import PanelAccount from './PanelAccount.vue'
import PanelPhone from './PanelPhone.vue'
import { localCache } from '@/utils/cache';
import { watch } from 'vue';

const isKeepPassword = ref(localCache.getCache('isKeepPassword') ?? false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PanelAccount>>()
watch(isKeepPassword, (value) => {
  localCache.setCache('isKeepPassword', value)
})

const handleLoginAction = () => {
  if (activeName.value === 'account') {
    accountRef.value?.handleAccountLogin(isKeepPassword.value)
  } else {
    console.log('手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  .tab {
    .custom-tabs-label {
      display: flex;
      align-items: center;
      .text {
        margin-left: 5px;
      }
    }
  }
  .title {
    margin-bottom: 15px;
    text-align: center;
  }
  .control {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .login {
    .el-button {
      width: 100%;
    }
  }
}
</style>
