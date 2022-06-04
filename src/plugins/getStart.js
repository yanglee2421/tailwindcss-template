/*
仅适用于Vue3
自动安装
- 除css以外的Element-plus
- router实例
- vuex实例
*/
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
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
        //v-showImg
        app.directive('showImg', (el) => {
            let arr = [];
            for (let i = 0; i < 8; i++) {
                arr.push(Math.floor(Math.random() * 16).toString(16));
            }
            const ranStr = arr.join("");
            el.setAttribute(`showImg-${ranStr}`, "");
            const imgArr = document.querySelectorAll(`[showimg-${ranStr}] img`);
            [...imgArr].forEach((img) => {
                img.draggable = false;
                /*  img.oncontextmenu = (event) => {
                  event.preventDefault();
                }; */
                img.addEventListener("click", (event) => {
                    event.preventDefault();
                    const mask = document.createElement("div");
                    mask.style.position = "fixed";
                    mask.style.top = 0;
                    mask.style.right = 0;
                    mask.style.bottom = 0;
                    mask.style.left = 0;
                    mask.style.zIndex = 9;
                    mask.style.display = "flex";
                    mask.style.justifyContent = "center";
                    mask.style.alignItems - "center";
                    mask.style.backgroundColor = "rgba(0,0,0,.5)";
                    const showImg = document.createElement("img");
                    showImg.draggable = false;
                    showImg.src = event.currentTarget.src;
                    const btnClose = document.createElement('div')
                    btnClose.style.width = '30px'
                    btnClose.style.height = '30px'
                    btnClose.style.backgroundColor = '#fff'
                    btnClose.style.position = 'absolute'
                    btnClose.style.top = 0
                    btnClose.style.right = 0
                    btnClose.style.zIndex = 99
                    btnClose.onclick = (event) => {
                        if (event.target === event.currentTarget)
                            document.body.removeChild(mask);
                    };
                    mask.appendChild(btnClose)
                    mask.appendChild(showImg);
                    document.body.appendChild(mask);
                    // mask.onclick = 
                });
            });
        })
        console.log(app.version);
    }
}