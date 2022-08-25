<template>
  <div>
    <swz-code class="m-center">
      <swz-swiper-v2
        :arr="arr"
        class="box"
      ></swz-swiper-v2>
    </swz-code>
    <swz-code class="m-center">
      <swz-swiper-v2
        :arr="arr"
        class="box"
      ></swz-swiper-v2>
    </swz-code>
  </div>
</template>
<script lang='ts' setup>
import img01 from "@/assets/picList/1.jpg";
import img02 from "@/assets/picList/2.jpg";
import img03 from "@/assets/picList/3.jpg";
import img04 from "@/assets/picList/4.jpg";
import img05 from "@/assets/picList/5.jpg";
const arr = [img01, img02, img03, img04, img05];
</script>
<style lang='scss' scoped>
.hidden-code {
  position: sticky;
  bottom: 0;
}
</style>