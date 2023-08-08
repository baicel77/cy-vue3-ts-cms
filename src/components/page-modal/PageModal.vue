<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="!isEditSatus ? modalConfig.header.newTitle : modalConfig.header.editTitle"
      width="30%"
      center
    >
      <el-form :label-width="modalConfig.labelWidth" :model="modalForm" size="large">
        <template v-for="item in modalConfig.formItems" :key="item.prop">
          <template v-if="item.type === 'input'">
            <el-form-item :label="item.label">
              <el-input v-model="modalForm[item.prop]" :placeholder="item.placeholder" />
            </el-form-item>
          </template>
          <template v-else-if="item.type === 'select'">
            <el-form-item :label="item.label">
              <el-select
                v-model="modalForm[item.prop]"
                :placeholder="item.placeholder"
                style="width: 100%"
              >
                <template v-for="citem in item.option" :key="citem.value">
                  <el-option :label="citem.label" :value="citem.value" />
                </template>
              </el-select>
            </el-form-item>
          </template>
          <template v-else-if="item.type === 'custom'">
            <slot :name="item.slotName"></slot>
          </template>
        </template>
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
import usePageStore from '@/store/main/system/system'

interface IProps {
  modalConfig: {
    header: {
      newTitle: string
      editTitle: string
    }
    labelWidth: string
    formItems: any[]
    pageName: string
  }
  otherConfig?: {
    menuList?: any[]
  }
}
const props = defineProps<IProps>()

const dialogVisible = ref(false)
const isEditSatus = ref(false)
const rowId = ref()

const initialForm: any = {}
for (const item of props.modalConfig.formItems) {
  if (item.prop) {
    initialForm[item.prop] = ''
  }
}
const modalForm = reactive<any>(initialForm)

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
  let finalModalForm = { ...modalForm }
  if (props?.otherConfig?.menuList) {
    finalModalForm['menuList'] = [...props.otherConfig.menuList]
  }
  dialogVisible.value = false
  if (isEditSatus.value) {
    pageStore.handleEditPageData(props.modalConfig.pageName, rowId.value, finalModalForm)
  } else {
    pageStore.handleAddPageData(props.modalConfig.pageName, finalModalForm)
  }
}

defineExpose({ changeDialogVisible })
</script>

<style lang="less" scoped></style>
