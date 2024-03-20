<script lang="ts" setup>
import { ElButton, ElEmpty } from "element-plus";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="pt-3 text-center">
    <h1 class="text-danger">出了点小问题</h1>
    <ElEmpty description="404，找不到对应内容"></ElEmpty>
    <RouterLink :to="{ name: 'home' }">
      <el-button
        type="primary"
        size="large"
        plain
        >Take me home</el-button
      >
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
