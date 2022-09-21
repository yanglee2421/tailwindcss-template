<template>
  <div
    ref="root"
    class="flex-column"
  >
    <el-form
      v-vis="formSta.vis"
      v-resize
      v-bind="$attrs"
      :ref="(ref) => (formSta.ref = ref)"
      class="form-top"
    >
      <slot name="form">这个插槽中只应该是多个el-form-item</slot>
      <el-form-item class="form-item-btn">
        <el-button @click="resetFn">重置</el-button>
        <el-button
          @click="submitFn"
          type="primary"
          >查询</el-button
        >
        <coll-tag
          v-if="formSta.showTag"
          v-model="formSta.vis"
          false-value="50px"
        ></coll-tag>
      </el-form-item>
    </el-form>
    <div class="pb-1">
      <slot name="btn-bar"></slot>
    </div>
    <div class="flex-1-hidden">
      <el-table
        v-bind="$attrs"
        :ref="(ref) => (tableSta.ref = ref)"
        height="100%"
      >
        <slot></slot>
        <template #empty>
          <slot name="empty">
            <el-empty></el-empty>
          </slot>
        </template>
      </el-table>
    </div>
    <el-pagination
      layout="total,sizes,prev,pager,next,jumper"
      :total="100"
      :page-sizes="[20, 30, 50]"
      v-bind="$attrs"
      v-model:currentPage="pagiSta.currentPage"
      v-model:pageSize="pagiSta.pageSize"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { computed, Directive, ref, reactive, watch, ComputedRef } from "vue";
import { CollTag } from "./component";
// #region ----------------------------------------------------------------Props
interface _props {
  PageIndex: number;
  PageSize: number;
}
const props = withDefaults(defineProps<_props>(), {
  PageIndex: 1,
});
// #endregion
// #region ----------------------------------------------------Emit
interface _emit {
  (event: "update:PageIndex", $event: number): void;
  (event: "update:PageSize", $event: number): void;
  (event: "fw-initTable", $event: boolean): void;
}
const emit = defineEmits<_emit>();
// #endregion
// #region --------------------------------------------------------表单状态
interface _formSta {
  ref: any;
  vis: string | true;
  width: number;
  controller: AbortController;
  showTag: ComputedRef<boolean>;
}
const root = ref<HTMLElement>();
const getItemNum = () => {
  const rootDom = root.value;
  const formDom = rootDom?.querySelector(".el-form");
  const length = formDom?.querySelectorAll(":scope>div").length;
  return length ?? 0;
};
const formSta = reactive<_formSta>({
  ref: null,
  vis: true,
  width: 0,
  controller: new AbortController(),
  showTag: computed(() => {
    const width = formSta.width;
    const length = getItemNum();
    if (width > 1500) {
      return length > 5;
    } else if (width > 1000) {
      return length > 4;
    } else {
      return length > 4;
    }
  }),
});
const resetFn = () => {
  formSta.ref?.resetFields();
  emit("fw-initTable", true);
};
const submitFn = () => {
  formSta.ref?.validate((vali: boolean) => {
    if (vali) {
      emit("fw-initTable", true);
    } else {
      return false;
    }
  });
};
watch(
  () => formSta.width,
  (width) => {
    const length = getItemNum();
    if (width > 1500) {
      return length > 5;
    } else if (width > 1000) {
      return length > 4;
    } else {
      return length > 4;
    }
  }
);
const vResize: Directive<HTMLElement> = {
  mounted(el) {
    const signal = formSta.controller.signal;
    window.addEventListener(
      "resize",
      () => {
        formSta.width = el.clientWidth;
      },
      { signal }
    );
  },
  beforeUnmount(el) {
    formSta.controller.abort();
  },
};
// #endregion
// #region -------------------------------------------------------------表格状态
interface _tableSta {
  ref: any;
}
const tableSta = reactive<_tableSta>({
  ref: null,
});
// #endregion
// #region -------------------------------------------------------------分页状态
const pagiSta = reactive({
  currentPage: computed({
    get() {
      return props.PageIndex;
    },
    set(value) {
      emit("update:PageIndex", value);
    },
  }),
  pageSize: computed({
    get() {
      return props.PageSize;
    },
    set(value) {
      emit("update:PageSize", value);
    },
  }),
});
watch([() => props.PageIndex, () => props.PageSize], () => {
  emit("fw-initTable", false);
});
// #endregion
defineExpose({
  formRef: formSta.ref,
  tableRef: tableSta.ref,
});
</script>
<style lang="scss" scoped>
.form-top {
  display: grid;
  grid-template: auto/repeat(4, minmax(auto, 1fr));
  gap: 10px;
}
.form-item-btn {
  grid-row: 1 / span 1;
  grid-column: span 1/-1;
  justify-self: end;
}
</style>
