<template>
  <div
    class="flex-column fw-table-root"
    ref="root"
  >
    <el-form
      v-bind="$attrs"
      v-trans="formState.isShow"
      ref="formRef"
      class="form-item"
      inline
    >
      <slot name="form"></slot>
      <el-form-item class="form-btn relative mr-1">
        <el-button
          @click="emit('fw-queryBtn');submitForm()"
          type="primary"
          icon="Search"
          auto-insert-space
        >查询</el-button>
        <el-button
          @click="resetFn()"
          icon="Refresh"
          auto-insert-space
        >重置</el-button>
        <label
          v-show="showSwitch"
          class="flex center-center ml-1"
        >
          <input
            v-model="formState.isShow"
            type="checkbox"
            class="none"
          />
          <el-icon
            class="trans"
            :class="[{'rotate-180':!formState.isShow},formState.isShow?'text-danger':'text-primary']"
          >
            <ArrowUp />
          </el-icon>
          <span
            class="trans"
            :class="[formState.isShow?'text-danger':'text-primary']"
          >
            {{formState.isShow?"折叠":"展开"}}
          </span>
        </label>
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
          v-if="fwIndex"
          align="center"
          type="index"
          label="序号"
          width="60"
        />
        <el-table-column
          v-if="fwSelection"
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
      :pageSizes="[10,20,30]"
      v-bind="$attrs"
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
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
import {
  computed,
  reactive,
  ref,
  watchEffect,
  watch,
  useSlots,
  onMounted,
  onBeforeMount,
  watchPostEffect,
} from "vue";
/**
 * Props
 * 分页：当前页
 * 分页：当前条数/页
 * 表格是否需要序号列
 * 表格是否需要复选框
 * 表单是否默认展示全部
 */
interface _props {
  PageIndex: number;
  PageSize: number;
  fwIndex?: boolean;
  fwSelection?: boolean;
  fwDefaultSwitch?: boolean;
}
const props = withDefaults(defineProps<_props>(), {
  fwIndex: false,
  fwSelection: false,
  fwDefaultSwitch: true,
});
/**
 * Emits
 * 点击查询按钮时
 * 点击重置按钮时
 * 展开状态发生变化时
 * 点击查询、重置或分页数据发生变化时
 * 更新当前页
 * 更新当前条数/页
 */
interface _emit {
  (event: "fw-queryBtn", $event?: unknown): void;
  (event: "fw-resetBtn", $event?: unknown): void;
  (event: "fw-switch", $event: boolean): void;
  (event: "fw-query", $event: boolean): void;
  (event: "update:PageIndex", $event: number): void;
  (event: "update:PageSize", $event: number): void;
}
const emit = defineEmits<_emit>();
/**
 * 根标签
 * 表单的组件实例
 * 表格的组件实例
 */
const root = ref<HTMLElement>();
const formRef = ref();
const tableRef = ref();
/**
 * 自定义指令实现展开的过渡动画
 * 表单挂载时的状态
 */
const formState = reactive({
  isShow: props.fwDefaultSwitch,
  trans: false,
});
interface _binding {
  value: boolean;
  oldValue: boolean;
  arg: string;
  modifiers: Record<string, boolean>;
}
const vTrans = {
  mounted(formDom: HTMLElement, binding: _binding) {
    const { value } = binding;
    const btnDom = formDom.querySelector<HTMLElement>(
      ":scope>.el-form-item:last-child"
    )!;
    // 关闭的高度
    const { marginTop, marginBottom } = getComputedStyle(btnDom);
    const hiddenHeight =
      btnDom.offsetHeight +
      parseFloat(marginTop) +
      parseFloat(marginBottom) +
      "px";
    // 初始状态
    formDom.style.height = value ? "" : hiddenHeight;
    value || formDom.classList.add("trans");
  },
  updated(formDom: HTMLElement, binding: _binding) {
    const { value, oldValue } = binding;
    if (value !== oldValue) {
      const btnDom = formDom.querySelector<HTMLElement>(
        ":scope>.el-form-item:last-child"
      )!;
      // 展开的高度和关闭的高度
      const showHeight = formDom.scrollHeight + "px";
      const { marginTop, marginBottom } = getComputedStyle(btnDom);
      const hiddenHeight =
        btnDom.offsetHeight +
        parseFloat(marginTop) +
        parseFloat(marginBottom) +
        "px";
      //播放前
      formDom.style.height = formDom.offsetHeight + "px";
      formDom.classList.add("trans");
      //播放
      setTimeout(() => {
        formDom.style.height = value ? showHeight : hiddenHeight;
      }, 0);
      //播放后
      value &&
        setTimeout(() => {
          formDom.classList.remove("trans");
          formDom.style.height = "";
        }, 301);
    }
  },
};
watch(
  () => formState.isShow,
  (newVal) => {
    emit("fw-switch", newVal);
  }
);
/**
 * 分页
 * 覆写分页的currentPage
 * 覆写分页的pageSize
 * 分页变动时自动刷新表格
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
watchEffect(() => {
  const { PageIndex, PageSize } = props;
  (PageIndex && PageSize) || console.log();
  emit("fw-query", false);
});
/**
 * 自动选择是否显示展开按钮
 * viewWidth：视口宽
 * 根据rootArr得出count（有效节点数）
 * 根据viewWidth和count计算出是否展示按钮
 * 根据viewWidth改变form的列数
 * window的resize事件处理viewWidth
 */
const slots = useSlots();
const switchState = reactive({
  viewWidth: 0,
});
const showSwitch = computed(() => {
  const rootArr = slots.form?.();
  let count = 0;
  rootArr?.forEach((item) => {
    if (typeof item.type !== "symbol") {
      item.type !== "template" && count++;
    } else {
      const target = item.children;
      const isArray = Array.isArray(target);
      isArray && (count += (target as unknown[]).length);
      typeof target === "string" && target.trim() && count++;
    }
  });
  if (switchState.viewWidth >= 1920) {
    return count > 5;
  } else if (switchState.viewWidth >= 1600) {
    return count > 4;
  } else {
    return count > 3;
  }
});
watchPostEffect(() => {
  const { viewWidth } = switchState;
  const rootDom = root.value!;
  const dom = rootDom.querySelector<HTMLElement>(":scope>form:first-child")!;
  if (viewWidth >= 1920) {
    dom.style.gridTemplate = "auto / repeat(6, minmax(320px, 1fr))";
  } else if (switchState.viewWidth >= 1600) {
    dom.style.gridTemplate = "auto / repeat(5, minmax(320px, 1fr))";
  } else {
    dom.style.gridTemplate = "";
  }
});
// 视口变动时，viewWidth变动
const resizeFn = () => {
  const rootDom = root.value!;
  const dom = rootDom.querySelector<HTMLElement>(":scope>form:first-child")!;
  switchState.viewWidth = dom.clientWidth;
};
onMounted(() => {
  resizeFn();
  window.addEventListener("resize", resizeFn);
});
onBeforeMount(() => {
  window.removeEventListener("resize", resizeFn);
});
/**
 * 查询按钮
 * 重置按钮
 * 向外曝露form和table的组件实例以提供方法
 */
const submitForm = () => {
  formRef.value.validate((vali: boolean) => {
    if (vali) {
      emit("fw-query", true);
    } else {
      return false;
    }
  });
};
const resetFn = () => {
  emit("fw-resetBtn");
  formRef.value.resetFields();
  const oldPageIndex = props.PageIndex;
  emit("update:PageIndex", 1);
  oldPageIndex === 1 && emit("fw-query", true);
};
defineExpose({ formRef, tableRef });
</script>
<style lang='scss' scoped>
.form-item {
  display: grid;
  grid-template: auto / repeat(4, minmax(320px, 1fr));
  overflow: hidden;
}
.form-btn {
  grid-row: 1 / span 1;
  grid-column: span 1 / -1;
  justify-self: end;
}
.trans {
  transition: 0.3s;
  overflow: hidden;
}
.rotate-180 {
  transform: rotate(180deg);
}
.fw-table-root {
  min-width: 1280px;
}
</style>