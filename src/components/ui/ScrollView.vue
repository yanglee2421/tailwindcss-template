<script lang="ts" setup>
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import * as Vue from "vue";

const props = withDefaults(
  defineProps<{
    options?: PerfectScrollbar.Options;
  }>(),
  {
    options() {
      return {};
    },
  },
);

const emits = defineEmits<{
  (e: "psScrollX", evt: Event): void;
  (e: "psScrollY", evt: Event): void;
  (e: "psScrollUp", evt: Event): void;
  (e: "psScrollDown", evt: Event): void;
  (e: "psScrollLeft", evt: Event): void;
  (e: "psScrollRight", evt: Event): void;
  (e: "psXReachStart", evt: Event): void;
  (e: "psXReachEnd", evt: Event): void;
  (e: "psYReachStart", evt: Event): void;
  (e: "psYReachEnd", evt: Event): void;
}>();

const containerRef = Vue.ref<HTMLDivElement>();
const contentRef = Vue.ref<HTMLDivElement>();
const psRef = Vue.ref<PerfectScrollbar | null>(null);

Vue.watchPostEffect((onClearup) => {
  const containerEl = containerRef.value;
  const contentEl = contentRef.value;

  if (!(containerEl instanceof HTMLElement)) {
    return;
  }

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

Vue.watchPostEffect((onClearup) => {
  const containerEl = containerRef.value;

  if (!(containerEl instanceof HTMLElement)) {
    return;
  }

  const map = new Map<string, (evt: Event) => void>();

  map.set("ps-scroll-x", (evt) => {
    emits("psScrollX", evt);
  });
  map.set("ps-scroll-y", (evt) => {
    emits("psScrollY", evt);
  });
  map.set("ps-scroll-up", (evt) => {
    emits("psScrollUp", evt);
  });
  map.set("ps-scroll-down", (evt) => {
    emits("psScrollDown", evt);
  });
  map.set("ps-scroll-left", (evt) => {
    emits("psScrollLeft", evt);
  });
  map.set("ps-scroll-right", (evt) => {
    emits("psScrollRight", evt);
  });
  map.set("ps-x-reach-start", (evt) => {
    emits("psXReachStart", evt);
  });
  map.set("ps-x-reach-end", (evt) => {
    emits("psXReachEnd", evt);
  });
  map.set("ps-y-reach-start", (evt) => {
    emits("psYReachStart", evt);
  });
  map.set("ps-y-reach-end", (evt) => {
    emits("psYReachEnd", evt);
  });

  const controller = new AbortController();

  map.forEach((handler, name) => {
    containerEl.addEventListener(name, handler, {
      signal: controller.signal,
    });
  });

  onClearup(() => {
    controller.abort();
  });
});
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
