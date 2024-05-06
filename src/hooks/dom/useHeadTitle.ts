import * as Vue from "vue";

export function useHeadTitle(title: string) {
  Vue.watchPostEffect((onCleanup) => {
    const prevTitle = document.title;
    document.title = title;

    onCleanup(() => {
      document.title = prevTitle;
    });
  });
}
