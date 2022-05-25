//const vDrag =
export default (el, binding) => {
    const { index, arr } = binding.value;
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
        e.currentTarget.style.borderTop = "";
        const dragIndex = +e.dataTransfer.getData("dragIndex");
        arr.splice(index, 1, ...arr.splice(dragIndex, 1, arr[index]));
    };
};
