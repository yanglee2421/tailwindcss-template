<script lang="ts" setup>
import { unref } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const btnRef = ref();

const handleClick = () => {
  console.log("xxxxx", unref(btnRef));
};
</script>

<template>
  <div class="text-center pt-3">
    <h1 class="text-danger">出了点小问题</h1>
    <el-empty description="404，找不到对应内容"></el-empty>
    <el-button
      @click="router.push('/')"
      type="danger"
      size="large"
      plain
      >Take me home</el-button
    >
    <ly-btn
      ref="btnRef"
      @click="handleClick"
      >handleError</ly-btn
    >
  </div>
</template>

<style lang="scss" scoped></style>
