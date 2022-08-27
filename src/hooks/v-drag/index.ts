interface _value {
    index: number
    arr: unknown[]
}
interface _binding {
    value: _value
    arg: string
    modifiers: Record<string, boolean>
}
export default (dom: HTMLElement, binding: _binding) => {
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