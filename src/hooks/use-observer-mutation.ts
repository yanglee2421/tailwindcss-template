// Vue Imports
import Vue, { readonly, ref, unref, watchPostEffect } from "vue";

export function useObserverMutation<TRef extends Element>(
  elRef: Vue.Ref<TRef | undefined>
) {
  // Prepare Ref
  const recordRef = ref<MutationRecord | null>(null);

  // Observer Element Effect
  watchPostEffect((clearEffect) => {
    const el = unref(elRef);
    const isElement = el instanceof Element;
    if (!isElement) {
      console.error("Excepted an element, got falsy!");
      return;
    }

    // Start observe
    const observer = new MutationObserver(([record]) => {
      recordRef.value = record;
    });
    observer.observe(el);

    // Clear Effect
    clearEffect(() => {
      observer.disconnect();
      recordRef.value = null;
    });
  });

  return readonly(recordRef);
}
