interface _binding {
    oldValue?: boolean
    value: boolean//值
    arg: string//参数
    modifiers: Record<string, boolean>//修饰符
}
/**
 * width修饰符
 */
import "./v-vis.scss";
export default {
    mounted(dom: HTMLElement, binding: _binding) {
        dom.classList.add('swz-vis-clearfix')
        const { value, modifiers } = binding
        const wh = modifiers.width ? 'width' : 'height'
        value || (dom.classList.add('swz-vis-trans'))
        dom.style[wh] = value ? '' : "0"
    },
    updated(dom: HTMLElement, binding: _binding) {
        const { value, oldValue, modifiers } = binding
        if (value !== oldValue) {
            // value发生变动才执行以下代码
            const wh = modifiers.width ? 'width' : 'height'
            const currentValue = (modifiers.width ? dom.offsetWidth : dom.offsetHeight) + "px"
            const showValue = (modifiers.width ? dom.scrollWidth : dom.scrollHeight) + "px"
            dom.style[wh] = currentValue
            dom.classList.add('swz-vis-trans')
            setTimeout(() => {
                dom.style[wh] = value ? showValue : "0"
            }, 0);
            value && setTimeout(() => {
                dom.classList.remove('swz-vis-trans')
                dom.style[wh] = ''
            }, 301)
        }
    }
}
