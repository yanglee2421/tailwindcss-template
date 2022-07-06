<template>
    <div>
        <el-form class="flex-row" inline>
            <div>
                <el-form-item label="条件一">
                    <el-input />
                </el-form-item>
                <el-form-item label="条件一">
                    <el-input />
                </el-form-item>
                <el-form-item label="条件一">
                    <el-input />
                </el-form-item>
                <el-form-item label="条件一">
                    <el-input />
                </el-form-item>
            </div>
            <div>
                <el-button>取消</el-button>
                <el-button type="primary">查询</el-button>
            </div>
        </el-form>
        <el-table>
            <el-table-column />
        </el-table>
        <el-pagination layout="total,sizes,prev,pager,next,jumper" :total="100" />
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
</style>