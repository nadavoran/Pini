// const sum = require('../test');

var Hand = require('pokersolver').Hand;

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

describe('test 2 hands', ()=>{
    it("should win", ()=>{
        var hand1 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', '3c', 'Kd']);
        var hand2 = Hand.solve(['Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']);
        var winner = Hand.winners([hand1, hand2]); // hand2
        // console.log(winner);
        expect(winner[0]).toBe(hand2);
    })
});

