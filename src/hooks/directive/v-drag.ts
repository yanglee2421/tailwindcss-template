import { Directive } from "vue";

interface _value {
  index: number;
  arr: unknown[];
}

export const vDrag: Directive<HTMLElement, _value> = (dom, bind) => {
  try {
    const {
      value: { index, arr },
    } = bind;
    dom.draggable = true;
    dom.ondragstart = (event: DragEvent) => {
      event.dataTransfer?.setData("index", index.toString());
    };
    dom.ondragover = (event: DragEvent) => {
      event.preventDefault();
    };
    dom.ondrop = (event: DragEvent) => {
      event.preventDefault();
      const targetIndex = event.dataTransfer?.getData("index")!;
      arr.splice(index, 1, ...arr.splice(Number(targetIndex), 1, arr[index]));
    };
  } catch {
    console.error(new Error("v-drag指令没有获取到正确的值"));
  }
};
