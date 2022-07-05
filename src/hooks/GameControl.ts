import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl {
    /*
    蛇
    食物
    计分牌
    行进方向
    */
    snake = new Snake()
    food = new Food()
    scorePanel = new ScorePanel()
    #direction = ""
    isLive = true
    constructor() { }
    /*
    初始化
    按键响应
    蛇前进
    蛇是否吃到食物
    */
    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this))
        this.run()
    }
    keydownHandler(event: KeyboardEvent) {
        this.#direction = event.key
    }
    run() {
        let { left: x, top: y } = this.snake
        switch (this.#direction) {
            case "ArrowUp":
                y -= 10
                break
            case "ArrowDown":
                y += 10
                break
            case "ArrowLeft":
                x -= 10
                break
            case "ArrowRight":
                x += 10
                break
        }
        // 检查蛇是否吃到食物
        this.chkEat(x, y)
        // 是否撞墙
        try {
            this.snake.left = x
            this.snake.top = y
        } catch (err) {
            this.isLive = false
            alert(err)
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    chkEat(left: number, top: number) {
        if (left === this.food.left && top === this.food.top) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}
export default GameControl