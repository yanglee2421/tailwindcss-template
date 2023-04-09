<script lang="ts" setup>
import { inject } from "vue";

const form = inject<any>("gpt-form");
const res = inject<any>("gpt-res");
</script>

<template>
  <el-dialog>
    <div class="box">
      <el-descriptions :column="1">
        <el-descriptions-item label="Title">
          <b class="title">{{}}</b>
        </el-descriptions-item>
        <el-descriptions-item label="Keywords">
          <p>
            <b></b>
          </p>
        </el-descriptions-item>
        <el-descriptions-item label="Description">
          <article v-html="''"></article>
        </el-descriptions-item>
      </el-descriptions>
      <div class="center-divider"></div>
      <el-descriptions :column="1">
        <el-descriptions-item label="Title">
          <b class="title">{{}}</b>
        </el-descriptions-item>
        <el-descriptions-item label="Keywords">
          <p>
            <b></b>
          </p>
        </el-descriptions-item>
        <el-descriptions-item label="Description">
          <article v-html="''"></article>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
