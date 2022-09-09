import requset from "@/api/request"
/**
 * 要收集的行为单条记录的类型
 * 在HTMLElement扩展属性作为媒介
 */
export interface _action {
    meta: unknown
    id?: number
    beginTime?: number
    endTime?: number
}
interface html_e extends HTMLElement {
    $track__action?: _action
    $track__controller?: AbortController
}
/**
 * BuryingPoint类
 * id
 * 动作队列
 * 构造器
 * 把一个动作推入动作队列中
 * 清空动作队列
 * 将动作队列存入localStorage中
 * 数动作队列发送给后台
 */
class BuryingPoint {
    id = Date.now()
    #actionArr: _action[]
    constructor() {
        const lastActStr = localStorage.getItem('$track__actionArr')!
        const lastAct = JSON.parse(lastActStr)
        this.#actionArr = Array.isArray(lastAct) ? lastAct : []
        window.addEventListener("unload", () => {
            this.setItem()
        })
        setInterval(() => {
            this.request()
        }, 1000)
    }
    push(action: _action) {
        action.id = Date.now()
        this.#actionArr.push(action)
    }
    clear() {
        this.#actionArr = []
    }
    setItem() {
        localStorage.setItem('$track__actionArr', JSON.stringify(this.#actionArr))
    }
    request() {
        const { id } = this
        const actionArr = this.#actionArr.filter(item => item.meta)
        const data = { id, actionArr }
        actionArr.length && requset({ url: "/track", data }).then(res => {
            this.clear()
        })
    }
}
export const buryingPoint = new BuryingPoint()
/**
 * v-track指令
 */
import type { Directive } from "vue"
const vTrack: Directive<html_e, unknown> = {
    mounted(el, binding) {
        const { arg, value } = binding
        switch (arg) {
            case undefined:
                el.$track__action = {
                    beginTime: Date.now(),
                    meta: value,
                }
                el.$track__controller = new AbortController()
                const signal = el.$track__controller.signal
                window.addEventListener('unload', () => {
                    el.$track__action && buryingPoint.push(el.$track__action)
                    buryingPoint.setItem()
                }, { signal })
                break
            default:
                el.addEventListener(arg, (event: Event) => {
                    const item: _action = { meta: null }
                    item.meta = typeof value === "function" ? value(event) : value
                    buryingPoint.push(item)
                })
        }
    },
    updated(el, binding) {
        const { arg, value } = binding
        switch (arg) {
            case undefined:
                el.$track__action && (el.$track__action.meta = value)
                break
            default:
        }
    },
    beforeUnmount(el, binding) {
        const { arg, value } = binding
        switch (arg) {
            case undefined:
                el.$track__controller?.abort()
                if (el.$track__action) {
                    el.$track__action.meta = value
                    el.$track__action.endTime = Date.now()
                    buryingPoint.push(el.$track__action)
                }
                break
            default:
        }
    },
}
export default vTrack