// Vue Imports
import * as Vue from "vue";

export function useObserverIntersection<TRef extends Element>(
  elRef: Vue.Ref<TRef | undefined>
) {
  // Prepare Ref
  const entryRef = Vue.shallowRef<IntersectionObserverEntry | null>(null);

  // Observer Element Effect
  Vue.watchPostEffect((onCleanup) => {
    const el = Vue.unref(elRef);
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
    onCleanup(() => {
      observer.disconnect();
      entryRef.value = null;
    });
  });

  return Vue.readonly(entryRef);
}
