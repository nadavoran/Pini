
const { Card, VALUES, TYPES } = require('../src/Card');
function fillPlayers(player1, player2){
    //1 - round1
    player1.addCard(new Card("A", "d"), 0);
    player1.addCard(new Card("T", "d"), 1);
    player1.addCard(new Card("9", "d"), 2);
    player1.addCard(new Card("8", "d"), 3);
    player1.addCard(new Card("7", "d"), 4);
    //1 - round2
    player1.addCard(new Card("A", "s"), 0);
    player1.addCard(new Card("T", "s"), 1);
    player1.addCard(new Card("9", "s"), 2);
    player1.addCard(new Card("8", "s"), 3);
    player1.addCard(new Card("7", "s"), 4);
    //1 - round3
    player1.addCard(new Card("J", "s"), 0);
    player1.addCard(new Card("2", "s"), 1);
    player1.addCard(new Card("3", "s"), 2);
    player1.addCard(new Card("4", "s"), 3);
    player1.addCard(new Card("5", "s"), 4);
    //1 - round4
    player1.addCard(new Card("Q", "d"), 0);
    player1.addCard(new Card("2", "d"), 1);
    player1.addCard(new Card("3", "d"), 2);
    player1.addCard(new Card("4", "d"), 3);
    player1.addCard(new Card("5", "d"), 4);
    //1 - round5
    player1.addCard(new Card("Q", "h"), 0);
    player1.addCard(new Card("6", "c"), 1);
    player1.addCard(new Card("J", "c"), 2);
    player1.addCard(new Card("K", "c"), 3);
    player1.addCard(new Card("6", "h"), 4);
    //['Ad', 'As', 'Jd', 'Qs', 'Qd'];

    //2 - round1
    player2.addCard(new Card("A", "c"), 0);
    player2.addCard(new Card("T", "c"), 1);
    player2.addCard(new Card("9", "c"), 2);
    player2.addCard(new Card("8", "c"), 3);
    player2.addCard(new Card("7", "c"), 4);
    //2 - round2
    player2.addCard(new Card("A", "h"), 0);
    player2.addCard(new Card("T", "h"), 1);
    player2.addCard(new Card("9", "h"), 2);
    player2.addCard(new Card("8", "h"), 3);
    player2.addCard(new Card("7", "h"), 4);
    //2 - round3
    player2.addCard(new Card("J", "h"), 0);
    player2.addCard(new Card("2", "c"), 1);
    player2.addCard(new Card("3", "c"), 2);
    player2.addCard(new Card("4", "c"), 3);
    player2.addCard(new Card("5", "c"), 4);
    //2 - round4
    player2.addCard(new Card("6", "h"), 0);
    player2.addCard(new Card("2", "h"), 1);
    player2.addCard(new Card("3", "h"), 2);
    player2.addCard(new Card("4", "h"), 3);
    player2.addCard(new Card("5", "h"), 4);
    //2 - round5
    player2.addCard(new Card("Q", "s"), 0);
    player2.addCard(new Card("6", "d"), 1);
    player2.addCard(new Card("J", "d"), 2);
    player2.addCard(new Card("K", "d"), 3);
    player2.addCard(new Card("6", "s"), 4);
    // ['Ac', 'Ah', 'Jc', '3c', 'Kd']
}

module.exports = {
    fillPlayers
}