<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" :title="!isEditSatus ? '新建用户' : '编辑用户'" width="30%" center>
      <el-form label-width="100px" :model="modalForm" size="large">
        <el-form-item label="用户名">
          <el-input v-model="modalForm.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="modalForm.realname" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item label="密码" v-if="!isEditSatus">
          <el-input v-model="modalForm.password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="modalForm.cellphone" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="modalForm.roleId" placeholder="请选择角色" style="width: 100%;">
            <template v-for="item in entireRoleList" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="部门">
          <el-select v-model="modalForm.departmentId" placeholder="请选择部门" style="width: 100%;">
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
import { useUserStore } from '@/store/main/system/system'
import { storeToRefs } from 'pinia';
const dialogVisible = ref(false)
const isEditSatus = ref(false)
const rowId = ref()
const modalForm = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const mainStore = useMainStore()

const { entireRoleList, entireDepartmentList } = storeToRefs(mainStore)

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

const userStore = useUserStore()
const handleConfirm = () => {
  dialogVisible.value = false
  if (isEditSatus.value) {
    userStore.handleEditUsers(rowId.value, {...modalForm})
  } else {
    userStore.handleAddUsers({...modalForm})
  }
}

defineExpose({ changeDialogVisible })
</script>

<style lang="less" scoped></style>
