interface _binding {
    oldValue?: boolean
    value: boolean//值
    arg: string//参数
    modifiers: Record<string, boolean>//修饰符
}
export default {
    mounted(dom: HTMLElement, binding: _binding) {
        const { value, modifiers } = binding
        const wh = modifiers.width ? 'width' : 'height'
        value || (dom.style.overflow = 'hidden')
        dom.style[wh] = value ? '' : "0"
    },
    updated(dom: HTMLElement, binding: _binding) {
        const { value, oldValue, modifiers } = binding
        // value发生变动才执行以下代码
        if (value !== oldValue) {
            const wh = modifiers.width ? 'width' : 'height'
            const currentValue = (modifiers.width ? dom.offsetWidth : dom.offsetHeight) + "px"
            const showValue = (modifiers.width ? dom.scrollWidth : dom.scrollHeight) + "px"
            dom.style.overflow = 'hidden'
            dom.style[wh] = currentValue
            dom.style.transition = '.3s'
            setTimeout(() => {
                dom.style[wh] = value ? showValue : "0"
            }, 0);
            value && setTimeout(() => {
                dom.style.transition = ''
                dom.style[wh] = ''
                dom.style.overflow = ''
            }, 301);
        }
    }
}
