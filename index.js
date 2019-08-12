const { Board } = require('./src/Board');
const { Player } = require('./src/Player');
const { Hand } = require('./src/Hand');
const CardData = require('./src/Card');

export { default as Board } from './src/Board';
export { default as Player } from './src/Player';
export { default as Hand } from './src/Hand';
export { default as CardData } from './src/Card';



module.exports = {
    Board, Player, Hand, CardData
};