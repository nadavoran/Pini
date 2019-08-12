const { Board } = require('./Board');
const { Player } = require('./Player');
const { Hand } = require('./Hand');
const CardData = require('./Card');

export { default as Board } from './Board';
export { default as Player } from './Player';
export { default as Hand } from './Hand';
export { default as CardData } from './Card';



module.exports = {
    Board, Player, Hand, CardData
};