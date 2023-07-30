<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <a
    href="javascript:void(0);"
    class="yang-img-category"
  >
    <div class="yang-img-category__img-box">
      <img
        src="https://zqgc2023.absen.com/wp-content/uploads/2023/07/dooh@2x.png"
      />
    </div>
    <div class="yang-img-category__title"><h2 class="fnt24">Dooh</h2></div>
  </a>
</template>
<style>
.yang-img-category {
  position: relative;
  display: block;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.yang-img-category__img-box {
  height: 100%;
  overflow: hidden;
}
.yang-img-category img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
}
.yang-img-category:hover img {
  transform: scale(1.05);
}
.yang-img-category__title {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.7);
  height: 60px;
}
.yang-img-category h2 {
  color: #fff;
  font-size: 24px;
  transition: all 0.3s;
}
.yang-img-category:hover h2 {
  color: #e78231;
}
</style>

<style lang="scss" scoped></style>
