<template>
    <div class="h-100 b flex-column">
        <el-form class="flex-row" inline>
            <div>
                <el-form-item label="姓名">
                    <el-input v-model="state.name" />
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="state.age" />
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="state.gender" />
                </el-form-item>
                <el-form-item label="区域">
                    <el-input v-model="state.area" />
                </el-form-item>
            </div>
            <div>
                <el-button @click="state.initTable(true)">重置</el-button>
                <el-button type="primary" @click="state.initTable(true)">查询</el-button>
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
    </div>
</template>
<script lang='ts' setup>
import { onMounted, reactive } from 'vue';
class Form {
    name = ""
    age = 0
    gender = "男"
    area = "武汉"
}
class Pagination {
    CurrentPage = 2
    PageSize = 10
    Total = 100
}
interface tableItem {
    name?: string
    age?: number
    gender?: string
    area?: string
}
class Table {
    data: tableItem[] = []
    private form = new Form()
    private pagination = new Pagination()
    initTable(bool = false) {
        bool && Object.assign(this.pagination, this.form)
        console.log(this.pagination)
        this.data = [
            { name: "张三", age: 18 },
            { name: "李四", age: 19 },
        ]
        this.data[0].name = "123"
        ++this.pagination.Total
    }
    // 向外投送分页字段
    get CurrentPage() {
        return this.pagination.CurrentPage
    }
    set CurrentPage(value) {
        this.pagination.CurrentPage = value
        this.initTable()
    }
    get PageSize() {
        return this.pagination.PageSize
    }
    set PageSize(value) {
        this.pagination.PageSize = value
        this.initTable()
    }
    get Total() {
        return this.pagination.Total
    }
    // 向外投送表单字段
    get name() {
        return this.form.name
    }
    set name(value) {
        this.form.name = value
    }
    get age() {
        return this.form.age
    }
    set age(value) {
        this.form.age = value
    }
    get gender() {
        return this.form.gender
    }
    set gender(value) {
        this.form.gender = value
    }
    get area() {
        return this.form.area
    }
    set area(value) {
        this.form.area = value
    }
}
const state = reactive(new Table())
onMounted(() => {
})
</script>
<style lang='scss' scoped>
</style>