// Vue Imports
import * as Vue from "vue";

export const vLazy: Vue.Directive<HTMLImageElement, string> = {
  mounted(el, { value }) {
    const isImgEl = el instanceof HTMLImageElement;
    if (!isImgEl) {
      return;
    }

    if (typeof value !== "string") {
      return;
    }

    // 监听Img
    const observer = new IntersectionObserver(
      ([{ isIntersecting }], observer) => {
        if (isIntersecting) {
          el.src = value;
          observer.unobserve(el);
        }
      }
    );

    observer.observe(el);
  },
};
