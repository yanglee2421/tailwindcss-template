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
    window.addEventListener("unload", () => {
        item.endTime = Date.now()
        meta.actions.push(item)
        localStorage.setItem("$track__meta", JSON.stringify(meta))
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