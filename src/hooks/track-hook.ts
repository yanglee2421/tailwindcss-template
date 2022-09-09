import { buryingPoint } from "./v-track"
import { onMounted, onBeforeMount, onActivated, onDeactivated } from "vue"
import type { _action } from "./v-track"
export default (meta: unknown) => {
    /**
     * 事件控制器
     * 事件标记
     * 进入时执行
     * 离开时执行
     */
    const item: _action = { meta }
    let controller: AbortController = null as unknown as AbortController
    let signal: AbortSignal = null as unknown as AbortSignal
    const enter = () => {
        item.beginTime = Date.now()
        controller = new AbortController()
        signal = controller.signal
        window.addEventListener("unload", () => {
            item.endTime = Date.now()
            buryingPoint.push(item)
            buryingPoint.setItem()
        }, { signal })
    }
    const leave = () => {
        controller?.abort()
        item.endTime = Date.now()
        buryingPoint.push(item)
    }
    onMounted(() => {
        enter()
    })
    onActivated(() => {
        enter()
    })
    onDeactivated(() => {
        leave()
    })
    onBeforeMount(() => {
        leave()
    })
    const setMeta = (meta: unknown) => {
        item.meta = meta
        return buryingPoint
    }
    return setMeta
}