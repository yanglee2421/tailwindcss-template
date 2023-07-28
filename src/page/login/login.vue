<script lang="ts" setup>
// API Imports
import { useQuery } from "@tanstack/vue-query";
// import { useLoginPost } from "./hooks";

// Components Imports
import rowCell from "./row-cell.vue";

// const { mutate } = useLoginPost();

useQuery({
  queryKey: ["unique"],
  async queryFn() {
    return { name: "xxx" };
  },
});
</script>

<template>
  <div class="m-2">
    <!-- <button @click="() => mutate()">login</button> -->
    <el-row :gutter="16">
      <row-cell title="header link">
        <a
          href="@"
          class="link"
          >link</a
        >
      </row-cell>
      <row-cell title="dot">
        <div class="dot"></div>
      </row-cell>
      <row-cell title="list">
        <ul class="list b">
          <li><a href="#">libsen Green</a></li>
          <li><a href="#">Find Plirtner</a></li>
          <li><a href="#">Clireers</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </row-cell>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.link {
  color: #fff;
  color: gray;
  display: inline-block;
  line-height: 33px;
  padding: 0 20px;
  position: relative;
  transform: translateZ(0);

  &::before {
    content: "";
    display: block;
    width: 0;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    border-radius: 16px;
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    transition: all 0.5s;
  }

  &:hover {
    &::before {
      width: 100%;
      opacity: 1;
      visibility: visible;
      background: -moz-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
      background: -webkit-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
      background: -ms-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
      background: linear-gradient(90deg, #ef993a 0%, #e78131 100%);
      left: 0;
    }
  }
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
.yang-relative {
  position: relative;
}
.yang-dot {
  position: absolute;
  width: 8px !important;
  height: 8px !important;
  border-radius: 100% !important;
  background-color: #e0852e !important;
}
.yang-dot::after {
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

nav > ul > li > .ct-menu-link {
  color: #fff !important;
  display: inline-flex;
  height: 33px !important;
  line-height: 33px !important;
  padding: 0 20px !important;
  position: relative;
  transform: translateZ(0);
}
nav > ul > li > .ct-menu-link::before {
  content: "";
  display: block;
  width: 0;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  border-radius: 16px;
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  transition: all 0.5s;
}
nav > ul > li:hover > .ct-menu-link::before {
  width: 100%;
  opacity: 1;
  visibility: visible;
  background: -moz-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: -webkit-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: -ms-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  left: 0;
}
nav > ul > li:hover > .ct-menu-link .ct-icon {
  fill: #fff;
}

ul {
  list-style: none;
}
.list {
  background: -moz-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: -webkit-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: -ms-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  padding: 10px;
  border-radius: 10px;
  transition: all 0.5s;
}
.list > li {
  padding: 5px 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
}
.list > li:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>

<style>
p.elementor-heading-title.elementor-size-default > a {
  display: inline-block;
  padding: 8px 16px;
  background-color: #00ef84;

  color: black !important;
  font-size: 15px !important;
  font-weight: 500;

  transition: 0.3s;
}
p.elementor-heading-title.elementor-size-default > a:hover {
  background-color: #000;
  color: #fff !important;
}
</style>
<style>
header nav ul.sub-menu {
  background: -moz-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: -webkit-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: -ms-linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  background: linear-gradient(90deg, #ef993a 0%, #e78131 100%);
  padding: 10px;
  border-radius: 10px !important;
  transition: all 0.5s;
}
header nav ul.sub-menu > li {
  padding: 5px 10px;
  border: 0 !important;
  color: #fff;
}
header nav ul.sub-menu > li > a {
  color: #fff !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 21px !important;
}
header nav ul.sub-menu > li:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
