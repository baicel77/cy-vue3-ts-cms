<template>
  <div class="page-search">
    <el-form :model="pageForm" label-width="80px" size="large" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="pageForm.name" placeholder="请输入查询的部门名称" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="pageForm.leader" placeholder="请输入查询的领导名称" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="pageForm.createAt"
              type="daterange"
              range-separator="到"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="refresh" size="large" @click="handleFormReset">重置</el-button>
      <el-button type="primary" icon="search" size="large" @click="handleFormQuery">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

const emit = defineEmits(['queryClick', 'resetClick'])

const pageForm = reactive({
  name: '',
  leader: '',
  createAt: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
const handleFormReset = () => {
  formRef.value?.resetFields()
  emit('resetClick', pageForm)
}
const handleFormQuery = () => {
  emit('queryClick', pageForm)
}
</script>

<style lang="less" scoped>
.page-search {
  background-color: #fff;
  padding: 20px;
  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }
  .btns {
    padding: 0 50px 10px 0;
    text-align: right;
    .el-button {
      height: 36px;
    }
  }
}
</style>
