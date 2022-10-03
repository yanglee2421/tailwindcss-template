<template>
  <div>
    <div style="height: 1000px"></div>
    <img v-lazy="img" />
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import img from "@/assets/picList/1.jpg";
</script>
<style lang="scss" scoped></style>
