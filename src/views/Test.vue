<template>
  <div>
    <el-table
      :data="[{},{}]"
      stripe
      border
    >
      <el-table-column
        align="center"
        label="流程节点"
        width="180px"
      >
        <template #default="{row}">
          <span>{{row.ProcessNodeId}}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="触发预警（分钟）"
        width="180px"
      >
        <template #default="{row}">
          <el-input v-model="row.WarningTime" />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="预警次数"
        width="180px"
      >
        <template #default="{row}">
          <el-input v-model="row.WarningNum" />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="接收预警"
      >
        <template #default="{row}">
          <el-row>
            <el-col :span="12">
              <span>F运营：</span>
              <el-select
                v-model="row.UserList"
                multiple
              >
                <el-option
                  v-for="(item,index) in 5"
                  :key="index"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-col>
            <el-col :span="6">
              <el-checkbox>站内信</el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox>公众号</el-checkbox>
            </el-col>
            <el-col :span="12">
              <el-checkbox>通知承运商</el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox>站内信</el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox>公众号</el-checkbox>
            </el-col>
            <el-col :span="12">
              <el-checkbox>通知司机</el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox>站内信</el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox>公众号</el-checkbox>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang='ts' setup>
import { reactive } from "vue";

interface itemInter {
  ProcessNodeId: 0;
  Type: 10;
  WarningTime: 0; //预警时间
  WarningNum: 0; //预警次数
  UserList: []; //选择员工
  UserMesInStation: boolean; //使用站内信
  UserPublicAccount: boolean; //使用公众号
  NotifyCarrier: boolean; //通知承运商
  CarrierMesInStation: boolean; //承运商站内信
  CarrierPublicAccount: boolean; //承运商公众号
  NotifyDriver: boolean; //通知司机
  DriverTextMessage: boolean; //短信
  DriverPublicAccount: boolean; //公众号
}
interface formIter {
  WarningConfigId: number;
  BusinessProcessType: number;
  UseScopeType: number;
  CustomerId: number;
  ProcessNodeNotifyInfoList: itemInter[];
}
class Form implements formIter {
  WarningConfigId = 0;
  BusinessProcessType = 0;
  UseScopeType = 0;
  CustomerId = 0;
  ProcessNodeNotifyInfoList = [];
}
const form = reactive(new Form());
</script>
<style lang='scss' scoped>
.el-col {
  text-align: start;
}
</style>