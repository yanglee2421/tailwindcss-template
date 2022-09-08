<template>
  <div v-track="`测试页一`">
    <el-button
      v-for="item in 10"
      :key="item"
      v-track:click="`点击了按钮${item}`"
    >按钮{{item}}</el-button>
    <el-link
      @click="goBack()"
      v-track:click="'跳转到其它tab'"
    >走人</el-link>
    <el-link
      v-track="'7788'"
      @click="te='8899'"
    >{{te}}</el-link>
  </div>
</template>
<script lang='ts'>
import mixins from "@/hooks/track-mixins";
export default {
  inheritAttrs: true,
  /*  mixins: [mixins],
  mounted() {
    this.$track__mes("这是测");
  }, */
};
</script>
<script lang='ts' setup>
import { onBeforeUnmount, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const te = ref("0001");
const goBack = () => {
  router.push("/");
};
</script>
<style lang='scss' scoped>
</style>