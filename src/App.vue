<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script lang="ts" setup>
import request from "@/api/request";
import { onMounted } from "vue";
interface _res {
  images: { url: string }[];
}
onMounted(() => {
  request<_res>({
    method: "get",
    url: "/HPImageArchive.aspx",
    params: {
      format: "js",
      idx: 0,
      n: 1,
    },
  }).then(({ images: [{ url }] }) => {
    const app = document.querySelector<HTMLElement>("#app")!;
    // app.style.backgroundImage = `url("${"https://cn.bing.com" + url}")`;
  });
});
</script>

<style lang="scss">
@import "@/assets/default.scss";
#app {
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}
.el-pagination {
  padding-top: 5px !important;
}
</style>
