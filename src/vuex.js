import { createStore } from "vuex"
const store = createStore({
  strict: true,
  state() {
    return {
      obj: ''
    }
  },
  mutations: {
    obj(state, params) {
      state.obj = params
    }
  },
  getters: {},
  actions: {
    obj(context, num) {
      context.commit("obj", num)
    }
  },
  modules: {}
})
export default store