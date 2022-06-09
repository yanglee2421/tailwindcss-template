// gallery的样式
const galSty = {
    position: `fixed`,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9,
    display: `none`,
    gridTemplate: `none/1fr auto 1fr`,
    background: `rgba(0, 0, 0, .8)`,
}
// 图片的样式
const imgSty = {
    maxWidth: '100vw',
    maxHeight: '100vh',
    placeSelf: 'center',
}
//导航的样式
const navSty = {
    position: `absolute`,
    bottom: `1ch`,
    left: `50%`,
    transform: `translate(-50%)`,
    color: `whitesmoke`,
    fontSize: `32px`,
}
//关闭按钮的样式
const btnSty = {
    position: `absolute`,
    right: 0,
    width: `45px`,
    height: `45px`,
}
//关闭按钮那个X的样式
const xSty = {
    width: `40px`,
    height: `4px`,
    background: `whitesmoke`,
    position: `absolute`,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: `5px`,
    margin: `auto`,
    transformOrigin: `center`,
}
// 指针的样式
const poiSty = {
    position: `absolute`,
    left: 0,
    top: 0,
    display: `none`,
    width: `50px`,
    height: `50px`,
    border: `whitesmoke solid`,
    borderRadius: `5px`,
    transformOrigin: `left top`,
}
//操作元素的方法简写
const $ = (selector) => document.querySelector(selector)
const $all = (selector) => document.querySelectorAll(selector)
const _ = (el) => document.createElement(el)
HTMLElement.prototype.setStyle = function (sty) {
    Object.assign(this.style, sty)
}
HTMLElement.prototype.appChds = function (...arr) {
    arr.forEach(el => {
        this.appendChild(el)
    })
}
HTMLElement.prototype.appChain = function (...arr) {
    arr.forEach((item, index) => {
        arr[index + 1] && item.appendChild(arr[index + 1])
    })
    this.appendChild(arr[0])
}
const padd_1 = (...arr) => {
    arr.forEach(el => {
        el.style.padding = '8px'
    })
}
// 创建gallery
const body = $('body')
const gallery = _('section')
gallery.className = 'swz-gallery'
gallery.setStyle(galSty)
const left = _('aside')
const poiLef = _('div')
poiLef.setStyle(poiSty)
poiLef.style.borderWidth = '0 0 5px 5px'
gallery.appChain(left, poiLef)
const cenImg = _('img')
cenImg.setStyle(imgSty)
gallery.appendChild(cenImg)
const right = _('aside')
const poiRig = _('div')
poiRig.setStyle(poiSty)
poiRig.style.borderWidth = '5px 5px 0 0'
gallery.appChain(right, poiRig)
const nav = _('nav')
nav.setStyle(navSty)
const navIndex = _('span')
navIndex.style.color = `#409EFF`
const navSpa = _('span')
navSpa.innerText = '/'
const navTotal = _('span')
padd_1(navIndex, navSpa, navTotal)
nav.appChds(navIndex, navSpa, navTotal)
gallery.appendChild(nav)
const btn = _('div')
btn.setStyle(btnSty)
btn.onclick = () => {
    gallery.style.display = 'none'
}
const btnX_1 = _('div')
btnX_1.style.transform = 'rotate(45deg)'
btnX_1.setStyle(xSty)
const btnX_2 = _('div')
btnX_2.style.transform = 'rotate(-45deg)'
btnX_2.setStyle(xSty)
btn.appChds(btnX_1, btnX_2)
gallery.appendChild(btn)
// 绑定事件
const onEvent = (isLeft, index, arr) => {
    const pointer = isLeft ? poiLef : poiRig
    const el = isLeft ? left : right
    el.onmouseover = (event) => {
        const { clientX, clientY } = event
        pointer.style.transform = `translate(${clientX}px,${clientY}px) rotate(45deg)`
        pointer.style.display = 'block'
    }
    el.onmousemove = (event) => {
        const { clientX, clientY } = event
        pointer.style.transform = `translate(${clientX}px,${clientY}px) rotate(45deg)`
    }
    el.onmouseout = () => {
        pointer.style.display = 'none'
    }
    el.onclick = () => {
        isLeft ? arr[index - 1]?.click?.() : arr[index + 1]?.click?.()
    }
}
// 清空事件
const clearEvent = (...arr) => {
    arr.forEach(el => {
        el.onmouseover = null
        el.onmousemove = null
        el.onmouseout = null
        el.onclick = null
    })
}
const showGallery = (el, index, arr) => {
    el.onclick = () => {
        navIndex.innerText = index + 1
        navTotal.innerText = arr.length
        cenImg.src = el.src
        clearEvent(left, right)
        if (index > 0 && index < arr.length - 1) {
            onEvent(true, index, arr)
            onEvent(false, index, arr)
            left.style.cursor = 'none'
            right.style.cursor = 'none'
        } else if (index === 0) {
            onEvent(false, index, arr)
            left.style.cursor = 'default'
            right.style.cursor = 'none'
            poiLef.style.display = 'none'
        } else if (index === arr.length - 1) {
            onEvent(true, index, arr)
            left.style.cursor = 'none'
            right.style.cursor = 'default'
            poiRig.style.display = 'none'
        }
        body.style.overflow = 'hidden'
        gallery.style.display = 'grid'
    }
}
export default {
    mounted(el) {
        !body.contains(gallery) && body.appendChild(gallery)
        let ranStr = [];
        for (let i = 0; i < 8; i++) {
            ranStr.push(Math.floor(Math.random() * 16).toString(16));
        }
        ranStr = ranStr.join("");
        el.setAttribute(`showImg-${ranStr}`, "");
        const imgArr = $all(`[showimg-${ranStr}] img`);
        [...imgArr].forEach((img, index, arr) => {
            showGallery(img, index, arr)
        })
    },
    updated(el) {
        let ranStr = [];
        for (let i = 0; i < 8; i++) {
            ranStr.push(Math.floor(Math.random() * 16).toString(16));
        }
        ranStr = ranStr.join("");
        el.setAttribute(`showImg-${ranStr}`, "");
        const imgArr = $all(`[showimg-${ranStr}] img`);
        [...imgArr].forEach((img, index, arr) => {
            showGallery(img, index, arr)
        })
    },
    beforeUnmount() {
        gallery.parentNode?.removeChild?.(gallery)
    }
}