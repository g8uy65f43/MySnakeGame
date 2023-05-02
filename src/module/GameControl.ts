import ScorePanel from "./ScorePanel"
import Food from "./Food"
import Snake from "./Snake"

class GameControl {
    Snake: Snake
    Food: Food
    ScorePanel: ScorePanel
    isLive = true
    direction: string = ""
    constructor() {
        this.Snake = new Snake()
        this.Food = new Food()
        this.ScorePanel = new ScorePanel()
        this.init()
    }

    keydownHandler(event: KeyboardEvent) {
        switch (event.key) {
            case "ArrowUp" || "Up":
            case "ArrowDown" || "Down":
            case "ArrowLeft" || "Left":
            case "ArrowRight" || "Right":
                this.direction = event.key
                break;
            case "Enter":
                if (!this.isLive) {
                    this.isLive = true
                    this.direction = ""
                    this.init()
                    break
                }
            default:
                break;
        }
    }

    run() {
        let X = this.Snake.X
        let Y = this.Snake.Y



        switch (this.direction) {

            case "ArrowUp" || "Up":
                Y -= 10
                break;
            case "ArrowDown" || "Down":
                Y += 10
                break;
            case "ArrowLeft" || "Left":
                X -= 10
                break;
            case "ArrowRight" || "Right":
                X += 10
                break;
            default:
                break;
        }
        this.checkEat(X, Y)




        try {
            this.Snake.X = X
            this.Snake.Y = Y
        } catch (error) {
            this.isLive = false
            this.Snake.X = 0
            this.Snake.Y = 0
            !this.isLive && alert("涼透了，Enter重啟")
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.ScorePanel.level - 1) * 30);
    }

    checkEat(X: number, Y: number) {
        if (X === this.Food.X && Y === this.Food.Y) {

            this.ScorePanel.addScore()
            this.Snake.addBody()
            this.Food.change()

        }


    }



    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this))
        this.ScorePanel.initScore()
        this.Snake.resetSnake()
        console.log("he")
        this.run()

    }




}
export default GameControl