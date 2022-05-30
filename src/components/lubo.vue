<template>
  <div class="b overflow-auto overflow-overlay p-1">
    <ul class="m-center border">
      <template v-for="(item, index) in 10" :key="item">
        <transition :name="state.swiper">
          <li v-show="index === currentIndex % 10">{{ item }}</li>
        </transition>
      </template>
    </ul>
    <div>
      <el-button @click="currentIndex--">上一张</el-button>
      <el-button @click="currentIndex++">下一张</el-button>
      <el-button @click="currentIndex = 0">1</el-button>
      <el-button @click="currentIndex = 6">7</el-button>
      <el-checkbox label="自动" class="p-1" v-model="state.auto"></el-checkbox>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, watchEffect } from "vue";

const state = reactive({
  currentIndex: 0,
  swiper: "",
});
const currentIndex = computed({
  get() {
    return state.currentIndex;
  },
  set(newVal) {
    clearTimeout(state.timer);
    const res = newVal - state.currentIndex;
    if (res > 0 || res === -9) {
      state.swiper = "toRight";
    } else {
      state.swiper = "toLeft";
    }
    if (newVal < 0) newVal = 9;
    state.currentIndex = newVal;
    start();
  },
});
const start = () => {
  if (state.auto) {
    state.timer = setTimeout(() => {
      currentIndex.value++;
    }, 3000);
  }
};
watchEffect(() => {
  start();
});
</script>
<style lang='scss' scoped>
$w: 200px;
li {
  @extend.absolute;
  @extend.wh-100;
  text-align: center;
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
    transition: 0.7s;
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
