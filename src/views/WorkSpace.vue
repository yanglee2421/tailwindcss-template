<template>
  <div>
    <ol>
      <li
        v-for="(item,index) in arr"
        :key="index"
      >{{item}}</li>
    </ol>
  </div>
</template>
<script lang='ts' setup>
import request from "@/api/request";
import { ref } from "vue";
const arr = ref<string[]>([]);
request<string[]>({
  method: "get",
  url: "https://autumnfish.cn/api/joke/list",
  params: {
    num: 3,
  },
}).then((res) => {
  arr.value = res;
});
</script>
<style lang='scss' scoped>
</style>