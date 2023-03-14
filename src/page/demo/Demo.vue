<script lang="ts" setup>
import { watch, reactive } from "vue";
const state = reactive({ count: 0, prev: 0, three: 0 });
</script>

<template>
  <div class="box">
    <div class="header">
      <h3 class="h-logo">
        <span>Yang Lee</span>
      </h3>
      <ul class="h-ul">
        <li><router-link to="/">ECMAScript</router-link></li>
        <li><router-link to="/">TypeScript</router-link></li>
        <li><router-link to="/">React</router-link></li>
        <li><router-link to="/demo">Sass</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
  color: #1475f7 !important;
}
.box {
  height: 100vh;
  background-image: url("@/assets/image/bg/bg.jpg");
  @include bgc-img;
}
.header {
  @include acrylic;
  @extend .shadow, .px-2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555;
  font-family: "consolas";
  font-size: 1rem;
  font-weight: 600;
}
:global(.dark) {
  .header {
    @include acrylic(true);
  }
}
.h-logo {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  margin-block: 1rem;

  > img {
    height: 24px;
  }
  > span {
    line-height: 1.5;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(45deg, #7114ef, #1475f7);
  }
}
.h-ul {
  list-style: none;
  display: flex;

  > li {
    padding: 0.5rem;
  }
  a {
    color: #555;
    text-decoration: none;
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
