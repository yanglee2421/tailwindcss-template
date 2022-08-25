interface _binding {
    oldValue?: boolean
    value: boolean//值
    arg: string//参数
    modifiers: Record<string, boolean>//修饰符
}
export default {
    mounted(dom: HTMLElement, binding: _binding) {
        const { value } = binding
        value || (dom.style.overflowY = 'hidden')
        dom.style.height = value ? 'auto' : "0"
    },
    updated(dom: HTMLElement, binding: _binding) {
        const { value } = binding
        const currentHeight = dom.offsetHeight + "px"
        const showHeight = dom.scrollHeight + "px"
        dom.style.height = currentHeight
        dom.style.overflowY = 'hidden'
        dom.style.transition = '.3s'
        setTimeout(() => {
            dom.style.height = value ? showHeight : "0"
        }, 0);
        value && setTimeout(() => {
            dom.style.transition = ''
            dom.style.height = 'auto'
        }, 301);
    }
}
