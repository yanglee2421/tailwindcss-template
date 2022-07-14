<template>
  <div class="m-center b">
    <table cellspacing="0">
      <thead>
        <tr>
          <td class="b-0">定值</td>
          <td class="b-0"></td>
          <td class="b-0">
            <img
              src="@/assets/alarm.png"
              style="height:30px"
            >
          </td>
        </tr>
        <tr>
          <th>类别</th>
          <th>温度</th>
          <th>湿度</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-nowrap">箱内温度</td>
          <td>
            <p class="text-nowrap mb-1">
              <span>设定值：</span>
              <span>0.0% ℃</span>
            </p>
            <p>
              <span>0.00% ℃</span>
            </p>
          </td>
          <td>
            <p class="text-nowrap mb-1">
              <span>设定值：</span>
              <span>0.0% RH</span>
            </p>
            <p>
              <span>0.00% RH</span>
            </p>
          </td>
        </tr>
        <tr>
          <td>HMV</td>
          <td>0.0%</td>
          <td>0.0%</td>
        </tr>
        <tr>
          <td>CMV</td>
          <td>0.0%</td>
          <td>0.0%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang='scss' scoped>
table {
  th {
    height: 38px;
  }
  th,
  td {
    padding: 10px;
    border: solid gray;
    border-width: 1px 1px 0 0;
    text-align: center;
    &:first-of-type {
      border: solid gray;
      border-width: 1px 1px 0 1px;
    }
  }
  tbody tr:last-of-type {
    td {
      border-bottom: 1px solid gray;
    }
  }
}
.text-nowrap {
  white-space: nowrap;
}
</style>