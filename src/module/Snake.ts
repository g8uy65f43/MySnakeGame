class Snake {
    SnakeEle: HTMLElement
    HeadEle: HTMLElement
    bodies: HTMLCollection

    constructor() {
        this.SnakeEle = document.getElementById("snake")!
        this.HeadEle = document.querySelector("#snake>div") as HTMLElement
        this.bodies = this.SnakeEle.getElementsByTagName("div")
    }

    get X() {
        return this.HeadEle.offsetLeft
    }
    get Y() {
        return this.HeadEle.offsetTop
    }




    set X(v: number) {
        if (this.X !== v) {
            if (v < 0 || v > 290) {
                throw new Error("蛇撞牆了")
            } else if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === v) {
                if (v > this.X) {
                    v = this.X - 10
                } else { v = this.X + 10 }
            }
            this.moveBody()
            this.HeadEle.style.left = v + "px"
            this.checkHeadBody()
        }
    }

    set Y(v) {
        if (this.Y !== v) {
            if (v < 0 || v > 290) {
                throw new Error("蛇撞牆了")
            } else if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === v) {
                if (v > this.Y) {
                    v = this.Y - 10
                } else { v = this.Y + 10 }
            }
            this.moveBody()
            this.HeadEle.style.top = v + "px"
            this.checkHeadBody()

        }
    }
    resetSnake  (){
        this.SnakeEle.innerHTML=`<div></div>`
        this.SnakeEle = document.getElementById("snake")!
        this.HeadEle = document.querySelector("#snake>div") as HTMLElement
        this.bodies = this.SnakeEle.getElementsByTagName("div")


    }
    addBody() {
        this.SnakeEle.insertAdjacentHTML("beforeend", "<div/>")
        
    }
    moveBody() {

        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + "px";

            (this.bodies[i] as HTMLElement).style.top = Y + "px"
        }
    }
    checkHeadBody() {

        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop)
                throw new Error("自撞了QQ")

        }


    }

}
export default Snake