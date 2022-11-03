import { createStore } from "vuex";
export default createStore({
  strict: true,
  state() {
    return {
      value: "vuex中的值（默认）",
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    mod1: {
      namespaced: true,
      state() {
        return {
          value: "mod1中的值（默认）",
          currentUser: "admin",
          currentPage: "",
        };
      },
      mutations: {
        value(state, payload) {
          state.value = payload;
        },
      },
      getters: {
        userPermission(state, getters) {
          return [];
        },
      },
      actions: {
        value({ commit }, payload) {
          commit("value", payload);
        },
      },
      modules: {},
    },
  },
});
