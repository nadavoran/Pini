
const VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const valuesIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const TYPES = ["h", "d", "c", "s"]; // red, red, black, black
const COLOR = ["r", "b"];

class Card{
    constructor(value, type){
        this.value = value;
        this.val = VALUES[value];
        this.type = type;
        this.color = COLOR[TYPES.indexOf(type) < 2 ? 0 : 1];
    }

    get valueString(){
        return this.value === "T" ? "10" : this.value; 
    }

    toString(){
        return this.valueString + this.type;
    }
}

module.exports = {
    Card, VALUES, TYPES
}