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
        <div>{{index+"-1"}}</div>
        <div>{{index+"-2"}}</div>
        <div>{{index+"-3"}}</div>
      </template>
    </div>
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
.table {
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
    grid-template: auto/repeat(3, 1fr);
  }
  .thead {
    @include grid;
    $height: 38px;
    width: 500px;
    height: $height;
    border: gray solid;
    border-width: 0 0 1px 1px;
    div {
      border: gray solid;
      border-width: 1px 1px 0 0;
      text-align: center;
      line-height: $height;
    }
  }
  .tbody {
    @include grid;
    width: 500px;
    height: 300px;
    border: gray solid;
    border-width: 0 0 1px 1px;
    overflow: auto;
    overflow: overlay;
    div {
      padding: 10px;
      border: gray solid;
      border-width: 1px 1px 0 0;
      text-align: center;
      @for $item from 1 through 3 {
        &:nth-of-type(#{$item}) {
          border-top: 0;
        }
      }
    }
  }
}
</style>