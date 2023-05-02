
class ScorePanel {
    score = 0
    level = 1
    MaxLevel: number
    scoreEle: HTMLElement
    levelEle: HTMLElement
    constructor(MaxLevel: number = 10) {
        this.MaxLevel = MaxLevel
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!

    }
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ""
        if (this.score % 2 === 0) this.levelUp()
    }
    levelUp() {
        if (this.level < this.MaxLevel) {
            this.levelEle.innerHTML = ++this.level + ""
        }
    }
    initScore(){
        this.score=0
        this.level=1
        this.scoreEle.innerHTML = this.score + ""    
        this.levelEle.innerHTML = this.level + ""
    }


}
export default ScorePanel