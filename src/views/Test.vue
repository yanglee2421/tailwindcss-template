<template>
  <div class="table m-center mt-3">
    <div class="thead">
      <div>111</div>
      <div>2222</div>
      <div>3333</div>
    </div>
    <div class="tbody">
      <template
        v-for="(item,index) in 100"
        :key="index"
      >
        <div>{{item+"-1"}}</div>
        <div>{{item+"-2"}}</div>
        <div>{{item+"-3"}}</div>
      </template>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";

class Person {
  name = "";
  age = 0;
  callName() {
    console.log(this.name);
  }
}
const per = reactive(new Person());
</script>
<style lang='scss' scoped>
.table {
  $table-width: 500px;
  $th-height: 38px;
  $tbody-height: 400px;
  $column-num: 3;
  $border-color: gray;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  @mixin grid {
    display: grid;
    grid-template: auto/repeat($column-num, 1fr);
  }
  .thead {
    @include grid;
    width: $table-width;
    height: $th-height;
    border: $border-color solid;
    border-width: 0 0 1px 1px;
    div {
      border: $border-color solid;
      border-width: 1px 1px 0 0;
      text-align: center;
      line-height: $th-height;
    }
  }
  .tbody {
    @include grid;
    width: $table-width;
    height: $tbody-height;
    border: $border-color solid;
    border-width: 0 0 1px 1px;
    overflow: auto;
    overflow: overlay;
    div {
      padding: 10px;
      border: $border-color solid;
      border-width: 1px 1px 0 0;
      text-align: center;
      @for $item from 1 through $column-num {
        &:nth-of-type(#{$item}) {
          border-top: 0;
        }
      }
    }
  }
}
</style>