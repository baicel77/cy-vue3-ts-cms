<template>
  <div class="menu">
    <page-content :contentConfig="contentConfig"/>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/PageContent.vue';
import contentConfig from './config/content.config'
</script>

<style lang="less" scoped>

</style>
