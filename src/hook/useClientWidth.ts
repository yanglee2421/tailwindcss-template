import { computed, reactive } from "vue";
import type { Ref } from "vue";

export function useClientWidth(itemCount: Ref<number>) {
  const state = reactive({ clientWidth: 0 });
  const columns = computed(() => Math.floor(state.clientWidth / 320));
  const needColl = computed(() => itemCount.value > columns.value);
  return { state, columns, needColl };
}
