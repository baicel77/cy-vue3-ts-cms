<template>
  <div class="header-user">
    <el-dropdown>
        <div class="userInfo">
          <el-avatar
            :size="30"
            src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
          />
          <div class="name">{{ name }}</div>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="userInfo-menu">
            <el-dropdown-item @click="handleExitLogin">
              <el-icon><CircleClose /></el-icon>
              <span class="text">退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span class="text">个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              <span class="text">修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { TOKEN } from '@/global';
import { localCache } from '@/utils/cache';

const router = useRouter()

const handleExitLogin = () => {
  localCache.removeCache(TOKEN)
  const isKeepPassword = localCache.getCache('isKeepPassword')
  if (!isKeepPassword) {
    localCache.removeCache('name')
    localCache.removeCache('password')
  }
  router.push('/login')
}

const { name } = localCache.getCache('userInfo')
</script>

<style lang="less" scoped>
.userInfo {
    display: flex;
    align-items: center;
    margin-left: 25px;
    cursor: pointer;
    outline: none;
    .name {
      margin-left: 5px;
      font-size: 14px;
    }
  }
</style>
<style>
.userInfo-menu .el-dropdown-menu__item {
  line-height: 36px;
  padding: 6px 22px;
}
</style>
