// 食物类
class Food {
    element: HTMLElement
    constructor() {
        this.element = document.querySelector(".food")!//!号表示不会为空
    }
    // 获取食物坐标
    get left() {
        return this.element.offsetLeft
    }
    get top() {
        return this.element.offsetTop
    }
    // 修改食物的位置
    change() {
        // 生成一个随机位置
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}
export default Food