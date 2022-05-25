<template>
  <div>
    <ul class="m-center border" :data-whatever="i">
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
import { computed, onBeforeUpdate, onMounted, ref, watch } from "vue";
const swiper = ref();
const i = ref(0);
const currentIndex = computed({
  get() {
    return i.value;
  },
  set(newVal) {
    for (let i = 0; i < 10000; i++) {
      clearTimeout(i);
    }
    i.value = newVal;
    start();
  },
});
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
  if (i.value < 0) {
    i.value = 9;
  }
});
const start = () => {
  setTimeout(() => {
    currentIndex.value++;
  }, 3000);
};
onMounted(() => {
  start();
});
</script>
<style lang='scss' scoped>
$w: 200px;
li {
  @extend.absolute;
  @extend.wh-100;
  background-color: aquamarine;
}
ul {
  @extend.relative;
  width: $w !important;
  height: 100px;
  @extend.overflow-hidden;
}
.border {
  border: 1px red solid;
}
$swiper: "toRight", "toLeft";
@each $item in $swiper {
  .#{$item}-enter-active,
  .#{$item}-leave-active {
    transition: 0.7s ease-in-out;
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
