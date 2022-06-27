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
    console.log(event);
    menu.value.style.transform = `translate(${clientX}px,${clientY}px)`;
    state.menuVis = true;
    menu.value.onclick = () => {
      const text = event.target.innerText;
      const sel = getSelection();
      const selectA = sel.getRangeAt(0);
      // selectA.setStart(event.target, 0);
      selectA.selectNode(event.target);
      navigator.clipboard.writeText(text);
    };
  };
};
</script>
<style lang='scss' scoped>
.menu {
  @extend.b;
  z-index: 99;
  left: 0;
  top: 0;
  user-select: none;
  background-color: #fff;
}
</style>