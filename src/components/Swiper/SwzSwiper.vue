<template>
  <div>
    <div class="m-center b">
      <ul class="m-1 overflow-hidden relative">
        <li class="vis-hidden">
          <img :src="getUrl(state.arr[0].src)" />
        </li>
        <transition-group :name="state.arrow">
          <li
            v-for="(item,index) in state.arr"
            :key="index"
            v-show="index===currentIndex"
            class="absolute"
          >
            <img
              :src="item.src"
              draggable="false"
            />
          </li>
        </transition-group>
      </ul>
    </div>
    <div class="flex center-center">
      <el-button @click="currentIndex--">上一张</el-button>
      <el-button @click="currentIndex++">下一张</el-button>
      <el-button @click="currentIndex=2">第3张</el-button>
    </div>
  </div>
</template>
<script lang='ts' setup>
import img01 from "@/assets/picList/1.jpg";
import img02 from "@/assets/picList/2.jpg";
import img03 from "@/assets/picList/3.jpg";
import img04 from "@/assets/picList/4.jpg";
import img05 from "@/assets/picList/5.jpg";
import { computed, reactive } from "vue";
const getUrl = (param: string) => {
  return new URL(param, import.meta.url).href;
};
const state = reactive({
  arrow: "toRight",
  currentIndex: 0,
  arr: [
    { src: img01 },
    { src: img02 },
    { src: img03 },
    { src: img04 },
    { src: img05 },
  ],
});
const currentIndex = computed({
  get() {
    return state.currentIndex;
  },
  set(value) {
    state.arrow = value - state.currentIndex > 0 ? "toLeft" : "toRight";
    value < 0 && (value = state.arr.length - 1);
    Reflect.set(state, "currentIndex", value % state.arr.length);
  },
});
</script>
<style lang='scss' scoped>
.toLeft-enter-active,
.toLeft-leave-active,
.toRight-enter-active,
.toRight-leave-active {
  transition: 0.5s;
}
.toLeft-enter-from,
.toRight-leave-to {
  transform: translate(100%);
}
.toLeft-enter-to,
.toLeft-leave-from,
.toRight-enter-to,
.toRight-leave-from {
  transform: translate(0);
}
.toLeft-leave-to,
.toRight-enter-from {
  transform: translate(-100%);
}
</style>