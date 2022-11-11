<template>
  <div class="box-root">
    <el-card header="父向子传参">
      <FtS></FtS>
    </el-card>
    <el-card header="子向父传参">
      <StF></StF>
    </el-card>
    <el-card header="祖先后代传参">
      <Anc></Anc>
    </el-card>
    <el-card header="兄弟间传参">
      <BtB></BtB>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import FtS from "./F-S/Father.vue";
import StF from "./S-F/Father.vue";
import Anc from "./A-O/Ancestor.vue";
import BtB from "./B-B/Father.vue";
</script>
<style lang="scss" scoped>
.box-root {
  display: grid;
  @media (max-width: 779px) {
    grid-template: 300px/1fr;
    grid-auto-rows: 300px;
  }
  @media (min-width: 780px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
  gap: 10px;
  height: 100%;
  padding: 10px;
}
.el-card {
  @extend .flex-column;
}
:deep(h3) {
  margin-bottom: 10px;
}
:deep(.el-card__body) {
  flex: 1;
  display: flex;
  align-items: center;
  > div {
    width: 100%;
  }
}
</style>
