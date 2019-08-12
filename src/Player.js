const { Hand } = require('./Hand');


class Player{
    constructor(name){
        this.hands = [
            new Hand(),
            new Hand(),
            new Hand(),
            new Hand(),
            new Hand()
        ],
        this.round = 1;
        this.name = name;
    }

    addCard(card, handIndex){
        let hand = this.hands[handIndex];
        if (hand.count < this.round){
            hand.addCard(card);
            this.roundUp();
        }
    }

    roundUp(){
        if (this.hands.every(hand=> hand.count === this.round)){
            this.round++;
        }
    }
}

module.exports = { Player }