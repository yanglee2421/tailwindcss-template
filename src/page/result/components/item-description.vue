<script lang="ts" setup>
import { inject } from "vue";
import type { formData } from "../type";

const form = inject<formData>("gpt-form")!;
</script>

<template>
  <el-form-item
    label="Description"
    prop="Description"
  >
    <el-input
      v-model.trim="form.Description"
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
