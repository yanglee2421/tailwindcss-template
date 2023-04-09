<script lang="ts" setup>
import { TinymceEditor } from "@/component";
import { inject, reactive } from "vue";
const res = inject<any>("gpt-res");
const form = reactive({
  Title: "",
  Keywords: [] as string[],
  Description: "",
});
</script>

<template>
  <el-drawer
    title="Edit"
    direction="ttb"
    size="100%"
    append-to-body
  >
    <el-form
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
          v-model="form.Title"
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
          <tinymce-editor v-model="form.Description" />
        </div>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
