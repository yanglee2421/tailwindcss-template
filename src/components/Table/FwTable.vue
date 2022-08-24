<template>
  <div class="flex-column">
    <el-form
      v-bind="$attrs"
      ref="formRef"
      class="form-item"
      :class="[state.formClass,state.trans?'trans':'']"
      inline
    >
      <slot name="form-item"></slot>
      <el-form-item
        class="form-btn relative mr-1"
        :class="state.btnClass"
      >
        <el-button
          @click="emit('QueryBtn');submitForm()"
          type="primary"
          icon="Search"
          auto-insert-space
        >查询</el-button>
        <el-button
          @click="emit('ResetBtn');formRef.resetFields();emit('Query',true)"
          icon="Refresh"
          auto-insert-space
        >重置</el-button>
        <label
          v-if="!NoColl"
          class="flex center-center ml-1"
        >
          <input
            v-model="state.isShow"
            type="checkbox"
            class="none"
          />
          <el-icon
            class="text-primary trans"
            :class="{'rotate-180':!state.isShow,}"
          >
            <ArrowUp />
          </el-icon>
          <span
            v-if="state.isShow"
            class="text-primary"
          >折叠
          </span>
          <span
            v-else
            class="text-primary"
          >
            展开
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
import { computed, reactive, ref, watchEffect, watch, onMounted } from "vue";
/**
 * Props
 * 分页：当前页
 * 分页：当前条数/页
 * 表格是否需要序号列
 * 表格是否需要复选框
 * 是否需要展开按钮
 * 表单是否默认展示全部
 */
interface _props {
  PageIndex: number;
  PageSize: number;
  Index?: boolean;
  Selection?: boolean;
  NoColl?: boolean;
  DefaultIsColl?: boolean;
}
const props = withDefaults(defineProps<_props>(), {
  Index: false,
  Selection: false,
  NoColl: false,
  DefaultIsColl: false,
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
  (event: "QueryBtn", $event?: unknown): void;
  (event: "ResetBtn", $event?: unknown): void;
  (event: "CollChg", $event: boolean): void;
  (event: "Query", $event?: unknown): void;
  (event: "update:PageIndex", $event: number): void;
  (event: "update:PageSize", $event: number): void;
}
const emit = defineEmits<_emit>();
/**
 * 生成随机class
 * 过渡动画
 * 表单挂载时的状态
 */
const randomClass = () => {
  const arr: string[] = [];
  for (let i = 0; i < 8; i++) {
    const num = Math.floor(Math.random() * 16);
    arr.push(num.toString(16));
  }
  return `data-swz-${arr.join("")}`;
};
const state = reactive({
  isShow: props.DefaultIsColl,
  formClass: randomClass(),
  btnClass: randomClass(),
  trans: false,
});
const switchHeight = () => {
  // 获取dom
  const formDom = document.querySelector<HTMLElement>(`.${state.formClass}`)!;
  const btnDom = document.querySelector<HTMLElement>(`.${state.btnClass}`)!;
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
  state.trans = true;
  //播放
  setTimeout(() => {
    formDom.style.height = state.isShow ? showHeight : hiddenHeight;
  }, 0);
  //播放后
  state.isShow &&
    setTimeout(() => {
      state.trans = false;
      formDom.style.height = "auto";
    }, 301);
};
watch(
  () => state.isShow,
  (newVal) => {
    switchHeight();
    emit("CollChg", newVal);
  }
);
onMounted(() => {
  // 获取dom
  const formDom = document.querySelector<HTMLElement>(`.${state.formClass}`)!;
  const btnDom = document.querySelector<HTMLElement>(`.${state.btnClass}`)!;
  // 展开的高度和关闭的高度
  const showHeight = formDom.scrollHeight + "px";
  const { marginTop, marginBottom } = getComputedStyle(btnDom);
  const hiddenHeight =
    btnDom.offsetHeight +
    parseFloat(marginTop) +
    parseFloat(marginBottom) +
    "px";
  // 初始状态
  formDom.style.height = state.isShow ? showHeight : hiddenHeight;
});
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
  emit("Query", false);
});
/**
 * 查询方法
 * 向外曝露form和table的组件实例以提供方法
 */
const formRef = ref();
const submitForm = () => {
  formRef.value.validate((vali: boolean) => {
    if (vali) {
      emit("Query", true);
    } else {
      return false;
    }
  });
};
const tableRef = ref();
defineExpose({ formRef, tableRef });
</script>
<style lang='scss' scoped>
.form-item {
  overflow: hidden;
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  @media (min-width: 1400px) and (max-width: 1799px) {
    grid-template: auto / repeat(5, 1fr);
  }
  @media (min-width: 1800px) {
    grid-template: auto / repeat(6, 1fr);
  }
}
.form-btn {
  grid-row: 1 / span 1;
  grid-column: span 1 / -1;
  justify-self: end;
}
.trans {
  transition: 0.3s;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>