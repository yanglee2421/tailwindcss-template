<template>
  <div class="p-1">
    <div class="table">
      <div class="thead">
        <div>一</div>
        <div>二</div>
        <div>三</div>
      </div>
      <swz-scroll>
        <div class="tbody">
          <template
            v-for="item in 10"
            :key="item"
          >
            <div>{{ item + "-1" }}</div>
            <div>{{ item + "-2" }}</div>
            <div>{{ item + "-3" }}</div>
          </template>
        </div>
      </swz-scroll>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.thead {
  display: grid;
  grid-template: 50px / repeat(3, 1fr);
  border: blue solid;
  border-width: 0 0 1px 1px;
  > div {
    border: blue solid;
    border-width: 1px 1px 0 0;
    text-align: center;
    line-height: 50px;
  }
}
.swz-scroll {
  height: 300px;
  border: red dashed;
  border-width: 0 0 1px 1px;
}
.tbody {
  display: grid;
  grid-template: 50px / repeat(3, 1fr);
  grid-auto-rows: 50px;
  > div {
    border: red dashed;
    border-width: 1px 1px 0 0;
    text-align: center;
    line-height: 50px;
  }
  @for $i from 0 through 3 {
    > div:nth-child(#{$i}) {
      border-top: 0;
    }
  }
}
</style>
