<script lang="ts" setup>
import { TinymceEditor } from "@/component";
import { inject } from "vue";
const res = inject<any>("gpt-res");
</script>

<template>
  <el-drawer>
    <el-form>
      <el-form-item
        v-if="true"
        label="Title"
        prop="Title"
      >
        <el-input maxlength="100"></el-input>
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
        <tinymce-editor />
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped></style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
