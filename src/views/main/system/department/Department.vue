<template>
  <div class="page">
    <page-search @query-click="handleQueryClick" @reset-click="handleResetClick" :searchConfig="searchConfig" />
    <page-content ref="PageContentRef" @add-click="handleAddClick" @edit-click="handleUpdateClick" />
    <page-modal ref="pageModalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageSearch from '@/components/page-search/PageSearch.vue'

import PageContent from './c-cpns/PageContent.vue'
import PageModal from './c-cpns/PageModal.vue';

import searchConfig from './config/search.config'

const PageContentRef = ref<InstanceType<typeof PageContent>>()
const handleQueryClick = (userForm: any) => {
  PageContentRef.value?.fetchPageList(userForm)
}
const handleResetClick = () => {
  PageContentRef.value?.fetchPageList()
}


const pageModalRef = ref<InstanceType<typeof PageModal>>()
const handleAddClick = () => {
  pageModalRef.value?.changeDialogVisible()
}
const handleUpdateClick = (itemData: any) => {
  pageModalRef.value?.changeDialogVisible(true, itemData)
}

</script>

<style lang="less" scoped>

</style>
