<script lang="ts" setup></script>

<template>
  <el-input
    maxlength="20"
    show-word-limit
    clearable
    placeholder="请输入"
    autocomplete="off"
    v-bind="$attrs"
  ></el-input>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: false };
</script>
