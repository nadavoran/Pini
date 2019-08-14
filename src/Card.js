const utils = require("./Utils");

class Card{
    constructor(value, type){
        this.valueString = value;
        this.val = utils.VALUES[value];
        this.typeString = type;
        this.color = utils.COLOR[utils.TYPES.indexOf(type) < 2 ? 0 : 1];
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
    Card, VALUES: utils.VALUES, TYPES: utils.TYPES
}