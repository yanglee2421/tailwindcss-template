<template>
  <div class="box">
    <slot></slot>
    <div class="flex start-center">
      <el-checkbox v-model="state.showCode">显示源代码</el-checkbox>
      <el-link
        @click="copyFn"
        type="success"
        class="ml-1"
      >复制源代码</el-link>
    </div>
    <swz-vis v-model="state.showCode">
      <code>
        <pre class="bgc-dark-fill p-1">{{state.code}}</pre>
      </code>
    </swz-vis>
    <p
      v-show="state.showCode"
      @click="state.showCode=false"
      class="p-1 sticky flex center-center text-info"
    >
      <el-icon>
        <CaretTop />
      </el-icon>
      <span>隐藏源代码</span>
    </p>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";
import request from "@/api/request";
import { ElMessage } from "element-plus";
const state = reactive({
  code: "",
  showCode: false,
});
request<string>({
  method: "post",
  url: "/vueFile",
  params: { name: 77 },
  data: {
    fileName: "test",
  },
}).then((res) => {
  state.code = res;
});
const copyFn = () => {
  navigator.clipboard
    .readText()
    .then((res) => {
      console.log(res, "11");
    })
    .catch((err) => {
      console.log(err, "err");
    });
  navigator.clipboard
    .writeText(state.code)
    .then((res) => {
      ElMessage({
        type: "success",
        message: "复制成功",
      });
    })
    .catch((err) => {
      ElMessage({
        type: "error",
        message: "复制失败",
      });
    });
};
</script>
<style lang='scss' scoped>
.box {
  max-height: 100%;
  border: 1px gray solid;
  margin-bottom: 10px;
}
.sticky {
  bottom: 0;
  border-top: 1px gray solid;
  background-color: #fff;
  &:hover {
    color: $primary;
  }
}
pre {
  font-family: Consolas, "Courier New", monospace;
  font-size: 20px;
  line-height: 24px;
}
</style>