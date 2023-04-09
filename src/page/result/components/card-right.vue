<script lang="ts" setup>
import { inject, reactive } from "vue";
import DrawerEdit from "./drawer-edit.vue";

const res = inject<any>("gpt-res");

const state = reactive({
  showEdit: false,
});
</script>

<template>
  <drawer-edit v-model="state.showEdit" />
  <el-card>
    <template #header>
      <div class="card-header">
        <span>1111</span>
        <el-link
          @click="state.showEdit = true"
          type="primary"
          >Edit</el-link
        >
      </div>
    </template>
    <el-descriptions :column="1">
      <el-descriptions-item label="Title">
        <h2>{{ res.data.Title }}</h2>
      </el-descriptions-item>
      <el-descriptions-item label="Keywords">
        <!-- <p>{{ res.data.Keywords }}</p> -->
      </el-descriptions-item>
      <el-descriptions-item label="Description">
        <article v-html="res.data.Description"></article>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
