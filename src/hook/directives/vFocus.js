/*
element-plus的v-focus
输入框mounted和updated时自动聚焦
仅支持el-input和el-input-number
*/
export default (el) => {
    if (el.className !== 'el-input' && el.className !== 'el-input-number') {
        throw new Error('仅支持el-input或el-input-number')
    }
    const { exposed, setupState } = el.__vueParentComponent
    if (exposed) {
        exposed.focus();
    } else {
        setupState.focus();
    }
}