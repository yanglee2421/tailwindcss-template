<template>
  <div class="h-100 flex-column">
    <el-form>
      <el-form-item>
        <el-input />
      </el-form-item>
    </el-form>
    <div class="flex-1-hidden">
      <el-table
        :data="[{name:'777777'},{name:'当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。调用$alert方法即可打开消息提示， 它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。 此例中接收了两个参数，message和title。 值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。 若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。'},{name:'777777'},]"
        height="100%"
      >
        <el-table-column
          label="标题"
          prop="name"
        />
        <el-table-column
          label="标题"
          prop="name"
          show-overflow-tooltip
        />
        <el-table-column
          label="标题"
          prop="name"
        />
      </el-table>
    </div>
    <el-pagination
      layout="total,sizes,prev,pager,next,jumper"
      :total="100"
    />
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
</style>