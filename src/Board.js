const { Player } = require('./Player');
const Winner = require('pokersolver').Hand.winners;

class Board{
    constructor(player1Name = "player1", player2Name = "player2"){
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
        
    }

    winningHand(index){
        let p1Solve = this.player1.hands[index].solved;
        let p2Solve = this.player2.hands[index].solved;
        return Winner([p1Solve, p2Solve])[0] === p1Solve ? 1 : -1;
    }

    winner() {
        let p1Count = 0;
        for (let i = 0; i < 5; i++){
            p1Count += this.winningHand(i);
        }
        return p1Count > 0 ? 1 : -1;
    }
    gameEnded(){
        return this.player1.round === 6 && this.player2.round === 6;
    }
}

module.exports = { Board }  