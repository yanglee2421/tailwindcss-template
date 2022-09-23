<template>
  <div class="p-1">
    <div class="calendar">
      <div>日</div>
      <div>一</div>
      <div>二</div>
      <div>三</div>
      <div>四</div>
      <div>五</div>
      <div>六</div>
    </div>
    <div class="calendar">
      <div
        v-for="(date, index) in dateArr"
        :key="index"
      >
        {{ date.getDate() }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>
<script lang="ts" setup>
// 这个月的一号
const currentDate = new Date();
currentDate.setDate(1);
// 这个月的一号星期几
const firstDateDay = currentDate.getDay();
// 生成日历所需的35个日期
const beginNum = 1 - firstDateDay;
const dateArr: Date[] = [];
for (let i = 0; i < 35; i++) {
  const item = new Date();
  item.setDate(beginNum + i);
  dateArr.push(item);
}
</script>
<style lang="scss" scoped>
.calendar {
  display: grid;
  grid-template: 50px / repeat(7, 1fr);
  grid-auto-rows: 50px;
  gap: 10px;
  > div {
    border: 1px red solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
