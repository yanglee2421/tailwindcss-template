<script lang="ts" setup>
import { inject } from "vue";
import { FormItemProps } from "element-plus";

const rules: FormItemProps["rules"] = [
  {
    trigger: "blur",
    validator(rule, value: string[] | undefined, callback) {
      if (!value?.length) callback(new Error("at least"));
      callback();
    },
  },
];

const form = inject<any>("gpt-form");
</script>

<template>
  <el-form-item
    :rules="rules"
    label="Generate"
    prop="Generate"
  >
    <section>
      <el-checkbox-group v-model="form.Generate">
        <el-checkbox label="Title" />
        <el-checkbox label="Description" />
        <el-checkbox label="Keywords" />
      </el-checkbox-group>
      <div
        v-if="form.Generate?.includes?.(`Title`)"
        class="input-number"
      >
        <label>Title</label>
        <el-input-number
          v-model="form.TitleLimit"
          :min="1"
          :max="100"
          controls-position="right"
          placeholder="20"
        ></el-input-number>
      </div>
      <div
        v-if="form.Generate?.includes?.(`Description`)"
        class="input-number"
      >
        <label>Description</label>
        <el-input-number
          v-model="form.DescriptionLimit"
          :min="1"
          :max="3000"
          controls-position="right"
          placeholder="300"
        ></el-input-number>
      </div>
    </section>
  </el-form-item>
</template>

<style lang="scss" scoped>
.input-number {
  > *:nth-child(2) {
    margin-left: 2rem;
  }
  + .input-number {
    margin-top: 0.5rem;
  }
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
