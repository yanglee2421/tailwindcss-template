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
        <div class="flex-column">
          <div>
            <p>实际销售金额（万元）</p>
            <p>2000</p>
            <p>月环比 15.9%</p>
          </div>
          <div
            id="charts01"
            class="flex-1-hidden card-charts"
          ></div>
          <div>
            <p class="flex-between">
              <span>有 10条 合同状态为审核中，共 500元</span>
              <el-link type="primary">查看合同</el-link>
            </p>
            <p class="flex-between">
              <span>有 5期 回款在近期要完成，共 500元</span>
              <el-link type="primary">查看回款</el-link>
            </p>
          </div>
        </div>
      </el-card>
      <el-card header="客户数量达成">
        <div class="flex-column">
          <div>
            <p>实际客户数量（人）</p>
            <p>20</p>
            <p>月环比 15.9%</p>
          </div>
          <div
            id="charts02"
            class="flex-1-hidden card-charts"
          ></div>
          <div>
            <p class="flex-between">
              <span>已连续10天未签订客户</span>
              <el-link type="primary">查看详情</el-link>
            </p>
          </div>
        </div>
      </el-card>
      <el-card header="销售产品达成">
        <div class="flex-column">
          <div>
            <p>实际销售金额（万元）</p>
            <p>2000</p>
            <p>月环比 15.9%</p>
          </div>
          <div
            id="charts03"
            class="flex-1-hidden card-charts"
          ></div>
          <div>
            <p class="flex-between">
              <span>有 10条 合同状态为审核中，共 500元</span>
              <el-link type="primary">查看合同</el-link>
            </p>
            <p class="flex-between">
              <span>有 5期 回款在近期要完成，共 500元</span>
              <el-link type="primary">查看回款</el-link>
            </p>
          </div>
        </div>
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
import * as echarts from "echarts";
import { onBeforeUnmount, onMounted } from "vue";
const controller = new AbortController();
const signal = controller.signal;
onMounted(() => {
  const charts01 = echarts.init(document.querySelector("#charts01")!);
  const charts02 = echarts.init(document.querySelector("#charts02")!);
  const charts03 = echarts.init(document.querySelector("#charts03")!);
  var datas = [
    [
      { name: "圣彼得堡来客", value: 5.6 },
      { name: "陀思妥耶夫斯基全集", value: 1 },
      { name: "史记精注全译（全6册）", value: 0.8 },
      { name: "加德纳艺术通史", value: 0.5 },
      { name: "表象与本质", value: 0.5 },
      { name: "其它", value: 3.8 },
    ],
  ];

  const option = {
    title: {
      text: "阅读书籍分布",
      left: "center",
      textStyle: {
        color: "#999",
        fontWeight: "normal",
        fontSize: 14,
      },
    },
    series: datas.map((data, index) => {
      return {
        type: "pie",
        radius: [70, 40],
        top: 0 + "%",
        height: "100%",
        left: "center",
        width: "100%",
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}\n{time|{c} 小时}",
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: {
            time: {
              fontSize: 10,
              color: "#999",
            },
          },
        },
        labelLine: {
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
        },
        labelLayout(params: any) {
          const isLeft = params.labelRect.x < charts01.getWidth() / 2;
          const points = params.labelLinePoints as number[][];
          points[2][0] = isLeft
            ? params.labelRect.x
            : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points,
          };
        },
        data,
      };
    }),
  };

  charts01.setOption(option);
  charts02.setOption(option);
  charts03.setOption(option);
  window.addEventListener(
    "resize",
    () => {
      charts01.resize();
      charts02.resize();
      charts03.resize();
    },
    { signal }
  );
});
onBeforeUnmount(() => {
  controller.abort();
});
</script>
<style lang="scss" scoped>
.card-area {
  display: grid;
  grid-template: repeat(2, 400px) auto/repeat(3, minmax(420px, 1fr));
  gap: 10px;
  padding-top: 10px;
}
.card-charts {
  padding: 10px;
}
.card-5 {
  grid-column: span 2/-1;
}
.card-6 {
  grid-column: 1/-1;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
:deep(.el-card) {
  @extend.flex-column;
}
:deep(.el-card__body) {
  @extend.flex-1-hidden;
}
</style>
