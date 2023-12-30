// Vue Imports
import * as Vue from "vue";

export function useObserverResize<TRef extends Element>(
  elRef: Vue.Ref<TRef | undefined>,
  options?: ResizeObserverOptions | Vue.Ref<ResizeObserverOptions>
) {
  const entryRef = Vue.shallowRef<ResizeObserverEntry | null>(null);

  Vue.watch(
    elRef,
    (el, prevEl, onCleanup) => {
      const isElement = el instanceof Element;

      if (!isElement) {
        console.error("Excepted an element, got falsy!");
        return prevEl;
      }

      // Start observe
      const observer = new ResizeObserver(([entry]) => {
        entryRef.value = entry;
      });
      observer.observe(el, Vue.unref(options));

      // Clear Effect
      onCleanup(() => {
        observer.disconnect();
        entryRef.value = null;
      });
    },
    {
      immediate: true,
      flush: "post",
    }
  );

  return Vue.readonly(entryRef);
}
