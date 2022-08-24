<template>
  <div>
    <swz-vis v-model="state.isVis">
      <swz-swiper-v2 :arr="arr"></swz-swiper-v2>
    </swz-vis>
    <el-checkbox v-model="state.isVis">显示</el-checkbox>
  </div>
</template>
<script lang='ts' setup>
import SwzSwiperV2 from "@/components/Swiper/SwzSwiperV2.vue";
import img01 from "@/assets/picList/1.jpg";
import img02 from "@/assets/picList/2.jpg";
import img03 from "@/assets/picList/3.jpg";
import img04 from "@/assets/picList/4.jpg";
import img05 from "@/assets/picList/5.jpg";
import { reactive } from "vue";
const arr = [img01, img02, img03, img04, img05];
const state = reactive({
  isVis: false,
});
</script>
<style lang='scss' scoped>
</style>