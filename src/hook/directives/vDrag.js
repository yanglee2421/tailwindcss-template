/*
拖拽指令
值是一个Object
index属性：v-for接收到的index
arr属性：v-for遍历的数组
*/
export default (el, binding) => {
    const { index, arr } = binding.value;
    if (!Array.isArray(arr)) throw new Error('arr必须是一个数组')
    el.draggable = true;
    el.ondragstart = (e) => {
        e.dataTransfer.setData("dragIndex", index);
    };
    el.ondragover = (e) => {
        e.preventDefault();
        e.currentTarget.style.borderTop = "1px red solid";
    };
    el.ondragleave = (e) => {
        e.currentTarget.style.borderTop = "";
    };
    el.ondrop = (e) => {
        e.preventDefault()
        e.currentTarget.style.borderTop = "";
        const dragIndex = +e.dataTransfer.getData("dragIndex");
        arr.splice(index, 1, ...arr.splice(dragIndex, 1, arr[index]));
    };
};
