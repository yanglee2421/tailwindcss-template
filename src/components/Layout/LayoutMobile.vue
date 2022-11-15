<template>
  <div class="layout-mobile">
    <h1>{{ title }}</h1>
    <main>
      <slot></slot>
      <p>
        <a :href="footerLink">{{ footerText }}</a>
      </p>
    </main>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title?: string;
    footerText?: string;
    footerLink?: string;
  }>(),
  {
    title: "",
    footerText: "",
    footerLink: "",
  }
);
</script>
<style lang="scss" scoped>
.layout-mobile {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow: overlay;
  height: 100%;
  h1 {
    position: sticky;
    top: 0;
    z-index: 9;
    padding: 15px;
    box-shadow: $box-shadow-light;
    background-color: white;
    text-align: center;
  }
  main {
    position: relative;
    flex: 1;
    padding: 0 10px 46px;
    p {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 15px;
      text-align: center;
      a {
        color: $info;
      }
    }
  }
}
</style>
