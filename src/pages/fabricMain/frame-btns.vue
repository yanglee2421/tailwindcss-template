<script lang="ts" setup>
// Store Imports
import { useStoreFrame } from "@/hooks";

// Vue Imports
import * as Vue from "vue";

// Utils Imports
import { timeout } from "@/utils";

const props = withDefaults(defineProps<Props>(), {});
interface Props {
  showConfirm: boolean;
}

const emit = defineEmits<Emits>();
interface Emits {
  (evt: "upload", $evt: Event): void;
  (evt: "confirm"): void;
  (evt: "back"): void;
}

const store = useStoreFrame();
const { state } = store;

const showNext = Vue.computed(() => {
  return [!props.showConfirm, state.result, state.tab < 2].every(Boolean);
});
const showUploadBtn = Vue.computed(() => {
  return [!props.showConfirm, state.tab === 1].every(Boolean);
});
const showDownloadBtn = Vue.computed(() => {
  return state.tab === 2;
});
const showBack = Vue.computed(() => {
  return [state.tab === 1, state.upload, !props.showConfirm].every(Boolean);
});

const handleNext = () => {
  if (state.tab < 2) {
    state.tab++;
  }
};

// ** Upload
const handleFileChange = (evt: Event) => {
  emit("upload", evt);
};

// ** Download
const handleDownload = async () => {
  state.loading = true;

  const a = document.createElement("a");
  a.href = state.result;
  a.download = `${Date.now()}.png`;
  a.click();

  await timeout(500);

  state.loading = false;
};

defineOptions({ inheritAttrs: false });
</script>

<template>
  <el-button
    v-if="showUploadBtn"
    color="#9344ec"
    round
    tag="label"
    class="bg-[#9344ec]"
  >
    <template #icon>
      <icon-camera class="w-4"></icon-camera>
    </template>
    <input
      @change="handleFileChange"
      type="file"
      hidden
      :value="''"
    />
    Upload a photo</el-button
  >
  <el-button
    v-if="showBack"
    @click="emit('back')"
    color="#9344ec"
    round
    tag="label"
    class="bg-[#9344ec]"
    >Back</el-button
  >
  <el-button
    v-if="showConfirm"
    @click="emit('confirm')"
    :loading="state.loading"
    round
    tag="label"
    color="#9344ec"
    class="bg-[#9344ec]"
    >Confirm</el-button
  >

  <!-- Download -->
  <el-button
    v-if="showDownloadBtn"
    @click="handleDownload"
    :loading="state.loading"
    round
    tag="label"
    color="#9344ec"
    class="bg-[#9344ec]"
  >
    <template #icon>
      <icon-download></icon-download>
    </template>
    Download a Photo
  </el-button>

  <!-- Next -->
  <el-button
    v-if="showNext"
    @click="handleNext"
    round
    tag="label"
    color="#9344ec"
    class="bg-[#9344ec]"
    >Next ></el-button
  >
</template>

<style lang="scss" scoped></style>
