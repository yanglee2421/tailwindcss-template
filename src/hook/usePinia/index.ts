import { defineStore } from "pinia";
import { ref, computed } from "vue";
const piniaStore = defineStore("pinia-01", () => {
  const couter = ref(0);
  const gett = computed(() => couter);
  return {
    couter,
    gett,
  };
});
export default piniaStore;
