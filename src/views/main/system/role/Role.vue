<template>
  <div class="role">
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
    <page-modal ref="pageModalRef" :modalConfig="modalConfig" :otherConfig="otherConfig">
      <template #menuTree>
        <el-tree
          ref="treeRef"
          :data="entireMenuList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import useMainStore from '@/store/main/main'
import type { ElTree } from 'element-plus/lib'

import PageSearch from '@/components/page-search/PageSearch.vue'
import searchConfig from './config/search.config'

import PageContent from '@/components/page-content/PageContent.vue'
import contentConfig from './config/content.config'

import PageModal from '@/components/page-modal/PageModal.vue'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import { mapMenuToIds } from '@/utils/map-menu'


const mainStore = useMainStore()
const { entireMenuList } = storeToRefs(mainStore)

// content hooks
const { PageContentRef, handleQueryClick, handleResetClick } = usePageContent()

// modal hooks
const { pageModalRef, handleAddClick, handleUpdateClick } = usePageModal(editCallback)

const otherConfig: any = {}
const handleTreeCheck = (_: any, data: any) => {
  const menuList = [...data.checkedKeys, ...data.halfCheckedKeys]
  otherConfig['menuList'] = menuList
}

const treeRef = ref<InstanceType<typeof ElTree>>()
function editCallback(itemData: any) {
  nextTick(() => {
    const ids = mapMenuToIds(itemData ?? [])
    console.log('ids', ids)

    treeRef.value?.setCheckedKeys(ids)
  })
}
</script>

<style lang="less" scoped>
.el-tree {
  padding-left: 100px;
}
</style>
