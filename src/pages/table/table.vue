<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <el-table :data="[]">
    <el-table-column
      label="col 1"
      width="150"
    ></el-table-column>
    <el-table-column label="col 2"></el-table-column>
    <el-table-column
      label="col 3"
      width="150"
    ></el-table-column>
    <el-table-column label="col 4"></el-table-column>
  </el-table>
</template>

<style lang="scss" scoped></style>
