<template>
  <div>
    <div class="b" v-select>
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
  const selection = getSelection();
  el.oncontextmenu = (event) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    menu.value.style.transform = `translate(${clientX}px,${clientY}px)`;
    menu.value.oncontextmenu = (e) => {
      e.preventDefault();
    };
    menu.value.onclick = (e) => {
      e.stopPropagation();
      selection.selectAllChildren(event.target);
      const text = selection.toString();
      navigator.clipboard.writeText(text);
    };
    state.menuVis = true;
    document.body.addEventListener(
      "click",
      () => {
        state.menuVis = false;
        selection.removeAllRanges();
      },
      {
        once: true,
      }
    );
  };
};
console.log(globalThis);
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