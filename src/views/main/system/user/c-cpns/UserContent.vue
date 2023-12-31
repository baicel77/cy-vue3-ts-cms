<template>
  <div class="user-content">
    <div class="content-title">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" @click="handleAddClick">新建用户</el-button>
    </div>
    <div class="content-list">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column type="selection" align="center" width="50" />
        <el-table-column type="index" align="center" label="序号" width="60" />
        <el-table-column prop="name" align="center" label="用户名" width="150" />
        <el-table-column prop="realname" align="center" label="真实姓名" width="150" />
        <el-table-column prop="cellphone" align="center" label="手机号码" width="150" />
        <el-table-column prop="enable" align="center" label="状态" width="100">
          <template #default="scope">
            <el-button type="primary" size="small" plain>
              {{ scope.row.enable === 1 ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
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
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/main/system/system'
import { formatTime } from '@/utils/format'

const emit = defineEmits(['addClick', 'editClick'])

// 1. 发起action
const userStore = useUserStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchUserList()

// 2.获取数据
const { userList, totalCount } = storeToRefs(userStore)

// 3.pagenation
const handleSizeChange = () => {
  fetchUserList()
}
const handleCurrentChange = () => {
  fetchUserList()
}

function fetchUserList(formData: any = {}) {
  const offset = (currentPage.value - 1) * pageSize.value
  const size = pageSize.value
  userStore.handleGetUseristAction({
    offset,
    size,
    ...formData
  })
}

const handleDeleteClick = (id: number) => {
  userStore.handleDeleteUserById(id)
}

const handleAddClick = () => {
  emit('addClick')
}

const handleUpdateClick = (itemData: any) => {
  emit('editClick', itemData)
}

defineExpose({ fetchUserList })
</script>

<style lang="less" scoped>
.user-content {
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
