<template>
  <div class="relative overflow-hidden m-center">
    <div class="vis-hidden ">
      <img
        ref="imgRef"
        :src="state.img"
        @load="loaded()"
      />
    </div>
    <ul
      :style="{transform:`translate(-${state.width * currentIndex}px)`}"
      :class='{"absolute":true,"ul-transition":state.trans,"flex":true}'
    >
      <li
        v-for="(item,index) in picList"
        :key="index"
      >
        <img
          :src="item"
          draggable="false"
        />
      </li>
    </ul>
    <el-button @click="currentIndex--">上一张</el-button>
    <el-button @click="currentIndex++">下一张</el-button>
    <el-button @click="currentIndex=3">第3张</el-button>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { computed, reactive, ref } from "vue";
interface _props {
  arr: string[];
}
const props = withDefaults(defineProps<_props>(), {});
const state = reactive({
  width: 0,
  index: 0,
  trans: true,
  enable: true,
  img: props.arr.at(-1),
});
const picList = computed(() => {
  const arr = [...props.arr];
  arr.unshift(state.img!);
  return arr;
});
const currentIndex = computed({
  get() {
    return state.index;
  },
  /**
   * 防抖
   */
  set(value) {
    if (state.enable) {
      state.enable = false;
      const lastIndex = picList.value.length - 1;
      if (value < 0) {
        state.trans = false;
        state.index = lastIndex;
        setTimeout(() => {
          state.trans = true;
          state.index = lastIndex - 1;
        }, 0);
      } else if (value > lastIndex) {
        state.trans = false;
        state.index = 0;
        setTimeout(() => {
          state.trans = true;
          state.index = 1;
        }, 0);
      } else {
        state.trans = true;
        state.index = value;
      }
      setTimeout(() => {
        state.enable = true;
      }, 300);
    }
  },
});
const imgRef = ref<HTMLElement>();
const loaded = () => {
  state.width = imgRef.value?.clientWidth!;
  state.trans = false;
  state.index = 1;
};
</script>
<style lang='scss' scoped>
ul {
  left: 0;
  top: 0;
}
.ul-transition {
  transition: 0.3s;
}
</style>