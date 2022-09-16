<template>
  <div>
    <el-link @click="dialogSta.model = true">新增</el-link>
    <el-button @click="dialogSta.model = { isShow: 'edit' }">edit</el-button>
    <swz-dialog
      v-model="dialogSta.model"
      :model="state"
      @swz-save="fun"
      label-width="100px"
    >
      <el-form-item
        label="输入框"
        prop="isShow"
      >
        <swz-input-num v-model="state.isShow"></swz-input-num>
      </el-form-item>
    </swz-dialog>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  isShow: "",
});
interface _dialogSta {
  model: boolean | Record<string, unknown>;
}
const dialogSta = reactive<_dialogSta>({
  model: false,
});
const fun = (close: Function) => {
  setTimeout(() => {
    close();
  }, 3000);
};
</script>
<style lang="scss" scoped></style>
