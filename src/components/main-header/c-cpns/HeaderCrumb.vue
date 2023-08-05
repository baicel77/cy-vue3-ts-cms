<template>
  <div class="header-crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in crumb" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import useLoginStore from '@/store/login/login'
import { mapRouteToCrumb } from '@/utils/map-menu'

const loginStore = useLoginStore()
const route = useRoute()
const crumb = computed(() => mapRouteToCrumb(route.path, loginStore.menuInfo))

</script>

<style lang="less" scoped></style>
