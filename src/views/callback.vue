<template>
  <div></div>
</template>
<script lang='ts' setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
if (store.state.auth) {
  router.replace({ name: "404" });
} else {
  router.replace({ name: "login" });
}
</script>
<style lang='scss' scoped>
</style>