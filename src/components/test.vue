<template>
  <div v-showImg>
    <img src="@/assets/logo.png" alt="" />
  </div>
</template>
<script setup>
const vShowImg = (el) => {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push(Math.floor(Math.random() * 16).toString(16));
  }
  const ranStr = arr.join("");
  el.setAttribute(`showImg-${ranStr}`, "");
  const imgArr = document.querySelectorAll(`[showimg-${ranStr}] img`);
  [...imgArr].forEach((img) => {
    img.draggable = false;
    /*  img.oncontextmenu = (event) => {
      event.preventDefault();
    }; */
    img.addEventListener("click", (event) => {
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
    });
  });
};
</script>
<style lang='scss' scoped>
</style>