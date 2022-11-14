<template>
  <div class="">
    <div class="view">
      <el-card v-for="(item, index) in 10">
        <div class="card-item">
          <swz-image
            src=""
            lazy
          >
          </swz-image>
          <div>
            <p>山海足浴</p>
            <p>
              <span> 套餐原介： </span>
              <span class="text-danger">{{ 199 }}</span>
              <span>元</span>
            </p>
            <p>
              <span> 检车优惠价格： </span>
              <span class="text-danger">{{ 199 }}</span>
              <span>元</span>
            </p>
          </div>
          <div class="flex">
            <span>详情</span>
            <el-icon><DArrowRight /></el-icon>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.el-card + .el-card {
  margin-top: 10px;
}
.swz-image {
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
}
.card-item {
  display: grid;
  grid-template: auto/auto 1fr auto;
  gap: 1rem;
  align-items: center;
  p + p {
    margin-top: 0.5rem;
  }
}
</style>
