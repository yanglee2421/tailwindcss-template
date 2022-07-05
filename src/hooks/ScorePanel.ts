// 计分牌类
class ScorePanel {
    score = 0
    upScore: number
    level = 1
    maxLevel: number
    scoreEle: HTMLElement
    levelEle: HTMLElement
    constructor(maxLevel = 10, upScore = 10) {
        this.scoreEle = document.querySelector(".score")!
        this.levelEle = document.querySelector(".level")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    // 分数自增
    addScore() {
        ++this.score
        this.scoreEle.innerHTML = `${this.score}`
        this.score % this.upScore === 0 && this.levelUp()
    }
    // 等级自增
    levelUp() {
        this.level < this.maxLevel && ++this.level
        this.levelEle.innerHTML = `${this.level}`
    }
}
export default ScorePanel