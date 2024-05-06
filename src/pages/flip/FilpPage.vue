<script lang="ts" setup>
import * as Vue from "vue";

const boxRef = Vue.ref<HTMLDivElement>();

const handleSort = () => {
  const container = Vue.unref(boxRef);
  if (!container) return;

  record(container);
  change(container);
  play(container);
};

function record(container: Element | null) {
  if (!container) return;

  for (let i = 0, len = container.children.length; i < len; i++) {
    const dom = container.children[i];
    const rect = dom.getBoundingClientRect();
    Reflect.set(dom, "startX", rect.left);
    Reflect.set(dom, "startY", rect.top);
  }
}

function change(container: Element | null) {
  if (!container) {
    return;
  }

  const childrens = [...container.children];
  for (let i = 0; i < childrens.length; i++) {
    const el = childrens[i];
    const randomIdx = Math.floor(Math.random() * childrens.length);

    if (i !== randomIdx) {
      const inextDom = el.nextElementSibling;
      container.insertBefore(el, childrens[randomIdx]);
      container.insertBefore(childrens[randomIdx], inextDom);
    }
  }
}

function play(container: Element | null) {
  if (!container) {
    return;
  }

  for (let i = 0; i < container.children.length; i++) {
    const dom = container.children[i];
    const { left, top } = dom.getBoundingClientRect();

    const startX = Reflect.get(dom, "startX");
    const startY = Reflect.get(dom, "startY");

    dom.animate(
      [
        {
          transform: `translate(${startX - left}px, ${startY - top}px)`,
        },
        { transform: `translate(0px, 0px)` },
      ],
      { duration: 600 },
    );
  }
}

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="text-center">
    <el-button
      @click="handleSort"
      size="large"
      type="primary"
      class="bg-sky-500 uppercase"
      id="sort"
      >random order</el-button
    >
  </div>
  <div
    ref="boxRef"
    class="mx-auto mt-6 flex flex-wrap gap-2 overflow-hidden border p-2"
  >
    <div
      v-for="item in 50"
      :key="item"
      class="flex h-16 flex-1 basis-1/6 items-center justify-center rounded border bg-red-300 text-2xl text-white sm:basis-1/12"
    >
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
