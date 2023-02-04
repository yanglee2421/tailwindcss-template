<script lang="ts" setup>
import { useCssModule, ref, onMounted } from "vue";

const str = `<a class="pp" onclick="if('str'){return false}else{return false}" href="https://www.baidu.com" target="_blank">
              this is a p
            </a>`;
const style = useCssModule();
console.log(style);
const box = ref<HTMLDivElement | null>(null);
onMounted(() => {
  const arr = box.value?.querySelectorAll("a");
  arr?.forEach((a) => {
    a.addEventListener("click", (e) => {
      // e.preventDefault();
    });
  });
});
</script>

<template>
  <div
    v-html="str"
    :ref="(e:any) => (box = e)"
    :class="style.box + ' box'"
  ></div>
</template>

<style lang="scss" scoped>
.box {
  :deep(.pp) {
    color: green !important;
  }
}
</style>
<style lang="scss" module>
.box {
  :global(.pp) {
    color: red;
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
