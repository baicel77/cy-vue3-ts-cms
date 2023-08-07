<template>
  <div class="department">
    <department-search @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <department-content ref="departmentContentRef" @add-click="handleAddClick" @edit-click="handleUpdateClick" />
    <department-modal ref="pageModalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DepartmentSearch from './c-cpns/DepartmentSearch.vue';
import DepartmentContent from './c-cpns/DepartmentContent.vue'
import DepartmentModal from './c-cpns/DepartmentModal.vue';

const departmentContentRef = ref<InstanceType<typeof DepartmentContent>>()
const handleQueryClick = (userForm: any) => {
  departmentContentRef.value?.fetchPageList(userForm)
}
const handleResetClick = (userForm: any) => {
  departmentContentRef.value?.fetchPageList(userForm)
}


const pageModalRef = ref<InstanceType<typeof DepartmentModal>>()
const handleAddClick = () => {
  pageModalRef.value?.changeDialogVisible()
}
const handleUpdateClick = (itemData: any) => {
  pageModalRef.value?.changeDialogVisible(true, itemData)
}

</script>

<style lang="less" scoped>

</style>
