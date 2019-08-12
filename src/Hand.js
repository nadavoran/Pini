const SolveHand = require('pokersolver').Hand;

class Hand{
    constructor(){
        this.cards = [];
    }

    addCard(card){
        if (this.cards.length < 5) {
            return this.cards.push(card);
        }
    }
    get count(){
        return this.cards.length;
    }

    get solved(){
        if (!this.solve){
            if (this.count < 5){
                return {name: `missing ${5 - this.count}`};
            }
            this.solve = SolveHand.solve(this.cards.map(card=>{
                return card.value + card.type;
            }));
        }
        return this.solve;
    }
    toString(){
        return this.solved.name;
    }
}

module.exports = {Hand};