<script lang="ts" setup>
import { ElMessage, UploadProps } from "element-plus";
import { intf_uploadimage } from "@/api";
import { computed } from "vue";

// Props
interface Props {
  modelValue?: string;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});
const imgSrc = computed(() => {
  if (!props.modelValue) return;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return baseUrl + props.modelValue;
});

// Emits
interface Emits {
  (evt: "update:modelValue", $evt: string): void;
}
const emit = defineEmits<Emits>();

const handleUpload: UploadProps["httpRequest"] = async (ops) => {
  console.log(ops);
  try {
    const { PATH } = await intf_uploadimage({
      imgfile: ops.file,
      card: "360111198912280969",
      type: 1,
    });
    console.log(PATH);
    emit("update:modelValue", PATH);
  } catch (err: any) {
    ElMessage.error(err.message);
  }
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <el-upload
    :http-request="handleUpload"
    accept="image/*"
    :show-file-list="false"
    drag
  >
    <el-image
      v-if="modelValue"
      :src="imgSrc"
    ></el-image>
    <el-icon v-else><Plus /></el-icon>
  </el-upload>
</template>

<style lang="scss" scoped></style>
