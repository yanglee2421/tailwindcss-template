import { ref, unref, watchPostEffect } from "vue";

interface CbParams {
  inlineSize: number;
  blockSize: number;
}
type Cb = (cbParams: CbParams) => unknown;

export function useResizeEffect(cb: Cb) {
  const resizeRef = ref();

  let returnFn: unknown;
  watchPostEffect((clearFn) => {
    const div = unref(resizeRef);
    const observer = new ResizeObserver((entries) => {
      const [{ contentBoxSize }] = entries;
      const [cntBoxSize] = contentBoxSize;

      // Clear previous resizeEffect
      if (typeof returnFn === "function") returnFn();
      returnFn = cb(cntBoxSize);
    });

    // Start observe element resize
    observer.observe(div);

    // Clear previous watchPostEffect
    clearFn(() => {
      observer.disconnect();
    });
  });
}
