// Vue Imports
import { Ref, readonly, ref, unref, watchPostEffect } from "vue";

export function useResize(elRef: Ref<unknown>) {
  const sizeRef = ref<ResizeObserverEntry | null>(null);

  watchPostEffect((clearEffect) => {
    const el = unref(elRef);
    const isElement = el instanceof Element;
    if (!isElement) {
      console.error("elRef must sign a Element");
      return;
    }

    // Start observe
    const observer = new ResizeObserver(([entry]) => {
      sizeRef.value = entry;
    });
    observer.observe(el);

    // Clear Effect
    clearEffect(() => {
      observer.disconnect();
      sizeRef.value = null;
    });
  });

  return readonly(sizeRef);
}
