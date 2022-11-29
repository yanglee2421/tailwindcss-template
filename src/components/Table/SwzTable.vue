<template>
  <div class="flex-column">
    <div v-vis="formSta.vis">
      <el-form
        v-bind="$attrs"
        v-resize
        :ref="(ref:any) => (formSta.ref = ref)"
        :style="{
          gridTemplateColumns: `repeat(${columns}, minmax(auto, 1fr))`,
        }"
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
            v-if="needColl"
            v-model="formSta.vis"
            false-value="50px"
          ></coll-tag>
        </el-form-item>
      </el-form>
    </div>
    <div class="pb-1">
      <slot name="btn-bar"></slot>
    </div>
    <div class="flex-1-hidden">
      <el-table
        v-bind="$attrs"
        :ref="(ref:any) => (tableSta.ref = ref)"
        height="100%"
      >
        <el-table-column
          v-if="fwSelection"
          type="selection"
          align="center"
          fixed
        />
        <el-table-column
          v-if="fwIndex"
          label="序号"
          type="index"
          align="center"
          width="60px"
          fixed
        />
        <slot></slot>
        <template #empty>
          <slot name="empty">
            <el-empty></el-empty>
          </slot>
        </template>
        <template #append>
          <slot name="append"></slot>
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
import { computed, reactive, watch, ref, Directive, onMounted } from "vue";
import { CollTag } from "./component";
import { useClientWidth } from "@/hook";
// #region ----------------------------------------------------------------Props
interface _props {
  PageIndex: number;
  PageSize: number;
  fwIndex?: boolean;
  fwSelection?: boolean;
}
const props = withDefaults(defineProps<_props>(), {
  PageIndex: 1,
  PageSize: 20,
  fwIndex: false,
  fwSelection: false,
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
  vis: string | boolean;
}
const formSta = reactive<_formSta>({
  ref: null,
  vis: true,
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
const itemCount = ref(0);
const { needColl, state, columns } = useClientWidth(itemCount);
const controller = new AbortController();
const signal = controller.signal;
const vResize: Directive<HTMLElement> = {
  mounted(el) {
    state.clientWidth = el.clientWidth;
    itemCount.value = el.querySelectorAll(":scope > div").length;
    window.addEventListener(
      "resize",
      () => {
        state.clientWidth = el.clientWidth;
      },
      { signal }
    );
  },
  beforeUnmount() {
    controller.abort();
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
onMounted(() => {
  emit("fw-initTable", true);
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
  grid-template-rows: auto;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  gap: 10px;
}
.form-item-btn {
  grid-row: 1 / span 1;
  grid-column: span 1 / -1;
  justify-self: end;
}
</style>
