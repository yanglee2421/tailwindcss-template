<template>
  <el-card>
    <div class="card-item">
      <swz-image
        src=""
        lazy
      >
      </swz-image>
      <div>
        <p>山海足浴</p>
        <p>
          <span> 套餐原价： </span>
          <span class="text-danger">{{ 199 }}</span>
          <span>元</span>
        </p>
        <p>
          <span> 检车优惠价格： </span>
          <span class="text-danger">{{ 199 }}</span>
          <span>元</span>
        </p>
      </div>
      <el-link
        type="primary"
        class="flex"
      >
        <span>详情</span>
        <el-icon><DArrowRight /></el-icon>
      </el-link>
    </div>
  </el-card>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    item?: {
      imgUrl: string;
      shop: string;
    };
  }>(),
  {
    item: () => {
      return {
        imgUrl: "",
        shop: "",
      };
    },
  }
);
</script>
<style lang="scss" scoped>
.el-card {
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
