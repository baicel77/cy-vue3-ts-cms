<template>
  <div class="panel-phone">
    <el-form
      :model="phoneForm"
      label-width="60px"
      size="large"
      ref="formRef"
      status-icon
    >
      <el-form-item label="手机号">
        <el-input v-model="phoneForm.phoneNumber" />
      </el-form-item>
      <el-form-item class="verify" label="验证码">
        <el-input v-model="phoneForm.verifyCode" type="password" show-password />
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
interface IPhone {
  phoneNumber: string
  verifyCode: string
}
const phoneForm = reactive<IPhone>({
  phoneNumber: '',
  verifyCode: ''
})
</script>

<style lang="less" scoped>
.verify {
  :deep(.el-form-item__content) {
    display: flex;
    flex-wrap: nowrap;
    .el-button {
      margin-left: 10px;
    }
  }
}
</style>
