const {Card, VALUES, TYPES} = require('../src/Card');

// var Hand = require('pokersolver').Hand;

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

describe('Create card', () => {
    describe("as red 10 diamond", ()=>{
        beforeEach(()=>{
            this.card = new Card(VALUES[9], TYPES[1]);
        })
        it("should be 10d", () => {
            expect(this.card.toString()).toBe("10d");
        });
        it("should be red", () => {
            expect(this.card.color).toBe("r");
        });
    });
});

