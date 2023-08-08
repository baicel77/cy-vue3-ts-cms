<template>
  <div class="page-content">
    <div class="content-title">
      <h3 class="title">{{ contentConfig.header.title }}</h3>
      <el-button type="primary" @click="handleAddClick">{{
        contentConfig.header.btnText
      }}</el-button>
    </div>
    <div class="content-list">
      <el-table :data="pageList" border style="width: 100%" v-bind="contentConfig.otherInfo">
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column v-bind="item">
              <template #default="scope">
                {{ formatTime(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <el-button
                  link
                  type="primary"
                  size="small"
                  icon="edit"
                  @click="handleUpdateClick(scope.row)"
                  >编辑</el-button
                >
                <el-button
                  link
                  type="danger"
                  size="small"
                  icon="delete"
                  @click="handleDeleteClick(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'custom'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope"></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column v-bind="item" />
          </template>
        </template>
      </el-table>
    </div>
    <div class="content-pagenation">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 15, 20]"
        layout="sizes, prev, pager, next, jumper, total"
        :total="pageTotalCount"
        @update:page-size="handleSizeChange"
        @update:current-page="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import usePageStore from '@/store/main/system/system'
import { formatTime } from '@/utils/format'

// 0
const emit = defineEmits(['addClick', 'editClick'])

interface IProps {
  contentConfig: {
    pageName: string
    header: {
      title: string
      btnText: string
    }
    propsList: any[],
    otherInfo?: {}
  }
}

const props = defineProps<IProps>()

// 1. 发起action
const pageStore = usePageStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchPageList()

// 2.获取数据
const { pageList, pageTotalCount } = storeToRefs(pageStore)

// 3.pagenation
const handleSizeChange = () => {
  fetchPageList()
}
const handleCurrentChange = () => {
  fetchPageList()
}

function fetchPageList(formData: any = {}) {
  const offset = (currentPage.value - 1) * pageSize.value
  const size = pageSize.value
  pageStore.handleGetPageData(props.contentConfig.pageName, {
    offset,
    size,
    ...formData
  })
}

const handleDeleteClick = (id: number) => {
  pageStore.handleDeletePageDataById(props.contentConfig.pageName, id)
}

const handleAddClick = () => {
  emit('addClick')
}

const handleUpdateClick = (itemData: any) => {
  emit('editClick', itemData)
}

defineExpose({ fetchPageList })
</script>

<style lang="less" scoped>
.page-content {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  .content-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
    .title {
      font-size: 22px;
    }
  }
  .content-list {
    .el-table {
      :deep(.el-table__cell) {
        padding: 12px 0;
      }
    }
  }
  .content-pagenation {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}
</style>
