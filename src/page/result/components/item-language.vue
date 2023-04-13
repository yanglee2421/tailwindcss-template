<script lang="ts" setup>
import { inject } from "vue";
const form = inject<any>("gpt-form");
</script>

<template>
  <el-form-item
    label="Language"
    props="Language"
    :rules="[{ require: true }]"
  >
    <el-select
      v-model="form.Language"
      clearable
      filterable
      allow-create
    >
      <el-option
        v-for="item in 5"
        :key="item"
        :label="item"
        :value="item"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
