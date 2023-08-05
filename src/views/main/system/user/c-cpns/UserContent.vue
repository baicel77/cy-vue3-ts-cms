<template>
  <div class="user-content">
    <div class="content-title">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="content-list">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column type="selection" align="center" width="50" />
        <el-table-column type="index" align="center" label="序号" width="60" />
        <el-table-column prop="name" align="center" label="用户名" width="150" />
        <el-table-column prop="realname" align="center" label="真实姓名" width="150" />
        <el-table-column prop="cellphone" align="center" label="手机号码" width="150" />
        <el-table-column prop="enable" align="center" label="状态" width="100" />
        <el-table-column prop="createAt" align="center" label="创建时间" />
        <el-table-column prop="updateAt" align="center" label="更新时间" />
        <el-table-column label="操作" align="center" width="150">
          <template #default>
            <el-button link type="primary" size="small" icon="edit">编辑</el-button>
            <el-button link type="danger" size="small" icon="delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="content-pagenation">分页器</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/main/system/system'
// 1. 发起action
const userStore = useUserStore()
userStore.handleGetUseristAction()

// 2.获取数据
const { userList } = storeToRefs(userStore)
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
}
</style>
