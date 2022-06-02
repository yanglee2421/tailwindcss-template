/*
仅适用于Vue3
自动安装
- 除css以外的Element-plus
- router实例
- vuex实例
*/
import ElementPlus from "element-plus"
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as icons from "@element-plus/icons-vue"
import router from "@/plugins/router"
import vuex from "@/plugins/vuex"
export default {
    async install(app, options) {
        app.use(ElementPlus, { locale })
        Object.keys(icons).forEach(key => {
            if (Reflect.has(icons, key)) {
                app.component(key, icons[key])
            }
        })
        app.use(router)
        app.use(vuex)
        //拖拽指令
        app.directive('drag', (el, binding) => {
            const { index, arr } = binding.value;
            if (!Array.isArray(arr)) throw new Error('arr必须是一个数组')
            el.draggable = true;
            el.ondragstart = (e) => {
                e.dataTransfer.setData("dragIndex", index);
            };
            el.ondragover = (e) => {
                e.preventDefault();
                e.currentTarget.style.borderTop = "1px red solid";
            };
            el.ondragleave = (e) => {
                e.currentTarget.style.borderTop = "";
            };
            el.ondrop = (e) => {
                e.preventDefault()
                console.log(e.dataTransfer.files);
                e.currentTarget.style.borderTop = "";
                const dragIndex = +e.dataTransfer.getData("dragIndex");
                arr.splice(index, 1, ...arr.splice(dragIndex, 1, arr[index]));
            };
        })
        //自动聚焦指令
        app.directive('focus', (el) => {
            if (el.className !== 'el-input' && el.className !== 'el-input-number') {
                throw new Error('仅支持el-input或el-input-number')
            }
            const { exposed, setupState } = el.__vueParentComponent
            if (exposed) {
                exposed.focus();
            } else {
                setupState.focus();
            }
        })
        console.log(app.version);
    }
}