import request from "@/api/request"
interface _track_item {
    meta: unknown
    beginTime?: number
    endTime?: number
}
/**
 * Track类
 */
class Track {
    id = Date.now()
    #actions: _track_item[]
    constructor() {
        const lastActions = JSON.parse(localStorage.getItem("$track__actions")!)
        this.#actions = Array.isArray(lastActions) ? lastActions as _track_item[] : []
        window.addEventListener('unload', () => {
            this.setItem()
        })
        setInterval(this.request.bind(this), 10000)
    }
    push(item: _track_item) {
        Reflect.set(item, "id", Date.now())
        this.#actions.push(item)
    }
    clear() {
        this.#actions = []
    }
    setItem() {
        localStorage.setItem("$track__actions", JSON.stringify(this.#actions))
    }
    request() {
        const { id } = this
        const actions = this.#actions.filter(item => item.meta)
        const data = { id, actions }
        actions.length && request({ url: "/track", data }).then(res => {
            this.clear()
        })
    }
}
/**
 * 自定义指令区
 */
const track = new Track()
import type { Directive } from "vue"
const vTrans: Directive<HTMLElement> = {
    mounted(el, binding) {
        const { arg, value } = binding
        switch (arg) {
            case undefined:
                Reflect.set(el, '$track__item', {
                    beginTime: Date.now(),
                    meta: value,
                })
                Reflect.set(el, '$track__controller', new AbortController())
                const signal = (el as any).$track__controller.signal
                window.addEventListener("unload", () => {
                    Reflect.set(el, '$track__item', { ...(el as any).$track__item, endTime: Date.now() })
                    track.push((el as any).$track__item)
                    track.setItem()
                }, { signal })
                break
            default:
                el.addEventListener(arg, (event) => {
                    const item = {
                        meta: typeof value === 'function' ? value(event) : value
                    }
                    track.push(item)
                })
        }
    },
    updated(el, binding) {
        const { arg, value } = binding
        switch (arg) {
            case undefined:
                Reflect.set(el, '$track__item', { ...(el as any).$track__item, meta: value })
                break
            default:
        }
    },
    beforeUnmount(el, binding) {
        const { arg, value } = binding
        switch (arg) {
            case undefined:
                (el as any).$track__controller.abort()
                Reflect.set(el, '$track__item', { ...(el as any).$track__item, meta: value, endTime: Date.now() })
                track.push((el as any).$track__item)
                break
            default:
        }
    }
}
export default vTrans