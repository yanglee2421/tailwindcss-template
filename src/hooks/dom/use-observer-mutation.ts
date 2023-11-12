// Vue Imports
import Vue from "vue";

export function useObserverMutation<TRef extends Element>(
  elRef: Vue.Ref<TRef | undefined>,
  options?: MutationObserverInit | Vue.Ref<MutationObserverInit>
) {
  // Prepare Ref
  const recordRef = Vue.shallowRef<MutationRecord | null>(null);

  // Observer Element Effect
  Vue.watchPostEffect((onCleanup) => {
    const el = Vue.unref(elRef);
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
  });

  return Vue.readonly(recordRef);
}
