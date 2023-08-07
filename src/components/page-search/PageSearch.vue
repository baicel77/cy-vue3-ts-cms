<template>
  <div class="page-search">
    <el-form :model="pageForm" :label-width="searchConfig.labelWidth ?? '80px'" size="large" ref="formRef">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="pageForm[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-if="item.type === 'datePicker'">
                <el-date-picker
                  v-model="pageForm.createAt"
                  type="daterange"
                  range-separator="到"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
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

interface IProps {
  searchConfig: {
    labelWidth?: string
    formItems: any[]
  }
}
const props = defineProps<IProps>()

const initialForm:any = {}
for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? ''
}

const pageForm = reactive<any>(initialForm)

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
