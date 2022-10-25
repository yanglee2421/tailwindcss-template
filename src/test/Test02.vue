<template>
  <div>
    <fw-switch v-model="state.isShow"></fw-switch>
    <div class="box">
      <div v-height="state.isShow">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
        officia debitis accusantium, nemo cupiditate aliquam architecto dolores
        porro quo animi minima similique fugiat tenetur ducimus aliquid dolorem,
        laborum optio dolore. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Delectus officia debitis accusantium, nemo cupiditate
        aliquam architecto dolores porro quo animi minima similique fugiat
        tenetur ducimus aliquid dolorem, laborum optio dolore. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Delectus officia debitis
        accusantium, nemo cupiditate aliquam architecto dolores porro quo animi
        minima similique fugiat tenetur ducimus aliquid dolorem, laborum optio
        dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Delectus officia debitis accusantium, nemo cupiditate aliquam architecto
        dolores porro quo animi minima similique fugiat tenetur ducimus aliquid
        dolorem, laborum optio dolore.
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";
import type { Directive } from "vue";
const state = reactive({ isShow: true });
const animationFn = (dom: HTMLElement, value: boolean) => {
  const animation = requestAnimationFrame(() => {
    const resHeight = value ? dom.offsetHeight + 5 : dom.offsetHeight - 5;
    dom.style.height = `${
      resHeight > dom.scrollHeight
        ? dom.scrollHeight
        : resHeight < 0
        ? 0
        : resHeight
    }px`;
    if (value && dom.clientHeight === dom.scrollHeight) {
      cancelAnimationFrame(animation);
      console.log(dom.offsetHeight);
    } else if (value === false && dom.offsetHeight === 0) {
      cancelAnimationFrame(animation);
      console.log(dom.offsetHeight);
    } else {
      animationFn(dom, value);
    }
  });
};
const vHeight: Directive<HTMLElement, boolean> = {
  updated(div, { value, oldValue }) {
    if (value !== oldValue) {
      animationFn(div, value);
    }
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 300px;
  border: 1px red solid;
  overflow: hidden;
}
</style>
