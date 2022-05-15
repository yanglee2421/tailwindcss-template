import { createStore } from "vuex"
const store = createStore({
  strict: true,
  state() {
    return {
      obj: {
        name: "名"
      },
      arr: [0]
    }
  },
  mutations: {
    obj(state, params) {
      Object.assign(state.obj, params)
    },
    arr(state, params) {
      Object.assign(state.arr, params)
    },
    pushArr(state, params) {
      state.arr.push(params)
    }
  },
  actions: {
    obj(context, num) {
      context.commit("obj", num)
    }
  },
  getters: {},
  modules: {
    mod: {
      state() {
        return {
          name: ""
        }
      },
      mutations: {
        name(state, params) {
          state.name = params
        }
      },
      actions: {
        name(context, params) {
          context.commit('name', params)
        }
      }
    },
  }
})
export default store