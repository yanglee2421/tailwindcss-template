<template>
  <div>
    <!-- 游戏界面 -->
    <div class="box">
      <!-- 蛇活动的窗口 -->
      <div class="stage">
        <!-- 蛇 -->
        <div class="snake">
          <div></div>
        </div>
        <!-- 食物 -->
        <div class="food">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="score-panel">
        <div>SCORE:<span class="score">0</span></div>
        <div>Level:<span class="level">1</span></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import GameControl from "./GameControl";
onMounted(() => {
  const gameControl = new GameControl();
  gameControl.init();
});
</script>
<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: {
    size: 20px;
    weight: bold;
    family: Courier;
  }
}

$bg-color: #b7d4a8;

.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 360px;
  height: 420px;
  border: 10px #000 solid;
  border-radius: 40px;
  margin: 50px auto;
  background-color: $bg-color;

  .stage {
    position: relative;
    width: 304px;
    height: 304px;
    border: 2px #000 solid;

    .snake {
      >div {
        position: absolute;
        left: 0;
        top: 0;
        width: 10px;
        height: 10px;
        border: 1px solid $bg-color;
        background-color: #000;
      }
    }

    .food {
      position: absolute;
      left: 40px;
      top: 100px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: space-between;
      width: 10px;
      height: 10px;

      >div {
        width: 4px;
        height: 4px;
        background-color: #000;
        transform: rotate(45deg);
      }
    }
  }

  .score-panel {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
}
</style>