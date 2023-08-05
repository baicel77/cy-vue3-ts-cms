<template>
  <div class="user">
    <user-search />
    <user-content />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/UserSearch.vue'
import UserContent from './c-cpns/UserContent.vue'

</script>

<style lang="less" scoped>
.user {
  border-radius: 10px;
  overflow: hidden;
}
</style>
