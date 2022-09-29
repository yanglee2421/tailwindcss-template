<template>
  <div class="h-100 root">
    <el-card>
      <div :ref="(ref) => (chart.lt = ref)"></div>
    </el-card>
    <el-card>
      <div :ref="(ref) => (chart.rt = ref)"></div>
    </el-card>
    <el-card>
      <div :ref="(ref) => (chart.rb = ref)"></div>
    </el-card>
    <el-card>
      <div :ref="(ref) => (chart.lb = ref)"></div>
    </el-card>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import * as echarts from "echarts";
import useCharts from "@/hooks/useCharts";
const a = null;
useCharts(a as any, [0]);
const chart: Record<string, unknown> = {
  rt: null,
};
const renderRt = (dom: HTMLElement, data: unknown = []) => {
  const charts = echarts.getInstanceByDom(dom) || echarts.init(dom);
  const option = {};
  charts.setOption(option);
  return charts;
};
</script>
<style lang="scss" scoped>
.root {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
}
</style>
