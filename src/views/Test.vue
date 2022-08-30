<template>
  <div class="h-100">
    <img
      :src="state.src"
      id="qrcode"
    />
    <!--  <fw-table
      :model="formData"
      :data="[{title:'123'},{}]"
      @fw-query="initTable($event)"
      v-model:PageIndex="pagination.PageIndex"
      v-model:PageSize="pagination.PageSize"
      :total="100"
      border
      index
    >
      <template #form>
        1234
        <template></template>
        123456
        <div></div>
        45646
        <el-form-item label="跟进日期：">
          <el-date-picker
            v-model="formData.data"
            type="daterange"
          />
        </el-form-item>
        <el-form-item
          label="通常五个字："
          v-for="item in 4"
          :key="item"
        >
          <el-input />
        </el-form-item>
      </template>
      <template #tool-bar>
        <el-button>新增</el-button>
      </template>
      <el-table-column
        label="标题"
        prop="title"
      />
    </fw-table> -->
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang='ts' setup>
import { onMounted, reactive } from "vue";
import Qrcode from "qrcode";
const state = reactive({
  src: "",
});
onMounted(() => {
  console.log(Qrcode);
  const dom = document.querySelector<HTMLImageElement>("#qrcode")!;
  const res = Qrcode.toDataURL("汉字", {
    // width: 81,
    margin: 1,
    color: {
      light: "#ffff",
      dark: "#0f0f",
    },
    scale: 5,
    small: true,
    /**
     * 二维码版本
     * 纠错级别
     * 屏蔽符号
     * 转日本格式
     */
    version: 4,
    errorCorrectionLevel: "H",
    maskPattern: 7,
    // toSJISFuNC:()=>{}
  });
  console.log(res);
  res.then((res) => {
    console.log(res);
    // dom.innerHTML = res;
    dom.src = res;
  });
  /* res.then((res) => {
    dom?.appendChild(res);
    const url = res.toDataURL();
    console.log(url);
    const a = document.createElement("a");
    a.href = url;
    a.download = "图.png";
    // a.click();
  });
  */
});
const formData = reactive({
  input: "",
  data: [],
});
const pagination = reactive({
  PageIndex: 1,
  PageSize: 10,
});
const initTable = (boolean: boolean) => {
  boolean && Object.assign(pagination, formData);
  console.log("发个请求", boolean, pagination);
};
</script>
<style lang='scss' scoped>
</style>