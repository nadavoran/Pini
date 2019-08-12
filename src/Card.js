
const VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const valuesIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const TYPES = ["hearts", "diams", "clubs", "spades"]; // red, red, black, black
const COLOR = ["r", "b"];

class Card{
    constructor(value, type){
        this.valueString = value;
        this.val = VALUES[value];
        this.typeString = type;
        this.color = COLOR[TYPES.indexOf(type) < 2 ? 0 : 1];
    }

    get value(){
        return this.valueString === "10" ? "T" : this.valueString; 
    }
    get type() {
        return this.typeString.substring(0,1);
    }

    toString(){
        return this.valueString + this.type;
    }
}

module.exports = {
    Card, VALUES, TYPES
}