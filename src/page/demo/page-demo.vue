<script lang="ts" setup></script>

<template>
  <div class="box"></div>
</template>

<style lang="scss" scoped>
:global(.dark) {
  .header {
    @include acrylic(true);
  }
}
.box {
  height: 100vh;
  // background-image: url("@/assets/image/bg/bg.jpg");
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
.header-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
}
.icon-search {
  display: flex;
  align-items: center;
  // justify-content: start;
  padding: 1rem;

  @media (min-width: 575px) {
    flex: 1;
  }
}
.ly-icon {
  display: none !important;
}

@media (max-width: 575px) {
  .nav-menu {
    display: none;
  }
  .ly-icon {
    display: block !important;
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
