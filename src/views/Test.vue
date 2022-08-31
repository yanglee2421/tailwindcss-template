<template>
  <div class="h-100">
    <img
      :src="state.src"
      id="qrcodeImg"
    />
    <canvas
      :src="state.src"
      id="qrcodeCanvas"
    ></canvas>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang='ts' setup>
import { onMounted, reactive } from "vue";
import Qrcode from "qrcode";
const state = reactive({
  src: "",
});
onMounted(() => {
  const img = document.querySelector<HTMLImageElement>("#qrcodeImg")!;
  const canvas = document.querySelector<HTMLCanvasElement>("#qrcodeCanvas")!;
  const res = Qrcode.toCanvas(canvas, "汉字", {
    // width: 81,
    margin: 1,
    color: {
      light: "#ffff",
      dark: "#0f0f",
    },
    scale: 5,
    small: true,
    /**
     * 二维码版本
     * 纠错级别
     * 屏蔽符号
     * 转日本格式
     */
    version: 4,
    errorCorrectionLevel: "H",
    maskPattern: 7,
  });
  res.then((res) => {
    console.dir(img);
    canvas.toBlob((blob) => {
      console.log(blob);
      const file = new File([blob] as any, "文件名");
      console.dir(file);
    });
  });
});
</script>
<style lang='scss' scoped>
:deep(img + img) {
  width: 1000px;
}
</style>