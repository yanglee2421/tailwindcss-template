<template>
  <div>
    <el-switch v-model="state.isShow" />
    <fw-card></fw-card>
    <el-dialog
      v-model="state.isShow"
      title="测试弹窗"
      width="400px"
    >
      <div
        v-track="`el-dialog`"
        class="dialog-content"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsa eveniet eaque rem nostrum labore ratione laudantium odit accusantium cupiditate deserunt velit, obcaecati dolorum earum, nam rerum iusto accusamus alias.
        Magnam, quam voluptatum? Dolorem, quos magni! Nihil, tempora? Voluptatem rerum sunt asperiores iusto recusandae! Ea necessitatibus nisi dolorem corrupti ipsam dolor aliquid, ex doloribus ad provident eos reiciendis quisquam veritatis.
        Ratione tempora iusto voluptatem architecto impedit excepturi non! Sunt accusantium molestias quibusdam culpa ab sed iure aut optio quis, sequi ad explicabo quisquam enim quia saepe suscipit fugiat aliquid magnam?
        Alias iste natus labore autem inventore explicabo delectus et ratione voluptatibus, temporibus, esse reprehenderit voluptates ut, soluta assumenda. Excepturi impedit aspernatur laudantium praesentium, officiis consequuntur iusto ab aliquid in officia!
        Deserunt reprehenderit nemo voluptatem excepturi dolore veritatis quidem quisquam blanditiis iure animi quo tempore architecto dolorem distinctio eligendi ullam enim corporis officiis reiciendis tempora aperiam ipsam, doloribus cum? Impedit, blanditiis.
        Officia beatae iusto expedita laboriosam, exercitationem temporibus ipsam, facere maiores nulla rerum a fugiat. Ut dolor dignissimos sint, facilis veritatis iste porro consectetur iusto illo vitae accusamus minima? Distinctio, esse.
        Qui ipsa nulla sequi minus, at praesentium, consequatur molestiae magnam consectetur magni ab. A aperiam corporis sint possimus praesentium dicta minima, tenetur recusandae vel quo consequatur fugiat doloremque impedit odit?
        Quisquam similique corrupti incidunt quidem quis odio minus quaerat, repellendus nobis molestiae praesentium illum est qui? Placeat possimus earum saepe, adipisci, labore officiis praesentium et, neque consectetur sed eaque. Officiis.
        Pariatur maxime, dolorum sunt voluptate velit dolorem facilis. Dolor maiores non distinctio exercitationem at tenetur blanditiis sint nisi animi ut. Consequatur, illum facere quam nostrum expedita unde ex autem tempora.
        Et reiciendis illum nesciunt recusandae rem ducimus iure? Ratione rerum modi natus tenetur. Maxime culpa dolorem reprehenderit quas temporibus. Aspernatur quidem labore sunt soluta ut. Laborum suscipit atque quos delectus.
      </div>
    </el-dialog>
  </div>
</template>
<script lang='ts'>
export default {
  inheritAttrs: true,
};
</script>
<script lang='ts' setup>
import { reactive } from "vue";

const state = reactive({
  isShow: false,
});
</script>
<style lang='scss' scoped>
.dialog-content {
  line-height: 1.5;
  font-size: 20px;
  // 隐藏溢出
  height: 300px;
  overflow: hidden;
  //至多五行（需要隐藏溢出）
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
}
</style>