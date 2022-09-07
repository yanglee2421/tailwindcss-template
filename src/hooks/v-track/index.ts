import request from "@/api/request"
import dateFormat from "@/tool/dateFormat"
interface _meta {
    beginTime: string//开始浏览的时间
    endTime: string//结束浏览的时间
    root: unknown//根元素的信息
    metaArr: unknown[]//触发事件的元素
    times: number//用户浏览的次数
}
interface _binding {
    value: unknown
    arg: string
    modifier: Record<string, boolean>
}
// 要收集的数据
let meta: Partial<_meta> = {}
// 收集事件的方法
const track = () => {
    meta.endTime = dateFormat(Date.now(), true)
    meta.metaArr = meta.metaArr?.filter(item => item)
    request({ url: "http://10.32.18.46:8080/log/add", data: meta })
    meta = {} as any
}
// 事件控制器
const controller = new AbortController()
const signal = controller.signal
// 自定义指令
export default {
    mounted(el: HTMLElement, binding: _binding) {
        const { arg, value } = binding
        switch (arg) {
            case "root":
                //抓取开始时间和根信息
                meta.root = value
                meta.beginTime = dateFormat(Date.now(), true)
                // 获取浏览次数
                const localTimes = localStorage.getItem("track-times")
                meta.times = 1 + (localTimes ? Number(localTimes) : 0)
                localStorage.setItem("track-times", meta.times.toString())
                // beforeunload事件
                window.addEventListener("beforeunload", () => {
                    track()
                }, { signal })
                break
            default:
                // 绑定点击事件
                el.addEventListener(arg, (event: Event) => {
                    Array.isArray(meta.metaArr) || (meta.metaArr = [])
                    const item = typeof value === "function" ? value(event) : value
                    meta.metaArr?.push(item)
                })
        }
    },
    // 组件卸载时
    beforeUnmount(el: HTMLElement, binding: _binding) {
        const { arg } = binding
        switch (arg) {
            case "root":
                controller.abort()
                track()
                break
        }
    }
}