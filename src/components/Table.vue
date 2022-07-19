<template>
  <div class="table">
    <div class="thead">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illo numquam optio debitis perspiciatis! Inventore necessitatibus, officiis id voluptas praesentium illo nemo. Reiciendis unde dolorem fuga repellat sint vel nemo?</div>
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
    <div class="tfooter">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta illo numquam optio debitis perspiciatis! Inventore necessitatibus, officiis id voluptas praesentium illo nemo. Reiciendis unde dolorem fuga repellat sint vel nemo?</div>
      <div>2222</div>
      <div>3333</div>
    </div>
  </div>
</template>
<script lang='ts' setup>
console.log(navigator.userAgent);
</script>
<style lang='scss' scoped>
.table {
  $th-height: 38px;
  $column-num: 3;
  $border-color: #eee;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  @mixin cell {
    padding: 10px;
    border: $border-color solid;
    text-align: center;
    text-overflow: ellipsis;
  }
  .thead,
  .tbody,
  .tfooter {
    @include grid;
    border: $border-color solid;
  }
  .thead {
    border-width: 0 0 1px 1px;
    @-moz-document url-prefix() {
      width: calc(100% - 8px);
    }
    div {
      @include cell;
      height: $th-height;
      border-width: 1px 1px 0 0;
      font-weight: bolder;
      overflow: hidden;
      white-space: nowrap;
      line-height: $th-height - 20px;
    }
  }
  .tbody {
    flex: 1;
    border-width: 0 0 1px 1px;
    overflow: auto;
    overflow: overlay;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    div {
      @include cell;
      border-width: 1px 1px 0 0;
      text-overflow: ellipsis;
      @for $item from 1 through $column-num {
        &:nth-of-type(#{$item}) {
          border-top: 0;
        }
      }
    }
  }
  .tfooter {
    border-width: 0 0 1px 1px;
    @-moz-document url-prefix() {
      width: calc(100% - 8px);
    }
    div {
      @include cell;
      border-width: 1px 1px 0 0;
      @for $item from 1 through $column-num {
        &:nth-of-type(#{$item}) {
          border-top: 0;
        }
      }
    }
  }
}
</style>