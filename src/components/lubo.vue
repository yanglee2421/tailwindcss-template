<template>
  <div>
    <ul class="m-center border" :data-whatever="state.currentIndex">
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
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeUpdate, onMounted, reactive, watch } from "vue";

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
    state.currentIndex = newVal;
    start();
  },
});
const start = () => {
  state.timer = setTimeout(() => {
    currentIndex.value++;
  }, 3000);
};
watch(
  () => currentIndex.value,
  (newVal, oldVal) => {
    const res = newVal - oldVal;
    if (res > 0 || res === -9) {
      state.swiper = "toRight";
    } else {
      state.swiper = "toLeft";
    }
  }
);
onMounted(() => {
  start();
});
onBeforeUpdate(() => {
  if (state.currentIndex < 0) state.currentIndex = 9;
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
