<script lang="ts" setup>
import { provide, reactive } from "vue";
import { CardLeft, CardRight } from "./components";
const form = reactive({});
provide("gpt-form", form);

const state = reactive({
  isProd: true,
  tab: 1,
});
provide("gpt-state", state);

const res = reactive({
  isSuccess: false,
  data: null,
  isError: false,
  error: null,
});
provide("gpt-res", res);
</script>

<template>
  <div class="page">
    <el-radio-group
      v-model="state.tab"
      size="large"
    >
      <el-radio-button :label="1">Product Description</el-radio-button>
      <el-radio-button :label="2">SEO Article</el-radio-button>
      <el-radio-button :label="3">GPT Translate</el-radio-button>
    </el-radio-group>
    <div class="box">
      <card-left />
      <card-right />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 1rem;
}
.box {
  display: grid;
  grid-template-columns: repeat(2, minmax(31rem, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
