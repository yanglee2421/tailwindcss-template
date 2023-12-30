// Vue Imports
import * as Vue from "vue";

export function useObserverMutation<TRef extends Element>(
  elRef: Vue.Ref<TRef | undefined>,
  options?: MutationObserverInit | Vue.Ref<MutationObserverInit>
) {
  const recordRef = Vue.shallowRef<MutationRecord | null>(null);

  Vue.watch(
    elRef,
    (el, prevEl, onCleanup) => {
      void prevEl;

      const isElement = el instanceof Element;

      if (!isElement) {
        console.error("Excepted an element, got falsy!");
        return;
      }

      // Start observe
      const observer = new MutationObserver(([record]) => {
        recordRef.value = record;
      });
      observer.observe(el, Vue.unref(options));

      // Clear Effect
      onCleanup(() => {
        observer.disconnect();
        recordRef.value = null;
      });
    },
    {
      immediate: true,
      flush: "post",
    }
  );

  return Vue.readonly(recordRef);
}
