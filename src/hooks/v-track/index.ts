import request from "@/api/request"
interface _value {
    count: number//被点击的次数
    time: number//用户停留的时长
    times: number//用户浏览的次数
    eventArr: unknown[]//被点击的元素
}
interface _binding {
    value: _value
    arg: string
    modifier: Record<string, boolean>
}
// 要收集的数据
let res: Partial<_value> = {}
let begTime = 0
// 收集事件的方法
const track = () => {
    res.time = Date.now() - begTime
    res.eventArr = res.eventArr?.filter(item => item)
    request({ url: "/track", data: res })
    res = {} as any
}
// 事件控制器
const controller = new AbortController()
const signal = controller.signal
export default {
    mounted(el: HTMLElement, binding: _binding) {
        const { arg, value } = binding
        switch (arg) {
            case "root":
                //获取本次浏览的开始时间
                begTime = Date.now()
                // 获取浏览次数
                const localTimes = localStorage.getItem("track-times")
                res.times = 1 + (localTimes ? Number(localTimes) : 0)
                localStorage.setItem("track-times", res.times.toString())
                // beforeunload事件
                window.addEventListener("beforeunload", () => {
                    track()
                }, { signal })
                break
            case "click":
                // 绑定点击事件
                el.addEventListener("click", (event: Event) => {
                    res.count || (res.count = 0)
                    res.count++
                    Array.isArray(res.eventArr) || (res.eventArr = [])
                    const item = value
                    res.eventArr?.push(item)
                })
                break
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