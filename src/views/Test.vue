<template>
  <div>
    <div
      class="h-100"
      v-vis="false"
    >
      <img
        :src="state.src"
        id="qrcodeImg"
      />
      <canvas
        :src="state.src"
        id="qrcodeCanvas"
      ></canvas>
    </div>
    <swz-swiper :picArr="state.arr"></swz-swiper>
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
  arr: [
    "http://10.32.18.19:8080/document/api/Basic/GetFile/d6b6251d-1e92-4a56-a809-44c4aabeb308.jpg",
    "http://10.32.18.19:8080/document/api/Basic/GetFile/28929e15-30af-49f2-a23c-9e1443898fb7.jpg",
    "http://10.32.18.19:8080/document/api/Basic/GetFile/69eb515f-ddc7-4f6c-942d-9dc8e83e48ea.jpg",
    "http://10.32.18.19:8080/document/api/Basic/GetFile/66c68c11-3c9c-46b9-9ab9-a0c78ea6b0fd.jpg",
  ],
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