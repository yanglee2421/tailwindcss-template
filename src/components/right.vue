<template>
    <h1>右</h1>
    <p>{{ obj }}</p>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const obj = computed(() => store.state.mes)
</script>
<style lang='scss' scoped>
//
</style>