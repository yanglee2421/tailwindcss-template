<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  const sort = document.getElementById("sort")!;
  sort.onclick = () => {
    record(container);
    change();
    play(container);
  };

  const container = document.querySelector(".container");

  function record(container: Element | null) {
    if (!container) return;

    for (let i = 0, len = container.children.length; i < len; i++) {
      const dom = container.children[i];
      const rect = dom.getBoundingClientRect();
      Reflect.set(dom, "startX", rect.left);
      Reflect.set(dom, "startY", rect.top);
    }
  }

  function change() {
    if (!container) return;

    const childrens = [...container.children];
    for (let i = 0, l = childrens.length; i < l; i++) {
      const children = childrens[i];
      const j = Math.floor(Math.random() * l);
      if (i !== j) {
        // 获取当前dom的下一个元素
        const inextDom = children.nextElementSibling;
        // 把i插入j之前
        container.insertBefore(children, childrens[j]);
        // 把下标j的元素插入到i元素之前
        container.insertBefore(childrens[j], inextDom);
      }
    }
  }

  function play(container: Element | null) {
    if (!container) return;

    for (let i = 0, len = container.children.length; i < len; i++) {
      const dom = container.children[i];
      const { left, top } = dom.getBoundingClientRect();

      const startX = Reflect.get(dom, "startX");
      const startY = Reflect.get(dom, "startY");

      dom.animate(
        [
          {
            transform: `translate(${startX - left}px, ${startY - top}px)`,
          },
          { transform: `translate(0px, 0px)` },
        ],
        { duration: 600 }
      );
    }
  }
});

defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="btns">
    <button id="sort">随机排序</button>
  </div>
  <div class="container">
    <div
      v-for="item in 50"
      :key="item"
      class="item"
    >
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.btns {
  text-align: center;
}

.btns button {
  margin: 0 1em;
  outline: none;
  border: none;
  background: #579ef8;
  color: #fff;
  padding: 7px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btns button:hover {
  opacity: 0.8;
}

.container {
  width: 500px;
  overflow: hidden;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  text-align: center;
  background: #eef5fe;
  border: 1px solid #ddebfd;
  line-height: 50px;
  margin: 5px;
}
</style>
