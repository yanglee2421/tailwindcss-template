<template>
    <div>
        <h2>right</h2>
        <el-input v-model="state.obj.name" />
        <el-button @click="store.commit('pushArr', ++id)">add</el-button>
        <div v-for="item, index in state.arr" :key="index">{{ item }}</div>
    </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
import { computed, reactive, watch, ref } from 'vue';
import { mapActions, mapState, useStore } from 'vuex';
const store = useStore()
const state = reactive({})
Object.keys(mapState(['obj', 'arr'])).forEach(key => {
    state[key] = computed(mapState(['obj', 'arr'])[key].bind({ $store: store }))
})
const actions = {}
Object.keys(mapActions(['obj', 'arr'])).forEach(key => {
    actions[key] = computed(mapActions(['obj', 'arr'])[key].bind({ $store: store }))
})
let id = 0
</script>
<style lang='scss' scoped>
//
</style>