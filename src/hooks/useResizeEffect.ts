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
    const isElement = div instanceof Element;
    if (!isElement) throw new Error("resizeRef must sign a Element");

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
      if (typeof returnFn === "function") returnFn();
      observer.disconnect();
    });
  });
}
