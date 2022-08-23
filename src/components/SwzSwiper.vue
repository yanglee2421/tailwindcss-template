<template>
  <div class="b m-1 relative overflow-hidden m-center">
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
        v-for="(item,index) in props.arr"
        :key="index"
      >
        <img
          :src="item"
          draggable="false"
        />
      </li>
    </ul>
  </div>
  <el-button @click="currentIndex--">上一张</el-button>
  <el-button @click="currentIndex++">下一张</el-button>
  <el-button @click="currentIndex=3">第3张</el-button>
</template>
<script lang='ts' setup>
import { computed, reactive, ref, watchEffect } from "vue";
interface _props {
  arr: string[];
}
const props = withDefaults(defineProps<_props>(), {
  arr: () => [],
});
const state = reactive({
  width: 0,
  index: 0,
  trans: true,
  enable: true,
  img: props.arr.at(-1),
});
const currentIndex = computed({
  get() {
    return state.index;
  },
  set(value) {
    console.log(value);
    if (state.enable) {
      debugger;
      state.enable = false;
      const lastIndex = props.arr.length - 1;
      if (value < 0) value = lastIndex;
      state.trans = true;
      state.index = value % props.arr.length;
      if (state.index === 0 || state.index === lastIndex) {
        setTimeout(() => {
          state.trans = false;
          state.index = state.index === 0 ? lastIndex : 0;
        }, 300);
      }
      setTimeout(() => {
        state.enable = true;
      }, 310);
    }
  },
});
const imgRef = ref<HTMLElement>();
const loaded = () => {
  state.width = imgRef.value?.clientWidth!;
  props.arr.unshift(state.img!);
  state.trans = false;
  state.index = 5;
};
watchEffect(() => {
  // console.log(state.index);
});
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