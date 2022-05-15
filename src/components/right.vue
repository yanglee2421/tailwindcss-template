<template>
    <div>
        <h2>right</h2>
        <el-input v-model="mes" />
        <!-- <el-input v-model="mes.age" /> -->
        <!-- <el-button @click="mes.age = 18">变化</el-button> -->
    </div>
</template>
<script setup>
import { computed, reactive, readonly, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const mes = computed({
    get() {
        return store.state.obj
    },
    set(newVal) {
        store.dispatch("obj", newVal)
    }
})
</script>
<style lang='scss' scoped>
//
</style>