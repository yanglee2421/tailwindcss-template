import * as echarts from "echarts";
export default (dom: HTMLElement, data: unknown[] = []) => {
  const charts = echarts.getInstanceByDom(dom) || echarts.init(dom);
  const option = {};
  charts.setOption(option);
  return charts;
};
