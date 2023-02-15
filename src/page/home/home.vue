<script lang="ts" setup>
import { DarkSwitch } from "@/component";
import { customRef } from "vue";
// proxy target
let target: any = null;
// vue customRef
function myRef(value: unknown) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return Boolean(target);
      },
      set(neoValue) {
        target = Boolean(neoValue);
        console.log("myRef");
        trigger();
      },
    };
  });
}
// customRef instance
const a = myRef(100);
</script>

<template>
  <div class="home-box">
    <el-card>
      <p>{{ a }}</p>
      <el-button @click="a = 0">4399</el-button>
    </el-card>
    <el-card></el-card>
    <el-card header="主题">
      <el-form>
        <el-form-item label="黑夜模式">
          <dark-switch />
        </el-form-item>
        <el-form-item label="雪飘">
          <router-link to="/demo">
            <el-link type="primary">snow</el-link>
          </router-link>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card></el-card>
    <el-card></el-card>
    <el-card></el-card>
    <el-card></el-card>
  </div>
</template>

<style lang="scss" scoped>
@mixin grid-large {
  grid-template: repeat(3, minmax(300px, 1fr)) / repeat(6, minmax(100px, 1fr));
  > *:nth-child(-n + 4) {
    grid-column: span 2;
  }
  > *:nth-child(5) {
    grid-column: span 4;
  }
  > *:nth-last-child(-n + 2) {
    grid-column: span 3;
  }
}
@mixin grid-med {
  grid-template: auto/repeat(2, minmax(0, 1fr));
  > *:nth-child(n) {
    grid-column: span 1;
  }
}
@mixin grid-small {
  grid-template: auto/repeat(1, minmax(0, 1fr));
  > *:nth-child(n) {
    grid-column: span 1;
  }
}
.home-box {
  @extend .p-1;
  display: grid;
  gap: 10px;

  @media (min-width: 1400px) {
    @include grid-large();
  }
  @media (min-width: 1200px) and (max-width: 1399px) {
    @include grid-large();
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    @include grid-large();
  }
  @media (min-width: 768px) and (max-width: 991px) {
    @include grid-med();
  }
  @media (min-width: 576px) and (max-width: 767px) {
    @include grid-med();
  }
  @media (max-width: 575px) {
    @include grid-small();
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
