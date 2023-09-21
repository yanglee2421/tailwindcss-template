import { fabric } from "fabric";

const canvas = new fabric.Canvas("canvasId");

const activeSelection = new fabric.ActiveSelection([], { canvas: canvas });

const clipRect = new fabric.Rect({
  left: 50, // 裁剪区域的左上角 x 坐标
  top: 50, // 裁剪区域的左上角 y 坐标
  width: 100, // 裁剪区域的宽度
  height: 100, // 裁剪区域的高度
});

canvas.add(clipRect);
activeSelection.clipPath = clipRect;

const group = canvas.getActiveObject();
group?.toDataURL({ left: 0 });
