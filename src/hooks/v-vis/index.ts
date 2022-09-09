import { Directive } from "vue";
/**
 * width修饰符
 */
import "./v-vis.scss";
const vVis: Directive<HTMLElement, boolean> = {
    mounted(dom, binding) {
        const { value, modifiers } = binding
        const wh = modifiers.width ? 'width' : 'height'
        dom.classList.add('swz-vis-clearfix')
        dom.style[wh] = value ? '' : "0"
        value || (dom.classList.add('swz-vis-trans'))
    },
    updated(dom, binding) {
        const { value, oldValue, modifiers } = binding
        const wh = modifiers.width ? 'width' : 'height'
        const currentValue = (modifiers.width ? dom.offsetWidth : dom.offsetHeight) + "px"
        const showValue = (modifiers.width ? dom.scrollWidth : dom.scrollHeight) + "px"
        if (value !== oldValue) {
            // value发生变动才执行以下代码
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
export default vVis