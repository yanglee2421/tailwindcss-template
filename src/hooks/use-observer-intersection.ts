// Vue Imports
import Vue, { readonly, ref, unref, watchPostEffect } from "vue";

export function useObserverIntersection<TRef extends Element>(
  elRef: Vue.Ref<TRef>
) {
  // Prepare Ref
  const entryRef = ref<IntersectionObserverEntry | null>(null);

  // Observer Element Effect
  watchPostEffect((clearEffect) => {
    const el = unref(elRef);
    const isElement = el instanceof Element;
    if (!isElement) {
      console.error("Excepted an element, got falsy!");
      return;
    }

    // Start observe
    const observer = new IntersectionObserver(([entry]) => {
      entryRef.value = entry;
    });
    observer.observe(el);

    // Clear Effect
    clearEffect(() => {
      observer.disconnect();
      entryRef.value = null;
    });
  });

  return readonly(entryRef);
}
