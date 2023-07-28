<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="container">
    <div
      class="hotspots__map"
      style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn"
    >
      <img
        src="https://zqgc2023.absen.com/wp-content/uploads/2023/07/map-1.png"
        alt=""
      />
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
      <div class="dot dot4"></div>
      <div class="dot dot5"></div>
      <div class="dot dot6"></div>
      <div class="dot dot7"></div>
      <div class="dot dot8"></div>
      <div class="dot dot9"></div>
      <div class="dot dot10"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>

<style>
.hotspots__map {
  width: 74.86111%;
  margin: 0 auto;
  position: relative;
}
@keyframes bigSmall {
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  50% {
    opacity: 0.5;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.hotspots__map .dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #e0852e;
}
@media screen and (max-width: 520px) {
  .hotspots__map .dot {
    width: 4px;
    height: 4px;
  }
}
.hotspots__map .dot::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 300%;
  height: 300%;
  margin-left: -150%;
  margin-top: -150%;
  position: absolute;
  border-radius: 100%;
  background-color: rgba(224, 133, 46, 0.34);
  animation: bigSmall 2s infinite;
}
.hotspots__map .dot.dot1 {
  left: 18.18182%;
  top: 50.08576%;
}
.hotspots__map .dot.dot1 {
  left: 18.18182%;
  top: 50.08576%;
}
.hotspots__map .dot.dot2 {
  left: 23.00557%;
  top: 44.76844%;
}
.hotspots__map .dot.dot3 {
  left: 32.83859%;
  top: 76.1578%;
}
.hotspots__map .dot.dot4 {
  left: 49.62894%;
  top: 31.56089%;
}
.hotspots__map .dot.dot5 {
  left: 57.51391%;
  top: 50.08576%;
}
.hotspots__map .dot.dot6 {
  left: 71.70686%;
  top: 20.92624%;
}
.hotspots__map .dot.dot7 {
  left: 77.55102%;
  top: 45.7976%;
}
.hotspots__map .dot.dot8 {
  left: 78.10761%;
  top: 50.60034%;
}
.hotspots__map .dot.dot9 {
  left: 80.05566%;
  top: 45.45455%;
}
.hotspots__map .dot.dot10 {
  left: 86.08534%;
  top: 37.3928%;
}
</style>
