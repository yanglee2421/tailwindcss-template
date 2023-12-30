// Vue Imports
import * as Vue from "vue";

export function useObserverIntersection<TRef extends Element>(
  elRef: Vue.Ref<TRef | undefined>
) {
  const entryRef = Vue.shallowRef<IntersectionObserverEntry | null>(null);

  Vue.watch(
    elRef,
    (el, prevEl, onCleanup) => {
      const isElement = el instanceof Element;

      if (!isElement) {
        console.error("Excepted an element, got falsy!");
        return prevEl;
      }

      // Start observe
      const observer = new IntersectionObserver(([entry]) => {
        entryRef.value = entry;
      });
      observer.observe(el);

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
