<script lang="ts" setup>
import { inject } from "vue";
const form = inject<any>("gpt-form");
</script>

<template>
  <el-form-item
    label="Description"
    prop="Description"
  >
    <el-input
      type="textarea"
      :rows="7"
      placeholder="something in here"
      maxlength="3000"
    ></el-input>
  </el-form-item>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
