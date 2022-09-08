import { meta } from "./v-track"
import { defineComponent } from "vue"
export default defineComponent({
    data() {
        return {
            $track__item: {
                beginTime: 0,
                endTime: 0,
                mes: null,
            },
            $track__controller: new AbortController(),
        }
    },
    methods: {
        $track__mes(mes: unknown) {
            this.$data.$track__item.mes = mes as any
            return meta
        }
    },
    mounted() {
        const { $track__item, $track__controller } = this.$data
        $track__item.beginTime = Date.now()
        const signal = $track__controller.signal
        window.addEventListener("unload", () => {
            $track__item.endTime = Date.now()
            meta.actions.push($track__item)
            localStorage.setItem("$track__meta", JSON.stringify(meta))
        }, { signal })
    },
    beforeUnmount() {
        const { $track__item, $track__controller } = this.$data
        $track__controller.abort()
        $track__item.endTime = Date.now()
        meta.actions.push($track__item)
    },
})
