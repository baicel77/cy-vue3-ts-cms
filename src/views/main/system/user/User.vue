<template>
  <div class="user">
    <user-search @query-click="handleQueryClick" @reset-click="handleResetClick"/>
    <user-content ref="userContentRef" @add-click="handleAddClick" @edit-click="handleUpdateClick" />
    <user-modal ref="userModalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserSearch from './c-cpns/UserSearch.vue'
import UserContent from './c-cpns/UserContent.vue'
import UserModal from './c-cpns/UserModal.vue';

const userContentRef = ref<InstanceType<typeof UserContent>>()
const handleQueryClick = (userForm: any) => {
  userContentRef.value?.fetchUserList(userForm)
}
const handleResetClick = (userForm: any) => {
  userContentRef.value?.fetchUserList(userForm)
}

const userModalRef = ref<InstanceType<typeof UserModal>>()
const handleAddClick = () => {
  userModalRef.value?.changeDialogVisible()
}
const handleUpdateClick = (itemData: any) => {
  userModalRef.value?.changeDialogVisible(true, itemData)
}

</script>

<style lang="less" scoped>
.user {
  border-radius: 10px;
  overflow: hidden;
}
</style>
