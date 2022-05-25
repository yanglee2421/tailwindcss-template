<template>
  <el-scrollbar>
    <el-descriptions
      title="Vertical list with border"
      direction="vertical"
      :column="4"
      :size="size"
      border
    >
      <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
      <el-descriptions-item label="Telephone" span="3"
        >18100000000</el-descriptions-item
      >
      <el-descriptions-item label="Place" span="2">Suzhou</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address">1234565 </el-descriptions-item>
    </el-descriptions>
  </el-scrollbar>
  <!-- 
    el-descriptions-item的span不影响item的宽度
    超过当前行容量的值视为剩余最大值
   -->
</template>
<script setup>
</script>
<style lang='scss' scoped>
</style>