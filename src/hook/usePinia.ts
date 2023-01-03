import { defineStore } from "pinia";
import { reactive } from "vue";
const usePinia = defineStore("demoState", () => {
  const state = reactive<{
    data: string;
    currentUser: string;
    currentPage: string;
    userPermission: string[];
    isDark: boolean;
  }>({
    data: "这是一个存储在pinia中的全局data",
    currentUser: "",
    currentPage: "",
    userPermission: [],
    isDark: false,
  });
  return state;
});
export default usePinia;
