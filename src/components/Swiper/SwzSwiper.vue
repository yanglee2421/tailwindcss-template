<template>
  <div>
    <div class="m-center b">
      <ul class="m-1 overflow-hidden relative">
        <li class="vis-hidden">
          <img :src="props.picArr[0]" />
        </li>
        <transition-group :name="state.arrow">
          <li
            v-for="(item,index) in props.picArr"
            :key="index"
            v-show="index===currentIndex"
            class="absolute"
          >
            <img
              :src="item"
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
import { computed, reactive } from "vue";
interface _props {
  picArr?: string[];
}
const props = withDefaults(defineProps<_props>(), {
  picArr: () => [],
});
const state = reactive({
  arrow: "toRight",
  currentIndex: 0,
});
const currentIndex = computed({
  get() {
    return state.currentIndex;
  },
  set(value) {
    state.arrow = value - state.currentIndex > 0 ? "toLeft" : "toRight";
    value < 0 && (value = props.picArr.length - 1);
    Reflect.set(state, "currentIndex", value % props.picArr.length);
  },
});
</script>
<style lang='scss' scoped>
li.absolute {
  top: 0;
}
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