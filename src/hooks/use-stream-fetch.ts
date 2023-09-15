// Vue Imports
import { reactive, watchPostEffect } from "vue";

export function useStreamFetch() {
  const state = reactive({
    text: "",
  });

  watchPostEffect(async (onClear) => {
    const controler = new AbortController();
    const { signal } = controler;

    const url = new URL("/dev/chat/bing", globalThis.location.origin);
    const res = await fetch(url, { signal });
    if (!res.body) return;

    const reader = res.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      const detext = new TextDecoder("utf8");
      const text = detext.decode(value);

      state.text += text;

      if (done) break;
    }

    onClear(() => {
      controler.abort();
    });
  });
}
