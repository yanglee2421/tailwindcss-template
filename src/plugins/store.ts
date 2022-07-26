import { createStore } from "vuex"
interface RooStaInter {
    aaa: string,
}
export default createStore<RooStaInter>({
    strict: true,
    state() {
        return {
            aaa: "123"
        }
    },
    modules: {
        mod1: {
            namespaced: true,
            state() {
                return {
                    a: "vuex中的值（默认）",
                    b: 0,
                    value: "vuex中的值（默认）",
                }
            },
            mutations: {
                a(state, value: string) {
                    state.a = value
                },
                b(state, payload) {
                    state.b = payload
                },
                value(state, payload) {
                    state.value = payload
                },
            },
            getters: {
                c(state, getters, rootState, rootGetters) {
                    return state.a + state.b
                }
            },
            actions: {
                a: {
                    root: true,
                    handler({ commit }, value) {
                        commit("a", value)
                    }
                },
                b(content, value) {
                    content.commit("a", value)
                },
                value({ commit }, payload) {
                    commit("value", payload)
                },
            },
            modules: {},
        }
    }
})