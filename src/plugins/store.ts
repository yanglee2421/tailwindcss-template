import { createStore } from "vuex";
export default createStore({
  strict: true,
  state() {
    return {
      value: "vuex中的值（默认）",
    };
  },
  modules: {
    mod1: {
      namespaced: true,
      state() {
        return {
          currentUser: "",
          currentPage: "",
        };
      },
      getters: {
        userPermission(state, getters) {
          return [];
        },
      },
      mutations: {
        currentUser(state, payload) {
          state.currentUser = payload;
        },
        currentPage(state, payload) {
          state.currentPage = payload;
        },
      },
      actions: {
        currentUser({ commit }, payload) {
          commit("currentUser", payload);
        },
        currentPage({ commit }, payload) {
          commit("currentPage", payload);
        },
      },
    },
  },
});
