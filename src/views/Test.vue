<template>
  <div class="table">
    <div class="grid m-center thead">
      <div>111</div>
      <div>2222</div>
      <div>3333</div>
    </div>
    <div class="grid m-center tbody overflow-overlay">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus repellat exercitationem, laboriosam quo unde reprehenderit eum minima repellendus non cumque atque ullam quidem, voluptate facilis pariatur. Temporibus, maxime perferendis!</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
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
  .thead {
    height: 100px;
  }
  .tbody {
    height: 300px;
    border: gray solid;
    border-width: 0 0 1px 1px;
  }
}
.grid {
  display: grid;
  grid-template: auto/repeat(3, 1fr);
  width: 500px;
  div {
    border: gray solid;
    border-width: 1px 1px 0 0;
    text-align: center;
  }
}
</style>