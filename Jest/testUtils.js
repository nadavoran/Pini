
const { Card, VALUES, TYPES } = require('../src/Card');
function fillPlayers(player1, player2){
    //1 - round1
    player1.addCard(new Card("A", "diams"), 0);
    player1.addCard(new Card("10", "diams"), 1);
    player1.addCard(new Card("9", "diams"), 2);
    player1.addCard(new Card("8", "diams"), 3);
    player1.addCard(new Card("7", "diams"), 4);
    //1 - round2
    player1.addCard(new Card("A", "spades"), 0);
    player1.addCard(new Card("10", "spades"), 1);
    player1.addCard(new Card("9", "spades"), 2);
    player1.addCard(new Card("8", "spades"), 3);
    player1.addCard(new Card("7", "spades"), 4);
    //1 - round3
    player1.addCard(new Card("J", "spades"), 0);
    player1.addCard(new Card("2", "spades"), 1);
    player1.addCard(new Card("3", "spades"), 2);
    player1.addCard(new Card("4", "spades"), 3);
    player1.addCard(new Card("5", "spades"), 4);
    //1 - round4
    player1.addCard(new Card("Q", "diams"), 0);
    player1.addCard(new Card("2", "diams"), 1);
    player1.addCard(new Card("3", "diams"), 2);
    player1.addCard(new Card("4", "diams"), 3);
    player1.addCard(new Card("5", "diams"), 4);
    //1 - round5
    player1.addCard(new Card("Q", "hearts"), 0);
    player1.addCard(new Card("6", "clubs"), 1);
    player1.addCard(new Card("J", "clubs"), 2);
    player1.addCard(new Card("K", "clubs"), 3);
    player1.addCard(new Card("6", "hearts"), 4);
    //['Ad', 'As', 'Jd', 'Qs', 'Qd'];

    //2 - round1
    player2.addCard(new Card("A", "clubs"), 0);
    player2.addCard(new Card("10", "clubs"), 1);
    player2.addCard(new Card("9", "clubs"), 2);
    player2.addCard(new Card("8", "clubs"), 3);
    player2.addCard(new Card("7", "clubs"), 4);
    //2 - round2
    player2.addCard(new Card("A", "hearts"), 0);
    player2.addCard(new Card("10", "hearts"), 1);
    player2.addCard(new Card("9", "hearts"), 2);
    player2.addCard(new Card("8", "hearts"), 3);
    player2.addCard(new Card("7", "hearts"), 4);
    //2 - round3
    player2.addCard(new Card("J", "hearts"), 0);
    player2.addCard(new Card("2", "clubs"), 1);
    player2.addCard(new Card("3", "clubs"), 2);
    player2.addCard(new Card("4", "clubs"), 3);
    player2.addCard(new Card("5", "clubs"), 4);
    //2 - round4
    player2.addCard(new Card("6", "hearts"), 0);
    player2.addCard(new Card("2", "hearts"), 1);
    player2.addCard(new Card("3", "hearts"), 2);
    player2.addCard(new Card("4", "hearts"), 3);
    player2.addCard(new Card("5", "hearts"), 4);
    //2 - round5
    player2.addCard(new Card("Q", "spades"), 0);
    player2.addCard(new Card("6", "diams"), 1);
    player2.addCard(new Card("J", "diams"), 2);
    player2.addCard(new Card("K", "diams"), 3);
    player2.addCard(new Card("6", "spades"), 4);
    // ['Ac', 'Ah', 'Jc', '3c', 'Kd']
}

module.exports = {
    fillPlayers
}