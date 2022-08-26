<template>
  <div>
    <el-tree
      :data="tree"
      node-key="id"
      :default-expanded-keys="state.defExpKey"
      @node-expand="expFn"
      @node-collapse="collFn"
    >
      <template #default="{data}">
        <div class="flex between-center flex-1">
          <p>{{data.label}}</p>
          <div>
            <el-link
              @click="add(data)"
              type="primary"
              class="mr-1"
            >Add</el-link>
            <el-link
              @click="del(data)"
              type="danger"
            >Delete</el-link>
          </div>
        </div>
      </template>
    </el-tree>
  </div>
</template>
<script lang='ts' setup>
import { computed, reactive, toRaw } from "vue";
// #region
const treeData = reactive([
  {
    id: 1,
    label: "Level one 1",
  },
  {
    id: 4,
    label: "Level two 1-1",
    parentId: 1,
  },
  {
    id: 9,
    label: "Level three 1-1-1",
    parentId: 4,
  },
  {
    id: 10,
    label: "Level three 1-1-2",
    parentId: 4,
  },
  {
    id: 2,
    label: "Level one 2",
  },
  {
    id: 5,
    label: "Level two 2-1",
    parentId: 2,
  },
  {
    id: 6,
    label: "Level two 2-2",
    parentId: 2,
  },
  {
    id: 3,
    label: "Level one 3",
  },
  {
    id: 7,
    label: "Level two 3-1",
    parentId: 3,
  },
  {
    id: 8,
    label: "Level two 3-2",
    parentId: 3,
  },
]);
// #endregion
const tree = computed(() => {
  const target = [...treeData];
  const arr = toRaw(target);
  return arr
    .map((item: Record<string, unknown>) => {
      item.children = arr.filter((el) => el.parentId === item.id);
      return item;
    })
    .filter((e) => !e.parentId);
});
const add = (data: Record<string, unknown>) => {
  const parentId = data.id as number;
  const res = { id: 999, label: "新加的", parentId };
  treeData.push(res);
};
const del = (data: Record<string, unknown>) => {
  const index = treeData.findIndex((item) => item.id === data.id);
  treeData.splice(index, 1);
};
const state = reactive<{ defExpKey: string[] }>({
  defExpKey: [],
});
const expFn = (data: Record<string, unknown>) => {
  state.defExpKey.push(data.id as string);
};
const collFn = (data: Record<string, unknown>) => {
  const index = state.defExpKey.indexOf(data.id as string);
  state.defExpKey.splice(index, 1);
};
</script>
<style lang='scss' scoped>
</style>