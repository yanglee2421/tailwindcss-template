// Vue Imports
import Vue from "vue";

export function useObserverResize<TRef extends Element>(
  elRef: Vue.Ref<TRef | undefined>,
  options?: ResizeObserverOptions | Vue.Ref<ResizeObserverOptions>
) {
  // Prepare Ref
  const entryRef = Vue.shallowRef<ResizeObserverEntry | null>(null);

  // Observer Element Effect
  Vue.watchPostEffect((onCleanup) => {
    const el = Vue.unref(elRef);
    const isElement = el instanceof Element;
    if (!isElement) {
      console.error("Excepted an element, got falsy!");
      return;
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
  });

  return Vue.readonly(entryRef);
}
