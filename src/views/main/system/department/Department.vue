<template>
  <div class="page">
    <page-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
      :searchConfig="searchConfig"
    />
    <page-content
      ref="PageContentRef"
      @add-click="handleAddClick"
      @edit-click="handleUpdateClick"
      :contentConfig="contentConfig"
    >
    </page-content>
    <page-modal ref="pageModalRef" :modalConfig="newModalConfig" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import PageSearch from '@/components/page-search/PageSearch.vue'
import PageContent from '@/components/page-content/PageContent.vue'
import PageModal from '@/components/page-modal/PageModal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import { storeToRefs } from 'pinia'
import useMainStore from '@/store/main/main'
const mainStore = useMainStore()
const { entireDepartmentList } = storeToRefs(mainStore)

const newModalConfig = computed(() => {
  const option = entireDepartmentList.value.map((item) => {
    return {
      label: item.name,
      value: item.id
    }
  })
  modalConfig.formItems.forEach((item: any) => {
    if (item.prop === 'parentId') {
      item['option'] = option
    }
  })
  return modalConfig
})

// content hooks
const { PageContentRef, handleQueryClick, handleResetClick } = usePageContent()

// modal hooks
const { pageModalRef, handleAddClick, handleUpdateClick } = usePageModal()

</script>

<style lang="less" scoped></style>
