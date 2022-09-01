<template>
  <div>
    <input
      type="file"
      @change="fun"
    >
    <div id="qrcode"></div>
    <canvas id="dom_canvas"></canvas>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { onMounted } from "vue";
import qrcode from "qrcode";
import request from "@/api/request";
const fun = (event: any) => {
  console.log(event.currentTarget?.files);
};
onMounted(() => {
  const dom = document.querySelector("#qrcode");
  const canvas = document.querySelector<HTMLCanvasElement>("#dom_canvas")!;
  qrcode
    .toCanvas(["要", "生"], {
      width: 81,
      margin: 1,
      errorCorrectionLevel: "H",
    })
    .then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "文件名.png", { type: blob.type });
          console.log(file);
          const form = new FormData();
          form.append("file", file);
          const url = URL.createObjectURL(blob);
          window.open(url);
          /* request({
          data: form,
        }); */
        }
      });
    });
});
</script>
<style lang='scss' scoped>
</style>