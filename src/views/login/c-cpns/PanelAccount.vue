<template>
  <div class="panel-account">
    <el-form
      :model="accountForm"
      label-width="60px"
      size="large"
      :rules="rules"
      ref="formRef"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage, type ElForm } from 'element-plus'
import type { IAccount } from '@/type/login'
import useLoginStore from '@/store/login/login'
const loginStore = useLoginStore()

const accountForm = reactive<IAccount>({
  name: '',
  password: ''
})

const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 15, message: '长度须要在2~15位之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '须要是3位以上数字或字母组成', trigger: 'blur' }
  ]
}

const formRef = ref<InstanceType<typeof ElForm>>()
const handleAccountLogin = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      loginStore.handleLoginAction({ ...accountForm })
    } else {
      ElMessage.error('表单验证失败, 请填写正确的表单项!')
    }
  })
}

defineExpose({
  handleAccountLogin
})
</script>

<style lang="less" scoped></style>
