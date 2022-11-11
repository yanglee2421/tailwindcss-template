<template>
  <div>
    <fw-switch v-model="state.isShow"></fw-switch>
    <h1 v-height="state.isShow">这是标题</h1>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const state = reactive({
  isShow: true,
});
</script>
<style lang="scss" scoped></style>
