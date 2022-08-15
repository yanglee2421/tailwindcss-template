<template>
  <div>
    <!-- <keep-alive>
      <template v-if="state.visible">
        <hello-world></hello-world>
      </template>
    </keep-alive> -->
    <template v-if="state.visible">
      <slot-demo>
        <template #default="{msg,show}">
          <hello-world></hello-world>
          <ul>
            <li>1-{{msg}}</li>
            <li>2-{{show}}</li>
          </ul>
        </template>
      </slot-demo>
    </template>
    <el-button @click="state.visible=!state.visible">change</el-button>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import SlotDemo from "@/components/SlotDemo.vue";
import HelloWorld from "@/components/HelloWorld.vue";
const route = useRoute();
const state = reactive({
  visible: true,
});
onBeforeRouteUpdate((to, from) => {});
onBeforeRouteLeave((to, from) => {});
</script>
<style lang='scss' scoped>
</style>