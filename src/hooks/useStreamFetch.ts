// Vue Imports
import * as Vue from "vue";

export function useStreamFetch() {
  const state = Vue.reactive({
    text: "",
  });

  Vue.watchPostEffect(async (onCleanup) => {
    const controler = new AbortController();

    const url = new URL("/dev/chat/bing", globalThis.location.origin);
    const res = await fetch(url, { signal: controler.signal });
    if (!res.body) return;

    const reader = res.body.getReader();
    while (reader) {
      const { done, value } = await reader.read();
      const detext = new TextDecoder("utf8");
      const text = detext.decode(value);

      state.text += text;

      if (done) break;
    }

    onCleanup(() => {
      controler.abort();
    });
  });
}
