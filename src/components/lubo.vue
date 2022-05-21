<template>
  <div>
    <ul class="m-center border" :data-whatever="currentIndex">
      <template v-for="(item, index) in 10" :key="item">
        <transition :name="swiper">
          <li v-show="index === currentIndex % 10">{{ item }}</li>
        </transition>
      </template>
    </ul>
    <div>
      <el-button @click="currentIndex--">上一张</el-button>
      <el-button @click="currentIndex++">下一张</el-button>
      <el-button @click="currentIndex = 0">1</el-button>
      <el-button @click="currentIndex = 6">7</el-button>
    </div>
  </div>
</template>
<script setup>
import { onBeforeUpdate, reactive, ref, watch } from "vue";
const arr = reactive([]);
const currentIndex = ref(0);
const swiper = ref("toRight");
const value = ref();
watch(
  () => currentIndex.value,
  (newVal, oldVal) => {
    const res = newVal - oldVal;
    if (res > 0 || res === -9) {
      swiper.value = "toRight";
    } else {
      swiper.value = "toLeft";
    }
  }
);
onBeforeUpdate(() => {
  if (currentIndex.value < 0) {
    currentIndex.value = 9;
  }
});
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
$swiper: "toRight", "toLeft";
@each $item in $swiper {
  .#{$item}-enter-active,
  .#{$item}-leave-active {
    transition: 0.5s;
  }
  .#{$item}-enter-to,
  .#{$item}-leave-from {
    transform: translateX(0);
  }
  .#{$item}-enter-from {
    @if $item == "toRight" {
      transform: translateX(100%);
    } @else {
      transform: translateX(-100%);
    }
  }
  .#{$item}-leave-to {
    @if $item == "toRight" {
      transform: translateX(-100%);
    } @else {
      transform: translateX(100%);
    }
  }
}
</style>
