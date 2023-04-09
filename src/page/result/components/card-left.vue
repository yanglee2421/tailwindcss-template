<script lang="ts" setup>
import { computed, inject, ref } from "vue";
import ItemLanguage from "./item-language.vue";
import ItemGenerate from "./item-generate.vue";
import ItemWords from "./item-words.vue";
import ItemDescription from "./item-description.vue";
import { FormInstance } from "element-plus";

const state = inject<any>("gpt-state");
const form = inject("gpt-form");
const res = inject<any>("gpt-res");

const items = computed(() => {
  const { tab, isProd } = state;
  switch (tab) {
    case 1:
      return isProd
        ? [ItemLanguage, ItemGenerate]
        : [ItemDescription, ItemLanguage, ItemGenerate];
    case 2:
      return isProd
        ? [ItemLanguage, ItemWords]
        : [ItemDescription, ItemLanguage, ItemWords];
    case 3:
      return isProd ? [ItemLanguage] : [ItemDescription, ItemLanguage];
    default:
      return [];
  }
});

const formRef = ref<FormInstance>();
const handleSubmit = () => {
  formRef.value?.validate(async (isPass) => {
    if (!isPass) return;
    console.log(form);
    res.isLoading = true;
    await toTimeout();
    res.isLoading = false;
    res.isSuccess = true;
    res.data.Title = "title";
    res.data.Keywords = ["ok"];
    res.data.Description = "<h1>hello world</h1>";
  });
};

console.log(items.value.map((item) => item.__name));

function toTimeout() {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
}
</script>

<template>
  <el-card>
    <template #header>
      <el-link
        @click="state.isProd = !state.isProd"
        type="primary"
        >xxx</el-link
      >
    </template>
    <el-form
      :ref="(e:FormInstance) => (formRef = e)"
      :model="form"
      label-width="6rem"
      label-position="left"
    >
      <component
        v-for="item in items"
        :key="item.__name"
        :is="item"
      />
      <div class="btns-box">
        <el-button
          @click="handleSubmit"
          :loading="res.isLoading"
          type="primary"
          >Let`s write</el-button
        >
        <el-link>feedback</el-link>
      </div>
    </el-form>
  </el-card>
</template>

<style lang="scss" scoped>
.btns-box {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
