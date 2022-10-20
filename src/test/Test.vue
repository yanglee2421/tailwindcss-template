<template>
  <div>
    <div class="test">
      <a
        href="http://127.0.0.1/pic-blob"
        target="_blank"
        >图片预览</a
      >
      <br />
      <img
        src="http://127.0.0.1/bing"
        alt=""
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
const downloadFn = () => {
  const a = document.createElement("a");
  a.href = "http://127.0.0.1/public/bg.jpg";
  a.target = "_blank";
  // 需要同域才能触发下载
  a.download = "pic.jpg";
  a.click();
  a.remove();
};
</script>
<style lang="scss" scoped></style>
