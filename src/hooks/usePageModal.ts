import { ref } from 'vue'
import PageModal from '@/components/page-modal/PageModal.vue'

type callbackType = (itemData?: any) => void

export function usePageModal(callback?: callbackType) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleAddClick = () => {
    pageModalRef.value?.changeDialogVisible()
    callback && callback()
  }
  const handleUpdateClick = (itemData: any) => {
    pageModalRef.value?.changeDialogVisible(true, itemData)
    callback && callback(itemData.menuList)
  }

  return {
    pageModalRef,
    handleAddClick,
    handleUpdateClick
  }
}

export default usePageModal
