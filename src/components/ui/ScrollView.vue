<script lang="ts" setup>
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import * as Vue from "vue";

const props = defineProps<{
  options: PerfectScrollbar.Options;
}>();

const emits = defineEmits<{
  (e: "onPsScrollX", evt: Event): void;
  (e: "onPsScrollY", evt: Event): void;
  (e: "onPsScrollUp", evt: Event): void;
  (e: "onPsScrollDown", evt: Event): void;
  (e: "onPsScrollLeft", evt: Event): void;
  (e: "onPsScrollRight", evt: Event): void;
  (e: "onPsXReachStart", evt: Event): void;
  (e: "onPsXReachEnd", evt: Event): void;
  (e: "onPsYReachStart", evt: Event): void;
  (e: "onPsYReachEnd", evt: Event): void;
}>();

const containerRef = Vue.ref<HTMLDivElement>();
const contentRef = Vue.ref<HTMLDivElement>();
const psRef = Vue.ref<PerfectScrollbar | null>(null);

Vue.watchPostEffect((onClearup) => {
  const containerEl = containerRef.value;

  if (!(containerEl instanceof HTMLElement)) {
    return;
  }

  const contentEl = contentRef.value;

  if (!(contentEl instanceof HTMLElement)) {
    return;
  }

  const clearScrollbar = () => {
    Reflect.deleteProperty(containerEl, "getBoundingClientRect");
    psRef.value?.destroy();
    psRef.value = null;
  };

  const observer = new ResizeObserver(() => {
    Reflect.set(containerEl, "getBoundingClientRect", () => {
      const originRect =
        Element.prototype.getBoundingClientRect.call(containerEl);

      originRect.width = Math.floor(originRect.width);
      originRect.height = Math.floor(originRect.height);

      return originRect;
    });

    if (
      containerEl.scrollHeight > containerEl.clientHeight ||
      containerEl.scrollWidth > containerEl.clientWidth
    ) {
      psRef.value ||= new PerfectScrollbar(containerEl, props.options);
      psRef.value.update();

      return;
    }

    clearScrollbar();
  });

  observer.observe(containerEl);
  observer.observe(contentEl);

  onClearup(() => {
    clearScrollbar();
    observer.disconnect();
  });
});

Vue.watchPostEffect((onClearup) => {});
</script>

<template>
  <div
    ref="containerRef"
    class="relative h-full overflow-hidden"
  >
    <div
      ref="contentRef"
      class="size-fit min-h-full min-w-full"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
