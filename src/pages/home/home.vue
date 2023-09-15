<script lang="ts" setup>
// Components Imports
import homeHeader from "./home-header.vue";
// import homeAsideMenu from "./home-aside-menu.vue";
import { reactive } from "vue";

const state = reactive({
  collapse: false,
});

defineOptions({ inheritAttrs: false });
</script>

<template>
  <el-container class="h-full">
    <!-- <el-aside
      width="auto"
      :class="[
        'transition-all',
        'overflow-hidden',
        state.collapse ? 'w-36' : 'w-12',
      ]"
    >
      <home-aside-menu />
    </el-aside> -->
    <el-container>
      <el-header>
        <el-switch v-model="state.collapse"></el-switch>
        <home-header />
      </el-header>
      <el-main>
        <router-view #default="{ Component }">
          <keep-alive :max="10">
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.page {
  max-width: 1440px;
  padding: 1rem;
  margin: 0 auto;
}
.el-col {
  margin-bottom: 1rem;
}
h1.el-text {
  font-size: 3.5rem;
  word-break: normal;
}
.logo--bg {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  $size: 20rem;
  width: $size;
  height: $size;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    // z-index: 1;
    display: block;
    width: calc($size / 1.2);
    height: calc($size / 1.2);
    border-radius: 50%;
    margin: auto;
    background-color: $danger;
    filter: blur($size * 0.1);
  }
}
</style>
