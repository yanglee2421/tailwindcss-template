<script lang="ts" setup>
import { provide, reactive } from "vue";
import { CardLeft, CardRight } from "./components";
import type { Product, formData } from "./type";

// tab & isProd
const state = reactive({
  isProd: true,
  tab: 1,
});
provide("gpt-state", state);

// left-card form state
const form = reactive<formData>({
  Generate: ["Title", "Keywords", "Description"],
  Product: {
    Title: "title",
    Keywords: ["keyword"],
    Description: "<h1>this is description</h1>",
  },
});
provide("gpt-form", form);

// right-card request state
const res = reactive({
  isLoading: false,
  isSuccess: false,
  data: {
    Title: "这是标题",
    Keywords: [],
    Description: "<p>这是描述</p>",
  },
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
      <card-right v-if="res.isSuccess" />
      <p v-else-if="res.isError"></p>
      <p
        v-else
        v-loading="res.isLoading"
      >
        hello world
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 1rem;
}
.box {
  display: grid;
  grid-template-columns: 31rem minmax(31rem, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
