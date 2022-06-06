<template>
  <div v-showImgNeo>
    <img
      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
      alt=""
      srcset=""
    />
  </div>
</template>
<script setup>
const vShowImgNeo = (el) => {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push(Math.floor(Math.random() * 16).toString(16));
  }
  const ranStr = arr.join("");
  el.setAttribute(`showImg-${ranStr}`, "");
  const imgArr = document.querySelectorAll(`[showimg-${ranStr}] img`);
  [...imgArr].forEach((img, index) => {
    img.draggable = false;
    /*  img.oncontextmenu = (event) => {
          event.preventDefault();
        }; */
    img.onclick = (event) => {
      event.preventDefault();
      const showImg = document.createElement("img");
      showImg.draggable = false;
      showImg.src = event.currentTarget.src;
      const mask = document.createElement("div");
      mask.style.position = "fixed";
      mask.style.top = 0;
      mask.style.right = 0;
      mask.style.bottom = 0;
      mask.style.left = 0;
      mask.style.zIndex = 999;
      mask.style.display = "flex";
      mask.style.justifyContent = "center";
      mask.style.alignItems - "center";
      mask.style.backgroundColor = "rgba(0,0,0,.5)";
      mask.appendChild(showImg);
      document.body.appendChild(mask);
      mask.onclick = (event) => {
        if (event.target === event.currentTarget)
          document.body.removeChild(mask);
      };
    };
  });
};
</script>
<style lang='scss' scoped>
img {
  width: 100px;
}
</style>