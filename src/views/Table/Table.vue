<template>
    <div>
        <el-form class="flex-row" inline>
            <div>
                <el-form-item label="姓名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="form.age" />
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="form.gender" />
                </el-form-item>
                <el-form-item label="区域">
                    <el-input v-model="form.address" />
                </el-form-item>
            </div>
            <div>
                <el-button @click="form.reset()">重置</el-button>
                <el-button type="primary" @click="form.validate()">查询</el-button>
            </div>
        </el-form>
        <div class="flex-1-hidden">
            <el-table :data="state.data" height="100%" border>
                <el-table-column label="姓名" prop="name" />
                <el-table-column label="年龄" prop="age">
                    <template #default="{ row }">
                        <b>{{ row.age }}</b>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination layout="total,sizes,prev,pager,next,jumper" :total="state.Total"
            v-model:currentPage="state.CurrentPage" v-model:pageSize="state.PageSize" :PageSizes="[10, 20, 30]"
            class="my-1" />
        <el-dialog title=""></el-dialog>
    </div>
</template>
<script lang='ts' setup>
import { FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
const formRef = ref<el.FormInstance>()
const form = reactive<FormInstance>({})
onMounted(() => {
})
</script>
<style lang='scss' scoped>
</style>