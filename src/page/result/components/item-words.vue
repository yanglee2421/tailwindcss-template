<script lang="ts" setup>
import { inject } from "vue";
const form = inject<any>("gpt-form");
</script>

<template>
  <el-form-item
    label="Words"
    prop="Words"
  >
    <el-input-number
      v-model="form.Words"
      :min="1"
      :max="3000"
      controls-position="right"
      placeholder="300"
    ></el-input-number>
  </el-form-item>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
