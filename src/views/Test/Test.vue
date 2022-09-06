<template>
  <teleport to="body">
    <div
      v-if="state.isShow"
      v-track:arg.modifiers01.modifiers02="{}"
      @mousemove="pointerMoveFn"
      @wheel="wheelFn"
      class="mask"
    >
      <div
        @click="state.isShow=false"
        class="btn-close"
      ></div>
      <div class="left">
        <div
          ref="poiLefRef"
          class="pointer"
        ></div>
      </div>
      <div class="center">
        <el-image :src="arr[index]">
          <template #error>
            <el-icon :size="100">
              <Picture />
            </el-icon>
          </template>
        </el-image>
      </div>
      <div class="right">
        <div
          ref="poiRigRef"
          class="pointer"
        ></div>
      </div>
    </div>
  </teleport>
  <el-button @click="state.isShow=true">打开</el-button>
</template>
<script lang='ts'>
import HelloWorldVue from "@/components/HelloWorld.vue";
export default {
  inheritAttrs: true,
  // extends: HelloWorldVue,
  mixins: [HelloWorldVue],
};
</script>
<script lang='ts' setup>
// import img from "@/assets/bg.jpg";
import img from "@/assets/picList/1.jpg";
import { onMounted, reactive, ref } from "vue";
interface _props {
  arr?: string[];
  index?: number;
}
const props = withDefaults(defineProps<_props>(), {
  arr: () => [],
  index: 0,
});
const state = reactive({
  isShow: false,
});
const poiLefRef = ref<HTMLElement>();
const poiRigRef = ref<HTMLElement>();
const pointerMoveFn = (event: MouseEvent) => {
  const { clientX, clientY } = event;
  const poiLef = poiLefRef.value!;
  const poiRef = poiRigRef.value!;
  poiLef.style.transform = `translate(${clientX}px,${clientY}px) rotate(-135deg)`;
  poiRef.style.transform = `translate(${clientX}px,${clientY}px) rotate(45deg)`;
};
const wheelFn = (event: Event) => {
  console.log(event);
};
onMounted(() => {
  // mas;
});
</script>
<style lang='scss' scoped>
// 遮罩层
.mask {
  @include pos-center(fixed);
  display: grid;
  grid-template: auto/1fr auto 1fr;
  background-color: rgba(0, 0, 0, 0.5);
  // 中间
  .center {
    @include flex-center;
    color: #fff;
    .el-image {
      min-width: 100px;
      min-height: 100px;
    }
  }
  // 两边
  .left,
  .right {
    cursor: none;
    .pointer {
      position: absolute;
      @include pos-list(0, auto, auto, 0);
      display: none;
      width: 30px;
      height: 30px;
      border: #fff solid;
      border-radius: 5px;
      border-width: 3px 3px 0 0;
      will-change: transform;
    }
    // 进入左右时显示
    &:hover {
      .pointer {
        display: block;
      }
    }
  }
}
.btn-close {
  $wh: 50px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  width: $wh;
  height: $wh;
  transition: 0.5s;
  transform: rotate(0);
  &::before,
  &::after {
    content: "";
    $h: 4px;
    @include pos-center;
    display: block;
    width: calc($wh * 0.8);
    height: $h;
    border-radius: calc($h / 2);
    background-color: $danger;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  &:hover {
    transform: rotate(180deg);
  }
}
</style>