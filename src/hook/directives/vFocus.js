/*
element-plus的v-focus
输入框mounted和updated时自动聚焦
仅支持el-input、el-input-number和input
*/
export default (el) => {
    if (el.className !== 'el-input' && el.className !== 'el-input-number' && !el.focus) {
        throw new Error('仅支持el-input、el-input-number和input')
    }
    const { exposed, setupState } = el.__vueParentComponent
    el.focus?.()
    exposed?.focus?.();
    setupState?.focus?.();
}