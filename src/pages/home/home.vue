<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="p-2">
    <div class="flex justify-center">
      <div class="w-36 h-36 border border-solid border-gray-400 mr-auto">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400">5</div>
    </div>
    <el-divider>center</el-divider>
    <div class="flex justify-between">
      <div class="w-36 h-36 border border-solid border-gray-400">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400 ml-auto">5</div>
    </div>
    <el-divider>between</el-divider>
    <div class="flex justify-around">
      <div class="w-36 h-36 border border-solid border-gray-400">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400 mr-auto">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400">5</div>
    </div>
    <el-divider>around</el-divider>
    <div class="flex justify-evenly">
      <div class="w-36 h-36 border border-solid border-gray-400 mr-auto">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400 ml-auto">5</div>
    </div>
    <el-divider>evenly</el-divider>
    <div class="flex justify-stretch">
      <div class="w-36 h-36 border border-solid border-gray-400 ml-auto">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400 mx-auto">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div class="w-36 h-36 border border-solid border-gray-400 mr-auto">5</div>
    </div>
    <el-divider>stretch</el-divider>
    <div class="flex justify-normal h-96">
      <div class="w-36 h-36 border border-solid border-gray-400">1</div>
      <div class="w-36 h-36 border border-solid border-gray-400">2</div>
      <div class="w-36 h-36 border border-solid border-gray-400">3</div>
      <div class="w-36 h-36 border border-solid border-gray-400">4</div>
      <div
        class="w-36 h-36 border border-solid border-gray-400 mt-auto ml-auto"
      >
        5
      </div>
    </div>
    <el-divider>normal</el-divider>
    <div class="flex justify-start h-96">
      <div class="w-36 h-36 border border-solid border-gray-400 m-auto">1</div>
    </div>
    <el-divider>start</el-divider>
  </div>
</template>

<style lang="scss" scoped></style>
