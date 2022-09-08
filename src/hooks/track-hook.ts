import { meta } from "./v-track"
import { onMounted, onBeforeMount } from "vue"
export default (mes: unknown) => {
    const item = {
        beginTime: 0,
        endTime: 0,
        mes,
    }
    const controller = new AbortController()
    const signal = controller.signal
    window.addEventListener("beforeunload", () => {
        item.endTime = Date.now()
        meta.actions.push(item)
    }, { signal })
    onMounted(() => {
        item.beginTime = Date.now()
    })
    onBeforeMount(() => {
        controller.abort()
        item.endTime = Date.now()
        meta.actions.push(item)
    })
    return meta
}