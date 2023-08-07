<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" :title="!isEditSatus ? '新建用户' : '编辑用户'" width="30%" center>
      <el-form label-width="100px" :model="modalForm" size="large">
        <el-form-item label="部门名称">
          <el-input v-model="modalForm.name" placeholder="请输入部门名称" />
        </el-form-item>
        <el-form-item label="部门领导">
          <el-input v-model="modalForm.leader" placeholder="请输入部门领导" />
        </el-form-item>
        <el-form-item label="部门">
          <el-select v-model="modalForm.parentId" placeholder="请选择部门" style="width: 100%;">
            <template v-for="item in entireDepartmentList" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useMainStore from '@/store/main/main'
import usePageStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia';
const dialogVisible = ref(false)
const isEditSatus = ref(false)
const rowId = ref()
const modalForm = reactive<any>({
  name: '',
  leader: '',
  parentId: ''
})

const mainStore = useMainStore()

const { entireDepartmentList } = storeToRefs(mainStore)

const changeDialogVisible = (isEdit: boolean = false, itemData?: any) => {
  dialogVisible.value = true
  isEditSatus.value = isEdit
  if (isEdit && itemData) {
    rowId.value = itemData.id
    for (const key in modalForm) {
      modalForm[key] = itemData[key]
    }
  } else {
    for (const key in modalForm) {
      modalForm[key] = ''
    }
  }
}

const pageStore = usePageStore()
const handleConfirm = () => {
  dialogVisible.value = false
  if (isEditSatus.value) {
    pageStore.handleEditPageData('department', rowId.value, {...modalForm})
  } else {
    pageStore.handleAddPageData('department', {...modalForm})
  }
}

defineExpose({ changeDialogVisible })
</script>

<style lang="less" scoped></style>
