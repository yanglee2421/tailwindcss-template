<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="flex justify-center">
    <el-button
      icon="WindPower"
      size="large"
      circle
      text
      class="text-2xl"
    />
    <el-button
      icon="ElementPlus"
      size="large"
      circle
      text
      class="text-2xl"
    />
    <el-button
      icon="SwitchFilled"
      size="large"
      circle
      text
      class="text-2xl"
    />
    <el-button
      icon="ChromeFilled"
      size="large"
      circle
      text
      tag="a"
      href="https://github.com/yanglee2421/vite-vue"
      target="_blank"
      class="text-2xl"
      title="github"
    />
  </div>
</template>

<style lang="scss" scoped></style>
