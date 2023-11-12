<script lang="ts" setup>
import itemBg from "@/assets/image/item-bg.png";
defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="page">
    <div
      v-for="item in 20"
      :key="item"
      class="item"
      :style="{ backgroundImage: `url(${itemBg})` }"
    >
      <div class="item-content">
        <div class="item-content__header">
          <span>23/08</span>
          <span>这是一条动态标题</span>
        </div>
        <div class="item-content__body"></div>
        <div class="item-content__footer"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  //   max-width: 1400px;
  //   margin-inline: auto;
  // border: 1px dashed;

  display: grid;
  place-content: space-between;
  column-gap: 0;
  row-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, 348px);
  grid-template-rows: 252px;
  grid-auto-rows: 252px;
}
.item {
  position: relative;
  color: #fff;
  background-size: cover;

  .item-content {
    position: absolute;
    inset: 0;
  }
  .item-content__header {
    // border: 1px red solid;
    display: flex;
    height: 32px;

    > span:first-child {
      flex: 0 0 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      //   border: 1px dashed;
    }
    > span:last-child {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
}
</style>
