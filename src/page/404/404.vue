<template>
  <div class="text-center pt-3">
    <h1 class="text-danger">出了点小问题</h1>
    <el-empty description="404，找不到对应内容"></el-empty>
    <el-button
      @click="router.go(-1)"
      type="danger"
      size="large"
      plain
      >返回</el-button
    >
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { getJoke } from "@/api/api-joke";
const router = useRouter();
getJoke().then((res) => {
  console.log(res);
});
const url = new URL("/api/joke", import.meta.env.VITE_BASE_URL);
url.searchParams.set("key", "GY7rE1J3f4ovi4wGONXshLHOHv");
</script>
<style lang="scss" scoped></style>
