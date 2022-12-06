import { defineStore } from "pinia";
import { reactive } from "vue";
export default defineStore("demoState", () => {
  const state = reactive<{
    data: string;
    currentUser: string;
    currentPage: string;
    userPermission: string[];
  }>({
    data: "这是一个存储在pinia中的全局data",
    currentUser: "",
    currentPage: "",
    userPermission: [],
  });
  return state;
});
