<template>
  <div class="login">
    <h3>login页面</h3>
  </div>
</template>

<script setup lang="ts">
import cyRequest1 from "@/service";

interface IHomeData {
  data: any[]
  returnCode: string
  success: boolean
}

cyRequest1.request<IHomeData>({
  url: "/home/multidata",
  interceptors: {
    successRequetInterceptors: config => {
      return config
    },
    failRequetInterceptors: err => {
      return err
    },
    successResponseInterceptors: res => {
      return res
    },
    failResponseInterceptors: err => {
      return err
    }
  }
}).then(res => {
  // console.log('homeRes', res)
})


</script>

<style lang="less" scoped>
  h3 {
    background-color: skyblue;
    padding: 20px;
  }
</style>
