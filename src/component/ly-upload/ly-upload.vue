<script lang="ts" setup>
import { UploadProps } from "element-plus";
import { intf_uploadimage } from "@/api";

interface Props {
  modelValue?: string;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const handleUpload: UploadProps["httpRequest"] = (ops) => {
  console.log(ops);
  return intf_uploadimage({
    imgfile: ops.file,
    card: "360111198912280969",
    type: 1,
  });
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
    <el-image v-if="modelValue"></el-image>
    <el-icon v-else><Plus /></el-icon>
  </el-upload>
</template>

<style lang="scss" scoped></style>
