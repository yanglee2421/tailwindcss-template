<template>
  <div class="flex-column">
    <el-form
      v-bind="$attrs"
      ref="formRef"
      id="swz-form"
      class="form-item"
      :style="{height:state.height}"
      inline
    >
      <slot name="form-item"></slot>
      <el-form-item class="form-btn">
        <el-button
          @click="submitForm()"
          type="primary"
          icon="Search"
          auto-insert-space
        >查询</el-button>
        <el-button
          @click="formRef.resetFields()"
          icon="Refresh"
          auto-insert-space
        >重置</el-button>
        <el-checkbox v-model="state.cla"></el-checkbox>
      </el-form-item>
    </el-form>
    <div>
      <slot name="tool-bar"> </slot>
    </div>
    <div class="flex-1-hidden pt-1">
      <el-table
        v-bind="$attrs"
        height="100%"
        ref="tableRef"
      >
        <el-table-column
          v-if="Index"
          align="center"
          type="index"
          label="序号"
          width="60"
        />
        <el-table-column
          v-if="Selection"
          align="center"
          type="selection"
        />
        <!-- 表格列 -->
        <slot></slot>
        <!-- el-table原有插槽 -->
        <template #empty>
          <slot name="empty">
            <el-empty />
          </slot>
        </template>
        <template #append>
          <slot name="append"></slot>
        </template>
      </el-table>
    </div>
    <el-pagination
      layout="total,sizes,prev,pager,next,jumper"
      v-bind="$attrs"
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
      :pageSizes="pageSizes"
    >
      <slot name="pagi"></slot>
    </el-pagination>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang='ts' setup>
import { computed, onMounted, reactive, ref, useSlots, watch } from "vue";
/**
 * Props
 * 分页：条数/页的可选项
 * 分页：当前页
 * 分页：当前条数/页
 * 表格是否需要序号列
 * 表格是否需要复选框
 */
interface _props {
  pageSizes?: number[];
  PageIndex: number;
  PageSize: number;
  Index?: boolean;
  Selection?: boolean;
}
const props = withDefaults(defineProps<_props>(), {
  pageSizes: () => [10, 20, 30],
  PageIndex: 0,
  PageSize: 0,
});
/**
 * Emits
 * 提交表单
 * 更新当前页
 * 更新当前条数/页
 */
interface _emit {
  (event: "submit", $event?: unknown): void;
  (event: "update:PageIndex", $event: number): void;
  (event: "update:PageSize", $event: number): void;
}
const emit = defineEmits<_emit>();
/**
 * Data
 * 是否展开表单
 * 表单高度
 * 表单展开时的高度
 * 表单不展开时的高度
 */
const state = reactive({
  cla: false,
  height: "auto",
  showHeight: "",
  defHeight: "",
});
/**
 * Computed
 * 覆写分页的当前页
 * 覆写分页的当前条目/页
 */
const currentPage = computed({
  get() {
    return props.PageIndex;
  },
  set(value) {
    emit("update:PageIndex", value);
  },
});
const pageSize = computed({
  get() {
    return props.PageSize;
  },
  set(value) {
    emit("update:PageSize", value);
  },
});
/**
 * Methods
 * 提交表单
 */
const formRef = ref();
const submitForm = () => {
  formRef.value.validate((vali: boolean) => {
    if (vali) {
      emit("submit", true);
    } else {
      return false;
    }
  });
};
/**
 * Watch
 * 分页变动时刷新表格
 */
watch(
  [() => props.PageIndex, () => props.PageSize],
  ([PageIndex, PageSize], [oldPageIndex, oldPageSize]) => {
    emit("submit", false);
  }
);
watch(
  () => state.cla,
  (newValue) => {
    state.height = newValue ? state.showHeight : state.defHeight;
  }
);
/**
 * 曝露Ref，以向外提供el-组件原有的方法
 */
const tableRef = ref();
defineExpose({ formRef, tableRef });
/**
 * Mounted
 * 获取表单应展示的两个高度
 */
onMounted(() => {
  const forDom = document.querySelector("#swz-form");
  const trDom = document.querySelector("#swz-form .form-btn");
  const forSty = getComputedStyle(forDom!);
  const trSty = getComputedStyle(trDom!);
  state.showHeight = forSty.height;
  let { height, marginBottom, marginTop } = trSty;
  height = parseInt(height) as any;
  marginBottom = parseInt(marginBottom) as any;
  marginTop = parseInt(marginTop) as any;
  state.defHeight = height + marginBottom + marginTop + "px";
  state.height = state.defHeight;
});
</script>
<style lang='scss' scoped>
.form-item {
  transition: 0.3s;
  overflow: hidden;
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  // grid-auto-rows: 0;
}
/* .show {
  grid-auto-rows: auto;
} */
.form-btn {
  justify-self: end;
  grid-row: 1 / span 1;
  grid-column: span 1 / -1;
}
</style>