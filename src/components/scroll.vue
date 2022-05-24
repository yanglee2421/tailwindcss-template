<template>
  <div>
    <div class="scroll" v-for="item in 3" :key="item">
      <ul class="b flex">
        <li v-for="(item, index) in 100" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang='scss' scoped>
.scroll {
  height: 50px;
  cursor: pointer;
  @extend.my-1;
  ::-webkit-scrollbar {
    height: 8px;
    //不能实现:hover伪类的设备=>移动端
    @media (any-hover: none) {
      display: none;
    }
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    //能实现:hover伪类的设备=>PC
    @media (any-hover: hover) {
      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
}
ul {
  @extend.overflow-x-auto;
  @extend.overflow-y-hidden;
  overflow: overlay;
  //不能被点击的设备
  @media (any-pointer: none) {
    scrollbar-color: red, blue;
  }
  //精确点击的设备=>PC
  @media (any-pointer: fine) {
    scrollbar-width: thin;
  }
  //不能实现精确击的设备=>移动端
  @media (any-pointer: coarse) {
    scrollbar-width: none;
  }
}
/*
以上使用的scrollbar-width、scrollbar-color
！！！在100以上版本的Firefox中已失效！！！
*/
li {
  flex: 0 0 auto;
  width: 100px;
  height: 50px;
  border: 1px red solid;
}
</style>