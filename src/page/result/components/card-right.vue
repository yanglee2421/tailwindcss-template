<script lang="ts" setup>
import { reactive } from "vue";
import DrawerEdit from "./drawer-edit.vue";

const state = reactive({
  showEdit: true,
});
</script>

<template>
  <drawer-edit v-model="state.showEdit" />
  <el-card>
    <template #header>
      <div class="card-header">
        <span>1111</span>
        <el-link type="primary">Edit</el-link>
      </div>
    </template>
    <el-descriptions>
      <el-descriptions-item label="Title">
        <h2>this is title</h2>
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
