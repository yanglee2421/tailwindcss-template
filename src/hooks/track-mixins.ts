import { buryingPoint } from "./v-track"
import type { _action } from "./v-track"
import { defineComponent } from "vue"
export default defineComponent({
    data() {
        return {
            $track__item: {
                meta: null,
                beginTime: 0,
                endTime: 0,
            },
            $track__controller: new AbortController(),
        }
    },
    methods: {
        $track__setMeta(meta: unknown) {
            this.$data.$track__item.meta = meta as any
            return meta
        },
        $track__enter() {
            this.$data.$track__item.meta = null
            this.$data.$track__item.beginTime = Date.now()
            this.$data.$track__controller = new AbortController()
            const signal = this.$data.$track__controller.signal
            window.addEventListener("unload", () => {
                this.$data.$track__item.endTime = Date.now()
                buryingPoint.push(this.$data.$track__item)
                buryingPoint.setItem()
            }, { signal })
        },
        $track__leave() {
            const { $track__item, $track__controller } = this.$data
            $track__controller.abort()
            $track__item.endTime = Date.now()
            buryingPoint.push($track__item)
            console.log(buryingPoint)
        },
    },
    mounted() {
        this.$track__enter()
    },
    activated() {
        this.$track__enter()
    },
    deactivated() {
        this.$track__leave()
    },
    beforeUnmount() {
        this.$track__leave()
    },
})
