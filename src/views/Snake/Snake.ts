// 蛇类
class Snake {
    element: HTMLElement
    head: HTMLElement
    body: HTMLCollection
    constructor() {
        this.element = document.querySelector(".snake")!
        this.head = document.querySelector(".snake>div:first-of-type")!
        this.body = document.querySelector(".snake")!.getElementsByTagName("div")
    }
    // 设置坐标
    get left() {
        return this.head.offsetLeft
    }
    set left(value) {
        if (this.left === value) {
            return
        }
        if (value < 0 || value > 290) {
            console.log("left", value)
            throw new Error("游戏结束")
        }
        if (this.body[1] && (<HTMLElement>this.body[1]).offsetLeft === value) {
            if (value > this.left) {
                value = this.left - 10
            } else {
                value = this.left + 10
            }
        }
        this.moveBody()
        this.head.style.left = `${value}px`
        this.chkHeadBody()
    }
    get top() {
        return this.head.offsetTop
    }
    set top(value) {
        if (value === this.top) {
            return
        }
        if (value < 0 || value > 290) {
            console.log("top", value)

            throw new Error("游戏结束")
        }
        if (this.body[1] && (<HTMLElement>this.body[1]).offsetTop === value) {
            if (value > this.top) {
                value = this.top - 10
            } else {
                value = this.top + 10
            }
        }
        this.moveBody()
        this.head.style.top = `${value}px`
        this.chkHeadBody()
    }
    // 蛇增加身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    // 蛇身移动
    moveBody() {
        for (let i = this.body.length - 1; i > 0; i--) {
            let { offsetLeft: x, offsetTop: y } = <HTMLElement>this.body[i - 1];
            (<HTMLElement>this.body[i]).style.left = `${x}px`;
            (<HTMLElement>this.body[i]).style.top = `${y}px`;
        }
    }
    chkHeadBody() {
        for (let i = 1; i < this.body.length; i++) {
            const bd = <HTMLElement>this.body[i]
            if (this.left === bd.offsetLeft && this.top === bd.offsetTop) {
                throw new Error("吃自己")
            }
        }
    }
}
export default Snake