const rl = require("readline-sync");


class Player {
    constructor({}){
        this.name = "";
        this.totalCoins = 0;
        this.status = 1;
        this.statusOptions = ["Dead", "Small", "Big", "Powered Up"];
        this.hasStar = false;
        this.gameActive = true;
    }

    setName = () => {
        let name = ["Mario", "Luigi"];
        this.name = name[Math.floor(Math.random() * name.length)];
    }
    
    gotHit = () => {
        if (this.hasStar === false) {
            this.status = this.status - 1;
                if (this.status === 0) {
                    this.gameActive = false;
                }
        } else {
            console.log (this.name + " is invincible!")
        }
    }
    
    gotPowerup = () => {
        if (this.status <= 2) {
            this.status = this.status + 1
        } else if (this.status === 3) {
            console.log("Yahoooo! You got a star!");
            this.hasStar = true;
            setTimeout(() => {
                console.log(this.name + " has lost their star")
                this.hasStar = false;
                this.status--;
            }, 10000)
        }
    }
    
    addCoin = () => {this.totalCoins++;}
    
    print = () => {console.log(`Name: ${this.name}\nStatus: ${this.statusOptions[this.status]}\nTotal Coins: ${this.totalCoins}\n`)}
}



const chance = () => {
    let action = Math.floor(Math.random() * 3)
    switch (action){
        case 0:
            player.gotHit()
            break
        case 1:
            player.gotPowerup()
            break
        case 2:
            player.addCoin()
            break
        default:
            console.log("Glitch in the Matrix, woops")
    }
    player.print()
        if (player.gameActive == false) {
            clearInterval(gameplay)
        }
}

const player = new Player({});
const gameplay = setInterval(chance, 1000)
player.setName();



