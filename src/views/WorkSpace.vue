<template>
  <div>
    <swz-swiper :arr="arr"></swz-swiper>
  </div>
</template>
<script lang='ts' setup>
import SwzSwiper from "@/components/SwzSwiper.vue";
import img01 from "@/assets/picList/1.jpg";
import img02 from "@/assets/picList/2.jpg";
import img03 from "@/assets/picList/3.jpg";
import img04 from "@/assets/picList/4.jpg";
import img05 from "@/assets/picList/5.jpg";
const arr = [img01, img02, img03, img04, img05];
</script>
<style lang='scss' scoped>
</style>