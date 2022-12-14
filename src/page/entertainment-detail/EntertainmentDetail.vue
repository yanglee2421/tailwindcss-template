<template>
  <layout-mobile
    title="套餐介绍"
    footer-text="滇ICP备2022005213号-1"
    footer-link="https://beian.miit.gov.cn/#/home"
  >
    <el-card class="mt-1">
      <div class="card-grid">
        <swz-image src=""></swz-image>
        <div class="flex-1">
          <p>山海足浴{{ $route.params.id }}</p>
          <p>
            <span>套餐原价：</span>
            <span class="text-danger">199</span>
            <span>元</span>
          </p>
          <p>
            <span>检车优惠价格：</span>
            <span class="text-danger">199</span>
            <span>元</span>
          </p>
        </div>
      </div>
    </el-card>
    <el-divider>详细信息</el-divider>
    <div class="img-grid">
      <div>
        <swz-image src=""></swz-image>
        <swz-image src=""></swz-image>
        <swz-image src=""></swz-image>
        <swz-image src=""></swz-image>
      </div>
    </div>
    <el-divider>联系购买</el-divider>
    <el-card>
      <el-form size="large">
        <el-form-item label="我的车牌：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="我的电话：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="success"
            class="w-100"
            >0元购买</el-button
          >
        </el-form-item>
        <el-form-item class="tel-item">
          <a href="tel:13888997041">
            <el-button>客户电话</el-button>
          </a>
        </el-form-item>
      </el-form>
    </el-card>
  </layout-mobile>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import request from "@/api/request";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
onBeforeMount(() => {
  console.log("beforeMount", history.state.item);
  //   history.state.item && request({});
});
</script>
<style lang="scss" scoped>
.card-grid {
  display: grid;
  grid-template: auto/auto 1fr;
  gap: 20px;
  align-items: center;

  .swz-image {
    width: 6rem;
    height: 6rem;
    border-radius: 5px;
  }
  p + p {
    margin-top: 10px;
  }
}
.img-grid {
  position: relative;
  width: 100%;
  height: 0;
  padding: 100% 0 0;
  > div {
    position: absolute;
    @include position(0);
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 10px;
  }
  .swz-image {
    border-radius: 5px;
    box-shadow: $box-shadow;
  }
}
.el-form-item:first-child {
  margin-top: 22px;
}
:deep(.tel-item .el-form-item__content) {
  justify-content: center;
}
</style>
