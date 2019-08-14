const Utils = require("./Utils");
const { Card } = require("./Card");

class Deck {
    constructor(){
        this.cards = this.createCards();
        this.lastIndex = this.cards.length;
    }
    init(){
        this.cards = this.shuffle(this.cards);
        this.lastIndex = this.cards.length;
    }
    createCards() {
        let res = [];
        Utils.VALUES.forEach((value, index) => {
            if (!index) return;
            Utils.TYPES.forEach(type => {
                res.push(new Card(value, type));
            });
        });
        return res;
    }
    shuffle(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }
    pickCard(){
        return this.cards[--this.lastIndex];
    }
    get count(){
        return this.lastIndex;
    }
    setCards(cards){
        this.cards = cards;
        this.lastIndex = this.cards.length;
    }
}

module.exports = { Deck }