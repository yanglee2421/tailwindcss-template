<template>
  <div class="h-100 flex-column">
    <el-menu
      mode="horizontal"
      router
    >
      <el-menu-item
        index="1"
        :route="{name:'param'}"
      >传参</el-menu-item>
      <el-menu-item
        index="2"
        :route="{name:'table'}"
      >表格</el-menu-item>
      <el-menu-item index="3">123</el-menu-item>
      <el-menu-item index="4">123</el-menu-item>
    </el-menu>
    <main class="flex-1-hidden p-1">
      <router-view />
    </main>
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
</style>