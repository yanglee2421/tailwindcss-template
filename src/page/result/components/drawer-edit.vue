<script lang="ts" setup>
import { TinymceEditor } from "@/component";
import { FormInstance } from "element-plus";
import { computed, inject, reactive, ref, watchEffect } from "vue";
import type { Result, Product } from "../type";

// global res
const res = inject<Result>("gpt-res")!;

// props & emit
interface Props {
  modelValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {});

interface Emit {
  (evt: "update:modelValue", $evt: boolean): void;
}
const emit = defineEmits<Emit>();

const showDrawer = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

// form element
const form = reactive<Product>({
  Title: "",
  Keywords: [],
  Description: "",
});

const formRef = ref<FormInstance>();
const handleSubmit = () => {
  formRef.value?.validate((isPass) => {
    if (!isPass) return;
    Object.assign(res.data, form);
    emit("update:modelValue", false);
  });
};
const handleReset = () => {
  formRef.value?.resetFields();
};

watchEffect(() => {
  const isShow = props.modelValue;
  if (!isShow) return;
  Object.assign(form, res.data);
});
</script>

<template>
  <el-drawer
    v-model="showDrawer"
    direction="ttb"
    size="100%"
    destroy-on-close
  >
    <template #header>
      <div>
        <el-button @click="handleReset">reset</el-button
        ><el-button
          @click="handleSubmit"
          type="primary"
          >submit</el-button
        >
      </div>
    </template>
    <el-form
      :ref="(e) => (formRef = e)"
      :model="form"
      label-width="100px"
      label-position="left"
    >
      <el-form-item
        v-if="true"
        label="Title"
        prop="Title"
      >
        <el-input
          v-model.trim="form.Title"
          maxlength="100"
        ></el-input>
      </el-form-item>
      <el-form-item
        v-if="true"
        label="Keywords"
        prop="Keywords"
      >
      </el-form-item>
      <el-form-item
        v-if="true"
        label="Description"
        prop="Description"
      >
        <div class="flex-1">
          <tinymce-editor v-model.trim="form.Description" />
        </div>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: false };
</script>
