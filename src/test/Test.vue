<template>
  <div class="p-1">
    <div>
      <el-radio-group>
        <el-radio>部门</el-radio>
        <el-radio>我的</el-radio>
      </el-radio-group>
    </div>
    <div>
      <el-radio-group>
        <el-radio-button>本月</el-radio-button>
        <el-radio-button>本季</el-radio-button>
        <el-radio-button>半年</el-radio-button>
        <el-radio-button>本年</el-radio-button>
      </el-radio-group>
    </div>
    <div class="card-area">
      <el-card header="销售金额达成">
        <div>图表一</div>
      </el-card>
      <el-card header="客户数量达成">
        <div>图表二</div>
      </el-card>
      <el-card header="销售产品达成">
        <div>图表三</div>
      </el-card>
      <el-card header="销售漏斗">
        <div>图表四</div>
      </el-card>
      <el-card
        header="业绩排名"
        class="card-5"
      >
        <div>图表五</div>
      </el-card>
      <el-card
        header="日程"
        class="card-6"
      >
        <div class="flex">
          <el-calendar class="w-50"> </el-calendar>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
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
<script lang="ts" setup>
import echarts from "echarts";
</script>
<style lang="scss" scoped>
.card-area {
  display: grid;
  grid-template: repeat(2, 300px) auto/repeat(3, 1fr);
  gap: 10px;
  padding-top: 10px;
}
.card-5 {
  grid-column: span 2/-1;
}
.card-6 {
  grid-column: 1/-1;
}
</style>
