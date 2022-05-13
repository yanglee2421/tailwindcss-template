import { createStore } from "vuex"
const store = createStore({
  state() {
    return {
      num: 1
    }
  },
  mutations: {
    num(state, params) {
      state.num = params
    }
  },
  getters: {},
  actions: {},
  modules: {}
})
export default store