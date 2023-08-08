import { ref } from 'vue'
import PageContent from '@/components/page-content/PageContent.vue'

export function usePageContent() {
  const PageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleQueryClick = (userForm: any) => {
    PageContentRef.value?.fetchPageList(userForm)
  }
  const handleResetClick = () => {
    PageContentRef.value?.fetchPageList()
  }

  return {
    PageContentRef,
    handleQueryClick,
    handleResetClick
  }
}

export default usePageContent
