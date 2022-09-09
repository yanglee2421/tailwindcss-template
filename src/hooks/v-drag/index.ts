import { Directive } from "vue"
interface _value {
    index: number
    arr: unknown[]
}
const vDrag: Directive<HTMLElement, _value> = (dom, binding) => {
    const { value: { index, arr } } = binding
    dom.draggable = true
    dom.ondragstart = (event: DragEvent) => {
        console.log(index)
        event.dataTransfer?.setData('index', index.toString())
    }
    dom.ondragover = (event: DragEvent) => {
        event.preventDefault()
    }
    dom.ondrop = (event: DragEvent) => {
        // event.preventDefault()
        const targetIndex = event.dataTransfer?.getData('index')!
        arr.splice(index, 1, ...arr.splice(Number(targetIndex), 1, arr[index]))
        console.log(arr)
    }
}
export default vDrag