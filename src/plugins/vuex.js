import { createStore } from "vuex"
const store = createStore({
    state: {
        num: null
    },
    mutations: {
        num(state, value) {
            state.num = value
        }
    },
    actions: {
        num(content, value) {
            content.commit('num', value)
        }
    }
})
export default store