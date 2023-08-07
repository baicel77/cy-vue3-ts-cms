<template>
  <div class="page-content">
    <div class="content-title">
      <h3 class="title">部门列表</h3>
      <el-button type="primary" @click="handleAddClick">新建部门</el-button>
    </div>
    <div class="content-list">
      <el-table :data="pageList" border style="width: 100%">
        <el-table-column type="selection" align="center" width="50" />
        <el-table-column type="index" align="center" label="序号" width="60" />
        <el-table-column prop="name" align="center" label="部门名称" width="150" />
        <el-table-column prop="leader" align="center" label="部门领导" width="150" />
        <el-table-column prop="parentId" align="center" label="上级部门" width="150" />
        <el-table-column prop="createAt" align="center" label="创建时间">
          <template #default="scope">
            {{ formatTime(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" align="center" label="更新时间">
          <template #default="scope">
            {{ formatTime(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="150">
          <template #default="scope">
            <el-button link type="primary" size="small" icon="edit" @click="handleUpdateClick(scope.row)">编辑</el-button>
            <el-button link type="danger" size="small" icon="delete" @click="handleDeleteClick(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="content-pagenation">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 15, 20]"
        layout="sizes, prev, pager, next, jumper, total"
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import usePageStore from '@/store/main/system/system'
import { formatTime } from '@/utils/format'

const emit = defineEmits(['addClick', 'editClick'])

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
  pageStore.handleGetPageData('department', {
    offset,
    size,
    ...formData
  })
}

const handleDeleteClick = (id: number) => {
  pageStore.handleDeletePageDataById('department', id)
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
