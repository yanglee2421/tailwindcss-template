<template>
  <div class="work-root">
    <swz-dialog v-model="state.vis"></swz-dialog>
    <el-button @click="state.vis=true">打开</el-button>
  </div>
</template>
<script lang='ts' setup>
import img01 from "@/assets/picList/1.jpg";
import img02 from "@/assets/picList/2.jpg";
import img03 from "@/assets/picList/3.jpg";
import img04 from "@/assets/picList/4.jpg";
import img05 from "@/assets/picList/5.jpg";
import { reactive } from "vue";
const arr = reactive([img01, img02, img03, img04, img05]);
const state = reactive({
  vis: true,
  PageIndex: 1,
  PageSize: 10,
});
</script>
<style lang='scss' scoped>
</style>