<template>
  <div class="main-header">
    <div class="header-left">
      <el-icon size="28px" @click="handleHeaderIconClick">
        <component :is="isFold ? 'expand' : 'fold'"></component>
      </el-icon>
      <div class="breadcrumb">面包屑</div>
    </div>
    <div class="header-right">
      <div class="icon">
        <el-icon size="20px"><Message /></el-icon>
        <el-icon class="icon-chat" size="20px"><ChatLineRound /></el-icon>
        <el-icon size="20px"><Search /></el-icon>
      </div>
      <el-dropdown>
        <div class="userInfo">
          <el-avatar
            :size="30"
            src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
          />
          <div class="name">coderwhy</div>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TOKEN } from '@/global';
import { localCache } from '@/utils/cache';
import { useRouter } from 'vue-router';

const router = useRouter()
const emit = defineEmits(['changeFoldStatus'])

const handleExitLogin = () => {
  localCache.removeCache(TOKEN)
  const isKeepPassword = localCache.getCache('isKeepPassword')
  if (!isKeepPassword) {
    localCache.removeCache('name')
    localCache.removeCache('password')
  }
  router.push('/login')
}
const isFold = ref(false)
const handleHeaderIconClick = () => {
  isFold.value = !isFold.value
  emit('changeFoldStatus', isFold.value)
}

</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .header-left {
    display: flex;
    align-items: center;
    .el-icon {
      cursor: pointer;
    }
    .breadcrumb {
      margin-left: 15px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      align-items: center;
      .icon-chat {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 3px;
          right: 0px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: red;
        }
      }
      .el-icon {
        cursor: pointer;
        width: 40px;
        height: 35px;
        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
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
  }
}
</style>
<style>
.userInfo-menu .el-dropdown-menu__item {
  line-height: 36px;
  padding: 6px 22px;
}
</style>
