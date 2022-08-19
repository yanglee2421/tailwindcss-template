<!-- #region -->
<template>
  <div class="d-flex justify-content-between align-items-center mb-1">
    <el-row class="tool-bar">
      <slot name="tool-bar"></slot>
      <el-dropdown
        @command="commandBatch"
        v-if="selection && batch && multipleSelection.length"
        :append-to-body="false"
      >
        <el-button size="small">批量操作<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <template
              v-for="(el, index) in handleConfig"
              :key="index"
            >
              <el-dropdown-item
                v-if="el.type === 'batch'"
                :command="'batch-' + el.command"
                class="text-truncate"
              >批量{{ el.label }}</el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-row>
    <el-row
      class="d-flex align-items-center tool-bar"
      style="height: 32px"
    >
      <el-tooltip
        v-if="uploadConfig"
        effect="dark"
        content="导入"
        placement="top"
        :append-to-body="false"
      >
        <el-icon
          @click="dialogImport = true"
          :size="20"
          class="mx-1"
          color="#666"
        >
          <Upload class="el-link" />
        </el-icon>
      </el-tooltip>
      <el-tooltip
        v-if="exportFile"
        effect="dark"
        content="导出"
        placement="top"
        :append-to-body="false"
      >
        <el-icon
          @click="
            dialogType = 'exportFile'
            dialogFormVisible = true
            outputUnit.title = 'Excel导出配置'
          "
          :size="20"
          class="mx-1"
          color="#666"
        >
          <Download class="el-link" />
        </el-icon>
      </el-tooltip>
      <el-tooltip
        v-if="exportData"
        effect="dark"
        content="导出"
        placement="top"
        :append-to-body="false"
      >
        <el-icon
          @click="exportAllData"
          :size="20"
          class="mx-1"
          color="#666"
        >
          <Download class="el-link" />
        </el-icon>
      </el-tooltip>
      <el-tooltip
        v-if="print"
        effect="dark"
        content="打印"
        placement="top"
        :append-to-body="false"
      >
        <el-icon
          @click="
            dialogType = 'print'
            dialogFormVisible = true
            outputUnit.title = '打印配置'
          "
          :size="20"
          class="mx-1"
          color="#666"
        >
          <Printer class="el-link" />
        </el-icon>
      </el-tooltip>
      <el-tooltip
        effect="dark"
        content="刷新"
        placement="top"
        :append-to-body="false"
      >
        <el-icon
          @click="initTable"
          :size="20"
          class="mx-1"
          color="#666"
        >
          <Refresh class="el-link" />
        </el-icon>
      </el-tooltip>
      <el-dropdown
        trigger="click"
        :hide-on-click="false"
        :append-to-body="false"
      >
        <el-tooltip
          popper-class="text-nowrap"
          effect="dark"
          content="列设置"
          placement="top"
          :append-to-body="false"
        >
          <el-icon
            :size="20"
            class="mx-1"
            color="#666"
          >
            <Operation class="el-link" />
          </el-icon>
        </el-tooltip>
        <template #dropdown>
          <div class="px-2 py-1 text-muted border-bottom f-14">列展示</div>
          <el-scrollbar height="300px">
            <el-dropdown-menu>
              <template
                v-for="(el, index) in columns"
                :key="index"
              >
                <el-dropdown-item command="el.label">
                  <el-checkbox
                    v-model="el.checked"
                    :checked="el.checked"
                    :disabled="el.disabled"
                    :label="el.label"
                  ></el-checkbox>
                </el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </el-scrollbar>
        </template>
      </el-dropdown>
      <el-tooltip
        effect="dark"
        content="全屏"
        placement="top"
        :append-to-body="false"
      >
        <el-icon
          @click="fullscreenFn"
          :size="20"
          class="mx-1"
          color="#0e7ceb"
        >
          <FullScreen class="el-link" />
        </el-icon>
      </el-tooltip>
    </el-row>
  </div>
  <el-main class="p-0 flex-fill">
    <el-table
      style="width: 100%"
      height="100%"
      :header-cell-style="{ 'text-align': 'center' }"
      ref="multipleTable"
      :data="data"
      border
      v-loading="loading"
      element-loading-spinner="el-icon-loading"
      element-loading-text="正在加载中..."
      @selection-change="selectionChange"
      @sort-change="sortChange"
    >
      <el-table-column
        v-if="index"
        type="index"
        label="序号"
        align="center"
        width="50"
        fixed="left"
      />
      <el-table-column
        v-if="selection"
        type="selection"
        align="center"
        width="50"
        fixed="left"
      />
      <template
        v-for="(el, index) in cachecolumns"
        :key="index"
      >
        <el-table-column
          :type="el.type"
          :prop="el.prop"
          :label="el.label"
          :align="el.align"
          :width="el.width"
          :sortable="el.sortable"
          :fixed="el.fixed"
          :formatter="el.formatter"
          :show-overflow-tooltip="el.tooltip"
        >
          <template
            v-if="el.slot"
            #default="scope"
          >
            <slot
              :scope="scope"
              :name="el.slot"
            />
          </template>
        </el-table-column>
      </template>
      <el-table-column
        v-if="columns.length && handleConfig.length"
        label="操作"
        align="center"
        fixed="right"
        :width="columnsHandleWidth"
      >
        <template #default="scope">
          <template
            v-for="(el, index) in handleConfig"
            :key="index"
          >
            <el-button
              v-if="el.ismore !== true"
              :plain="el.plain"
              :type="el.status"
              size="mini"
              @click="commandHandle(el.command, scope.row)"
            >{{ el.label }}</el-button>
          </template>
          <el-dropdown
            v-if="showMore"
            @command="commandSingle"
            @visible-change="uniterming = scope.row"
            class="ml-1"
            :append-to-body="false"
          >
            <el-button size="small">更多<i class="el-icon-more el-icon--right"></i></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <template
                  v-for="(el, index) in handleConfig"
                  :key="index"
                >
                  <el-dropdown-item
                    v-if="el.ismore === true"
                    :command="el.command"
                  >{{ el.label }}</el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="暂无数据"></el-empty>
      </template>
    </el-table>
  </el-main>
  <el-pagination
    class="p-0 my-1"
    background
    small
    layout="sizes, prev, pager, next, jumper, ->, total, slot"
    :total="total"
    :page-sizes="[10, 50, 100, 200]"
    v-model:currentPage="param.PageIndex"
    v-model:pageSize="param.PageSize"
    @size-change="
      param.PageIndex = 1
      initTable(param)
    "
    @current-change="initTable(param)"
  >
  </el-pagination>
  <!-- 导出、打印数据筛选 S -->
  <el-dialog
    @open="
      outputUnit.filename =
        $route.matched[$route.matched.length - 1].name +
        '-' +
        new Date().toLocaleString()
    "
    width="25%"
    :title="outputUnit.title"
    v-model="dialogFormVisible"
    :destroy-on-close="true"
    custom-class="dialog-custom"
  >
    <el-form
      :model="form"
      ref="dialogForm"
    >
      <el-form-item
        v-if="dialogType === 'exportFile' || dialogType === 'print'"
        :label="dialogType === 'exportFile' ? '文件名称' : '文档名称'"
      >
        <el-input
          v-model="outputUnit.filename"
          clearable
          :placeholder="
            dialogType === 'exportFile'
              ? '请填写要保存的文件名称'
              : '请填写要打印的文档名称'
          "
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        v-if="dialogType === 'exportFile'"
        label="保存格式"
      >
        <el-select
          v-model="outputUnit.bookType"
          class="w-100"
          placeholder="请选择保存格式"
        >
          <el-option
            label="Excel 工作簿(*.xlsx)"
            value="xlsx"
          ></el-option>
          <el-option
            label="CSV (逗号分隔)(*.csv)"
            value="csv"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数据范围">
        <el-select
          v-model="range"
          @change="changeRangeFn"
          class="w-100"
          placeholder="请选择数据范围"
        >
          <el-option
            label="选中数据(当前页选中的数据)"
            value="multipleSelection"
          ></el-option>
          <el-option
            label="当前页数据(当前页的全部数据)"
            value="singlePage"
          ></el-option>
          <el-option
            label="全部分页数据(包括所有分页的数据)"
            value="all"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="字段配置"
        class="mb-0"
      >
        <el-card
          class="card-field"
          shadow="never"
        >
          <template #header>
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全部字段</el-checkbox>
          </template>
          <el-scrollbar max-height="200px">
            <el-checkbox-group
              v-model="fieldsLabel"
              @change="handleCheckedChange"
            >
              <el-checkbox
                v-for="(el, index) in columns"
                :label="el.label"
                :disabled="el.disabled"
                :key="index"
              />
            </el-checkbox-group>
          </el-scrollbar>
        </el-card>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          @click="dialogFormVisible = false"
          size="small"
        >取 消</el-button>
        <el-button
          v-if="dialogType === 'exportFile'"
          :loading="downloadLoading"
          type="primary"
          @click="handleDownload()"
          size="small"
        >导 出</el-button>
        <el-button
          v-if="dialogType === 'print'"
          type="primary"
          @click="printFn()"
          size="small"
        >打 印</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 导出、打印数据筛选 S -->
  <!-- 导入 S -->
  <el-dialog
    width="25%"
    title="文件导入"
    v-model="dialogImport"
    :destroy-on-close="true"
    custom-class="dialog-custom"
  >
    <el-upload
      drag
      :action="uploadConfig.action"
      :data="uploadConfig.data"
      :accept="uploadConfig.accept"
      :headers="uploadConfig.headers"
      :on-success="ImportRes"
      multiple
      class="w-100"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="
            d-flex
            justify-content-between
            align-items-center
            el-upload__tip
          ">
          <span>{{ uploadConfig.tip }}</span>
          <el-link
            v-if="uploadConfig.templateUrl"
            :href="uploadConfig.templateUrl"
            target="_blank"
            type="primary"
            :underline="false"
            icon="el-icon-download"
          >下载模版</el-link>
        </div>
      </template>
    </el-upload>
  </el-dialog>
  <!-- 导入 E -->
</template>
<!-- #endregion -->
<script setup>
import { parseTime } from "@/utils"
import printJS from "print-js"
import {
  reactive,
  nextTick,
  inject,
  onBeforeMount,
  computed,
  toRefs,
} from "vue"
import { ElMessage } from "element-plus"
import {
  FullScreen,
  Refresh,
  Operation,
  Printer,
  Download,
  Upload,
} from "@element-plus/icons"
const props = defineProps({
  columns: {
    type: Array,
    require: true,
  },
  data: {
    type: [Array, Object],
  },
  selection: {
    type: Boolean,
  },
  index: {
    type: Boolean,
  },
  uploadConfig: {
    type: Object,
  },
  exportFile: {
    type: Boolean,
    default: false,
  },
  print: {
    type: Boolean,
    default: false,
  },
  total: {
    type: Number,
    require: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  handleConfig: {
    type: Array,
    default: () => {
      return []
    },
  },
  showMore: {
    type: Boolean,
    default: true,
  },
  exportData: {
    type: Boolean,
    default: false,
  },
  columnsHandleWidth: {
    type: [Number, String],
  },
})
const emit = defineEmits(["command-handle", "current-change", "export"])
const fullscreenFn = inject("fullscreenFn")
const state = reactive({
  multipleSelection: [],
  uniterming: {},
  param: {
    PageIndex: 1,
    PageSize: 10,
    SortName: "CreatedDate",
    SortOrder: "descending",
  },
  outputUnit: {
    title: "",
    dataList: props.data,
    filename: "",
    autoWidth: true,
    bookType: "xlsx",
  },
  dialogType: "",
  dialogImport: false,
  downloadLoading: false,
  range: "singlePage",
  dialogFormVisible: false,
  checkAll: false,
  multipleFields: [],
  defaultFields: [],
  fieldsLabel: [],
  isIndeterminate: true,
})
const {
  multipleSelection,
  uniterming,
  param,
  outputUnit,
  dialogType,
  dialogImport,
  downloadLoading,
  range,
  dialogFormVisible,
  checkAll,
  multipleFields,
  defaultFields,
  fieldsLabel,
  isIndeterminate,
} = toRefs(state)
const cachecolumns = computed(() => {
  const arr = []
  props.columns.forEach((item) => {
    if (item.checked) {
      arr.push(item)
    }
  })
  return arr
})
const batch = computed(() => {
  let flag = false
  props.handleConfig.forEach(function (item) {
    if (item.type === "batch") {
      flag = true
    }
  })
  return flag
})
const filterFieldsLabel = computed(() => {
  const filterFieldsLabel = []
  this.multipleFields.forEach((item) => {
    filterFieldsLabel.push(item.label)
  })
  return filterFieldsLabel
})
const filterFieldsProp = computed(() => {
  const filterFieldsProp = []
  this.multipleFields.forEach((item) => {
    filterFieldsProp.push(item.prop)
  })
  return filterFieldsProp
})
const filterPrinFieds = computed(() => {
  const filterPrinFieds = []
  this.multipleFields.forEach((item) => {
    filterPrinFieds.push({
      field: item.prop,
      displayName: item.label,
    })
  })
  return filterPrinFieds
})
const ImportRes = (res) => {
  if (res.Code === 1) {
    ElMessage({
      type: "success",
      message: "导入成功",
    })
    state.dialogImport = false
    emit("current-change", state.param)
  } else {
    ElMessage({
      type: "error",
      message: res.Message,
    })
  }
}
const handleDownload = () => {
  if (state.range === "multipleSelection" && !state.multipleSelection.length) {
    ElMessage.warning("你还没有选取需要导出的数据")
    return
  }
  state.downloadLoading = !state.downloadLoading
  import("@/vendor/Export2Excel").then((excel) => {
    const data = formatJson(state.filterFieldsProp, state.outputUnit.dataList)
    excel.export_json_to_excel({
      header: state.filterFieldsLabel,
      data,
      filename: state.outputUnit.filename,
      autoWidth: state.outputUnit.autoWidth,
      bookType: state.outputUnit.bookType,
    })
    state.downloadLoading = !state.downloadLoading
    state.dialogFormVisible = !state.dialogFormVisible
  })
}
const formatJson = (filterVal, jsonData) => {
  return jsonData.map((v) =>
    filterVal.map((j) => {
      if (j === "timestamp") {
        return parseTime(v[j])
      } else {
        return v[j]
      }
    })
  )
}
const handleCheckAllChange = (val) => {
  state.multipleFields = val ? props.columns : state.defaultFields
  state.isIndeterminate = !val
  state.fieldsLabel = state.filterFieldsLabel
}
const handleCheckedChange = (val) => {
  const arr = []
  val.forEach((x) => {
    props.columns.forEach((y) => {
      if (x === y.label) {
        arr.push(y)
      }
    })
  })
  state.multipleFields = arr
  const checkedCount = val.length
  state.checkAll = checkedCount === props.columns.length
  state.isIndeterminate =
    checkedCount > 0 && checkedCount < props.columns.length
}
const changeRangeFn = (val) => {
  switch (val) {
    case "multipleSelection":
      state.outputUnit.dataList = state.multipleSelection
      break
    case "singlePage":
      state.outputUnit.dataList = props.data
      break
    case "all":
      break
  }
}
const selectionChange = (selection) => {
  state.multipleSelection = selection
}
const sortChange = (column) => {
  if (column.prop != null && column.order != null) {
    state.param.SortName = column.prop
    state.param.SortOrder = column.order
  }
  nexTick(() => {
    initTable()
  })
}
const commandBatch = (command) => {
  emit("command-handle", command, state.multipleSelection)
}
const commandSingle = (command) => {
  emit("command-handle", command, state.uniterming)
}
const commandHandle = (command, scope) => {
  emit("command-handle", command, scope)
}
const initTable = () => {
  emit("current-change", state.param)
}
const printFn = () => {
  printJS({
    printable: state.outputUnit.dataList,
    properties: state.filterPrinFieds,
    type: "json",
    gridHeaderStyle:
      "padding:5px 0font-size:14pxborder: 1px solid lightgrayline-height:18pxvertical-align: middle",
    gridStyle:
      "text-align: centerfont-size:12pxborder: 1px solid lightgraymargin-bottom: -1px",
    repeatTableHeader: false,
    documentTitle: state.outputUnit.filename,
  })
}
const exportAllData = () => {
  emit("export", "")
}
onBeforeMount(() => {
  props.columns.forEach((item) => {
    if (item.checked === true) {
      state.defaultFields.push(item)
      state.multipleFields.push(item)
      state.fieldsLabel.push(item.label)
    }
  })
})
</script>
<style lang="scss" scoped>
.dialog-custom {
  .el-dialog__header {
    background-color: #f5f5f5;
  }
  .el-dialog__body {
    padding: 20px;
  }
}
.card-field {
  .el-card__header,
  .el-card__body {
    padding: unset;
  }
  .el-card__header {
    background: #f5f5f5;
  }
  .el-checkbox {
    display: block;
    padding: {
      left: 15px;
      right: 15px;
    }
    span {
      vertical-align: middle;
    }
  }
  .el-card__body {
    .el-checkbox {
      margin: {
        top: 2px;
        bottom: 2px;
        right: initial;
      }
      &:hover {
        background: #f5f7fa;
      }
    }
  }
}
.w-100 {
  .el-upload,
  .el-upload-dragger {
    width: 100%;
  }
}
.tool-bar {
  .el-button {
    margin-right: 10px;
  }
  .el-dropdown-menu__item {
    cursor: default;
  }
}
</style>
