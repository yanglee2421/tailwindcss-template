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
    <div class="card-grid">
      <el-card header="销售金额达成">
        <div class="flex-column">
          <div class="card-header">
            <p>实际销售金额（万元）</p>
            <p>2000</p>
            <p>月环比 <b>15.9%</b></p>
          </div>
          <div
            id="charts01"
            class="flex-1-hidden card-charts"
          ></div>
          <div>
            <p class="flex-between">
              <span>有 <b>10条</b> 合同状态为审核中，共 <b>500元</b></span>
              <el-link type="primary">查看合同</el-link>
            </p>
            <p class="flex-between">
              <span>有 <b>5期</b> 回款在近期要完成，共 <b>500元</b></span>
              <el-link type="primary">查看回款</el-link>
            </p>
          </div>
        </div>
      </el-card>
      <el-card header="客户数量达成">
        <div class="flex-column">
          <div class="card-header">
            <p>实际客户数量（人）</p>
            <p>20</p>
            <p>月环比 <b>15.9%</b></p>
          </div>
          <div
            id="charts02"
            class="flex-1-hidden card-charts"
          ></div>
          <div>
            <p class="flex-between">
              <span>已连续 <b>10天</b> 未签订客户</span>
              <el-link type="primary">查看详情</el-link>
            </p>
          </div>
        </div>
      </el-card>
      <el-card header="销售漏斗">
        <div class="flex-column">
          <div
            id="charts04"
            class="flex-1-hidden card-charts"
          ></div>
          <p class="flex-between">
            <span>已连续 <b>10天</b> 未更新线索</span>
            <el-link type="primary">查看详情</el-link>
          </p>
        </div>
      </el-card>
      <el-card header="销售产品达成">
        <div class="flex-column">
          <div class="card-header">
            <p>实际销售金额（万元）</p>
            <p>2000</p>
            <p>月环比 <b>15.9%</b></p>
          </div>
          <div
            id="charts03"
            class="flex-1-hidden card-charts"
          ></div>
          <div>
            <p class="flex-between">
              <span>有 <b>10条</b> 合同状态为审核中，共 <b>500元</b></span>
              <el-link type="primary">查看合同</el-link>
            </p>
            <p class="flex-between">
              <span>有 <b>5期</b> 回款在近期要完成，共 <b>500元</b></span>
              <el-link type="primary">查看回款</el-link>
            </p>
          </div>
        </div>
      </el-card>
      <el-card header="业绩排名">
        <div class="flex h-100">
          <div
            id="charts05"
            class="flex-1-hidden"
          ></div>
          <div class="team-rank">
            <b>团队排名</b>
            <ul class="pt-1 rank-ul">
              <li
                v-for="(item, index) in 10"
                :key="index"
                class="flex-between"
              >
                <span class="index-ball">{{ item }}</span>
                <el-link>张小刚</el-link>
                <span>10000.00</span>
              </li>
            </ul>
          </div>
        </div>
      </el-card>
      <el-card header="日程">
        <div class="flex">
          <el-calendar class="w-50"></el-calendar>
          <ul class="calendar-ul">
            <li
              v-for="(item, index) in 10"
              :key="index"
              class="calendar-li"
            >
              <div></div>
              <div class="flex-column center-center">
                <b>19:18</b>
                <b class="pt-1">20:18</b>
              </div>
              <div class="flex-column center-start">
                <h4>线索跟进</h4>
                <p class="pt-1">测试线索0906|商务谈判</p>
              </div>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: true,
};
</script>
<script setup>
import * as echarts from "echarts";
import { onBeforeUnmount, onMounted } from "vue";
const controller = new AbortController();
const signal = controller.signal;
const data01 = [
  { name: "已回款", value: 200 },
  { name: "未回款", value: 200 },
];
const data02 = [
  { value: 2, name: "ERP电商版1" },
  { value: 2, name: "ERP电商版2" },
  { value: 2, name: "ERP电商版3" },
  { value: 2, name: "ERP电商版4" },
];
const data03_x = [
  "ERP电商版",
  "ERP电商版",
  "ERP企业版",
  "CMP仓库版",
  "CMP商家版",
  "WMS标准版",
  "WMS旗舰版",
];
const data03 = [12, 20, 15, 8, 7, 11, 13];
const data04_label = ["类型一", "类型二", "类型三", "类型四"];
const data04 = [
  { value: 100, name: "类型一" },
  { value: 80, name: "类型二" },
  { value: 60, name: "类型三" },
  { value: 40, name: "类型四" },
];
const data05_target = [
  2000, 3000, 4000, 3500, 4300, 2300, 1900, 800, 900, 1000, 1500, 2100,
];
const data05 = [
  1800, 2000, 1890, 800, 960, 4100, 980, 3200, 5000, 2600, 5200, 2000,
];
onMounted(() => {
  const charts01 = echarts.init(document.querySelector("#charts01"));
  const charts02 = echarts.init(document.querySelector("#charts02"));
  const charts03 = echarts.init(document.querySelector("#charts03"));
  const charts04 = echarts.init(document.querySelector("#charts04"));
  const charts05 = echarts.init(document.querySelector("#charts05"));
  // #region ---------------------------图表1
  const option01 = {
    color: ["#ec808d", "#facd91"],
    title: {
      text: "实际销售金额回款详图：",
      textStyle: {
        color: "#999",
        fontWeight: "normal",
        fontSize: 14,
      },
    },
    series: [
      {
        type: "pie",
        radius: [80, 50],
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}\n{time|{c}元}",
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
        labelLayout: (params) => {
          const isLeft = params.labelRect.x < charts01.getWidth() / 2;
          const points = params.labelLinePoints;
          points[2][0] = isLeft
            ? params.labelRect.x
            : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points,
          };
        },
        data: data01,
      },
    ],
  };
  // #endregion
  // #region ---------------------------------------图表2
  const option02 = {
    color: ["#facd91", "#d7d7d7", "#70b603", "#ec808d"],
    title: {
      text: "实际销售金额回款详图：",
      textStyle: {
        color: "#999",
        fontWeight: "normal",
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}：{d}%",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "60%",
        label: {
          alignTo: "edge",
          formatter: "{name|{b}}\n{time|{c}人}",
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
        labelLayout: (params) => {
          const isLeft = params.labelRect.x < charts02.getWidth() / 2;
          const points = params.labelLinePoints;
          points[2][0] = isLeft
            ? params.labelRect.x
            : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points,
          };
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data: data02,
      },
    ],
  };
  // #endregion
  // #region --------------------------------------------------图表3
  const option03 = {
    title: {
      text: "售出产品详图：",
      textStyle: {
        color: "#999",
        fontWeight: "normal",
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}：{c}套",
    },
    color: ["#ffc328"],
    xAxis: {
      type: "category",
      data: data03_x,
      axisLabel: { interval: 0 },
    },
    yAxis: [
      {
        type: "value",
        name: "单位：套",
        min: 0,
        max: 50,
        interval: 10,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "单位：元",
        min: 0,
        max: 5000,
        interval: 1000,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        data: data03,
        type: "bar",
      },
    ],
  };
  // #endregion
  // #region -----------------------图表4
  const option04 = {
    color: [
      "#5b8ff9", //1
      "#5ad8a6", //4
      "#5d7092", //2
      "#f6bd16", //3
    ],
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c}%",
    },
    legend: {
      data: data04_label,
    },
    series: [
      {
        name: "Funnel",
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "20%",
        maxSize: "60%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: data04,
      },
    ],
  };
  // #endregion
  // #region ------------------------------图表05
  const option05 = {
    color: ["#5ad8a6", "#ffc328", "#1aa7e8"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    legend: {
      data: ["目标", "实际"],
      left: "right",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "单位：万元",
        min: 0,
        max: 6000,
        interval: 1000,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        min: 0,
        max: 60,
        interval: 10,
        axisLabel: {
          formatter: "{value}%",
        },
      },
    ],
    series: [
      {
        name: "目标",
        type: "bar",
        tooltip: {
          valueFormatter: (value) => value + " ml",
        },
        data: data05_target,
      },
      {
        name: "实际",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " ml";
          },
        },
        data: data05,
      },
      {
        name: "实际",
        color: ["#1aa7e8"],
        type: "line",
        yAxisIndex: 0,
        tooltip: {
          valueFormatter: (value) => value,
        },
        data: data05,
      },
    ],
  };
  // #endregion
  // #region -----------------------------------------------ECharts响应式变化
  charts01.setOption(option01);
  charts02.setOption(option02);
  charts03.setOption(option03);
  charts04.setOption(option04);
  charts05.setOption(option05);
  window.addEventListener(
    "resize",
    () => {
      charts01.resize();
      charts02.resize();
      charts03.resize();
      charts04.resize();
      charts05.resize();
    },
    { signal }
  );
  // #endregion
});
onBeforeUnmount(() => {
  controller.abort();
});
</script>
<style>
.card-grid {
  display: grid;
  grid-template: repeat(2, 450px) auto/repeat(6, minmax(210px, 1fr));
  gap: 10px;
  padding-top: 10px;
}
.card-grid > *:nth-child(1) {
  grid-column: 1 / span 2;
}
.card-grid > *:nth-child(2) {
  grid-column: 3 / span 2;
}
.card-grid > *:nth-child(3) {
  grid-column: 5 / span 2;
}
.card-grid > *:nth-child(4) {
  grid-column: 1 / span 3;
}
.card-grid > *:nth-child(5) {
  grid-column: 4 / span 3;
}
.card-grid > *:nth-child(6) {
  grid-column: 1/-1;
}
.card-charts {
  padding: 10px;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-card,
.flex-column {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-card__body,
.flex-1-hidden {
  flex: 1;
  overflow: hidden;
}
p + p {
  margin-top: 7px;
}
.team-rank {
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-left: 50px;
}
.index-ball {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: aliceblue;
  text-align: center;
  line-height: 36px;
  font-size: 20px;
  background-color: #409eff;
}
.rank-ul {
  flex: 1;
  overflow: auto;
  overflow: overlay;
}
li + li {
  margin-top: 10px;
}
.el-calendar__body {
  padding: 0;
}
.calendar-ul {
  max-height: 520px;
  padding: 10px;
  margin-left: 80px;
  overflow: auto;
  overflow: overlay;
}
.calendar-li {
  display: flex;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.calendar-li > div:first-of-type {
  width: 15px;
  border-radius: 5px 0 0 5px;
  background-color: #f56c6c;
}
.calendar-li > div:nth-last-of-type(2) {
  width: 100px;
  padding: 10px;
}
.calendar-li > div:last-of-type {
  width: 350px;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  background-color: #ebedf0;
}
</style>
