<template>
  <card-item-vue
    v-for="(item, index) in 10"
    :key="index"
    :item="item"
  ></card-item-vue>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import CardItemVue from "./component/CardItem.vue";
</script>
<style lang="scss" scoped></style>
