<template>
  <div>
    <ul class="m-center border">
      <template v-for="(item, index) in 10" :key="index">
        <transition :name="swiper">
          <li v-if="index === currentIndex % 10">{{ item }}</li>
        </transition>
      </template>
    </ul>
    <div class="">
      <el-button @click="currentIndex--">上一张</el-button>
      <el-button @click="currentIndex++">下一张</el-button>
      <el-button @click="currentIndex = 5">6</el-button>
      <el-button @click="currentIndex = 6">7</el-button>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, watch, watchEffect } from "vue";
const arr = reactive([]);
const currentIndex = ref(0);
const swiper = ref();
const value = ref();
watch(currentIndex, (newVal, oldVal) => {
  if (newVal === -1 && oldVal === 0) {
    currentIndex.value = 9;
    swiper.value = "swiper02";
  } else if (newVal - oldVal > 0) {
    swiper.value = "swiper";
  } else {
    swiper.value = "swiper02";
  }
});
watchEffect(() => {
  console.log(currentIndex.value);
  console.log(swiper.value);
});
const log = (i) => {
  console.log(i);
};
</script>
<style lang='scss' scoped>
$w: 100px;
li {
  width: $w;
  height: $w;
  @extend.absolute;
  background-color: aquamarine;
}
ul {
  width: $w !important;
  height: $w;
  @extend.overflow-hidden;
  @extend.relative;
}
.border {
  border: 1px red solid;
}
.swiper-enter-active,
.swiper-leave-active {
  transition: 0.5s;
}
.swiper-enter-from {
  transform: translateX(100%);
}
.swiper-leave-to {
  transform: translateX(-100%);
}
.swiper-enter-to,
.swiper-leave-from {
  transform: translateX(0);
}
.swiper02-enter-active,
.swiper02-leave-active {
  transition: 0.5s;
}
.swiper02-enter-from {
  transform: translateX(-100%);
}
.swiper02-leave-to {
  transform: translateX(100%);
}
.swiper02-enter-to,
.swiper02-leave-from {
  transform: translateX(0);
}
</style>
