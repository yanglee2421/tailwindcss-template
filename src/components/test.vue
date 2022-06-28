<template>
  <div>
    <div v-select>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae
      officiis hic saepe minus! Libero dolorem ipsum voluptates eos repellendus
      porro. Illum itaque officia id dolorum, animi magnam numquam fugit.
    </div>
  </div>
  <teleport to="body">
    <ul ref="menu" v-show="state.menuVis" class="fixed menu">
      <li>复制</li>
    </ul>
  </teleport>
</template>
<script setup>
import { reactive, ref } from "vue";
const state = reactive({
  menuVis: false,
});
const menu = ref();
const vSelect = (el) => {
  el.oncontextmenu = (event) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    menu.value.style.transform = `translate(${clientX}px,${clientY}px)`;
    menu.value.onclick = () => {
      const range = document.createRange();
      range.selectNodeContents(event.target);
      const selection = getSelection();
      selection.addRange(range);
      const text = range.toString();
      navigator.clipboard.writeText(text);
    };
    state.menuVis = true;
  };
};
</script>
<style lang='scss' scoped>
.menu {
  z-index: 99;
  left: 0;
  top: 0;
  user-select: none;
  background-color: #fff;
}
</style>