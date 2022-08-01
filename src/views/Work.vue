<template>
  <div>
    <el-table
      :data="state.rows"
      row-key="label"
      ref="tabRef"
      @select-all="selAll"
      @select="sel"
      @selection-change="selChg"
      default-expand-all
    >
      <el-table-column type="selection" />
      <el-table-column>
        <template #header>
          <el-checkbox
            @change="chg($event)"
            :indeterminate="state.origin.some(item=>state.select.includes(item))&&!state.origin.every(item=>state.select.includes(item))"
          />
        </template>
        <template #default="{row}">
          <el-checkbox v-model="row.chk" />
        </template>
      </el-table-column>
      <el-table-column
        label="标题"
        prop="label"
      />
    </el-table>
  </div>
</template>
<script setup>
import { computed, reactive, toRaw, ref, watchEffect, nextTick } from "vue";
import response from "@/hook/mod.js";
const state = reactive({
  select: [],
  rows: [],
  response: [],
  origin: [],
});
// #region
state.response = response;
// 
state.rows = computed(() => {
  const target = toRaw(state.response);
  const add = (item) => {
    state.select.includes(item) || state.select.push(item)
    item.children.forEach(el => {
      el.chk.value = true
    })
  }
  const del = (item) => {
    state.select.splice(state.select.includes(el => el.label === item.label), 1)
    item.children.forEach(el => {
      el.chk.value = false
    })
  }
  const fun = (arr) => {
    arr.forEach(item => {
      Array.isArray(item.children) && fun(item.children)
      item.chk = computed({
        get() {
          return state.select.includes(item)
        },
        set(value) {
          value ? add(item) : del(item)
        }
      })
    })
  }
  fun(target)
  return target
});
// origin
state.origin = computed(() => {
  const target = toRaw(state.response)
  const res = []
  const fun = (arr) => {
    arr.forEach(item => {
      Array.isArray(item.children) && fun(item.children)
      res.push(item)
    })
  }
  fun(target)
  return res
})
const chg = (bool) => {
  state.rows.forEach(item => {
    item.chk.value = bool
  })
}
watchEffect(() => {
  const [...i] = state.select
  console.log(i)
})
// #endregion
const tabRef = ref()
const selAll = (selection) => {
  const chk = state.rows[0] && selection.includes(state.rows[0])
  state.origin.forEach(item => {
    tabRef.value.toggleRowSelection(item, chk)
  })
  // console.log(tabRef.value.getSelectionRows())
}
const sel = (selection, row) => {
  const chk = selection.includes(row)
  const fun = (arr) => {
    nextTick(() => {
    })
    arr.forEach(item => {
      Array.isArray(item.children) && fun(item.children)
      tabRef.value.toggleRowSelection(item, chk)
    })
  }
  fun(row.children)
  // console.log(tabRef.value.getSelectionRows())
}
const selChg = (selection) => {
  console.log(selection)
}
</script>
<style lang='scss' scoped>
</style>
