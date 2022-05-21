<template>
  <div>
    <ul class="m-center border" :id="currentIndex">
      <template v-for="(item, index) in 10" :key="index">
        <transition :name="swiper">
          <li v-show="index === currentIndex % 10">{{ item }}</li>
        </transition>
      </template>
    </ul>
    <div>
      <el-button @click="currentIndex--">上一张</el-button>
      <el-button @click="currentIndex++">下一张</el-button>
      <el-button @click="currentIndex = 0">1</el-button>
      <el-button @click="currentIndex = 6">7</el-button>
    </div>
  </div>
</template>
<script setup>
import { onBeforeUpdate, reactive, ref, watch } from "vue";
const arr = reactive([]);
const currentIndex = ref(0);
const swiper = ref();
const value = ref();
watch(
  () => currentIndex.value,
  (newVal, oldVal) => {
    const res = newVal - oldVal;
    if (res > 0 || res === -6) {
      swiper.value = "toRight";
    } else {
      swiper.value = "toLeft";
    }
  }
);
onBeforeUpdate(() => {
  if (currentIndex.value < 0) {
    currentIndex.value = 9;
  }
});
</script>
<style lang='scss' scoped>
$w: 100px;
li {
  width: $w;
  height: $w;
  @extend.absolute;
  background-color: aquamarine;
}
ul {
  width: $w !important;
  height: $w;
  @extend.overflow-hidden;
  @extend.relative;
}
.border {
  border: 1px red solid;
}
.toRight-enter-active,
.toRight-leave-active {
  transition: 0.5s;
}
.toRight-enter-from {
  transform: translateX(100%);
}
.toRight-leave-to {
  transform: translateX(-100%);
}
.toRight-enter-to,
.toRight-leave-from {
  transform: translateX(0);
}
.toLeft-enter-active,
.toLeft-leave-active {
  transition: 0.5s;
}
.toLeft-enter-from {
  transform: translateX(-100%);
}
.toLeft-leave-to {
  transform: translateX(100%);
}
.toLeft-enter-to,
.toLeft-leave-from {
  transform: translateX(0);
}
</style>
