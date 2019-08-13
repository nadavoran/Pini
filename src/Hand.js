const SolveHand = require('pokersolver').Hand;

class Hand{
    constructor(){
        this.cards = new Set();
    }

    addCard(card){
        if (this.cards.size < 5) {
            return this.cards.add(card);
        }
    }
    get count(){
        return this.cards.size;
    }

    get solved(){
        if (!this.solve){
            if (this.count < 5){
                return {name: `missing ${5 - this.count}`};
            }
            let mappedValues = [];
            this.cards.forEach(card => {
                mappedValues.push(card.value + card.type);
            })
            this.solve = SolveHand.solve(mappedValues);
        }
        return this.solve;
    }
    toString(){
        return this.solved.name;
    }
}

module.exports = {Hand};