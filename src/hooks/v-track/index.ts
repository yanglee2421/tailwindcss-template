interface _value {
    count: number,//被点击的次数
    time: number,//用户停留的时长
    times: number,//用户浏览的次数
    eventArr: unknown[],//被点击的元素
}
interface _binding {
    value: _value
    arg: string
    modifiers: Record<string, boolean>
}
let begTime = 0
// 事件控制器
const controller = new AbortController()
const signal = controller.signal
export default {
    mounted(el: HTMLElement, binding: _binding) {
        const { value } = binding
        //获取本次浏览的开始时间
        begTime = Date.now()
        // 获取浏览次数
        const localTimes = localStorage.getItem("track-times")
        value.times = 1 + (localTimes ? Number(localTimes) : 0)
        localStorage.setItem("track-times", value.times.toString())
        // 绑定点击事件
        el.addEventListener("click", (event: Event) => {
            value.count || (value.count = 0)
            value.count++
            Array.isArray(value.eventArr) || (value.eventArr = [])
            value.eventArr?.push((event.target as HTMLElement).innerText)
        })
        // 绑定close事件
        window.addEventListener("close", () => {
            value.time = Date.now() - begTime
            console.log(value)
        }, { signal })
    },
    // 组件卸载时
    beforeUnmount(el: HTMLElement, binding: _binding) {
        const { value } = binding
        value.time = Date.now() - begTime
        controller.abort()
        console.log(value)
    }
}