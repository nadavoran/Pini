const {Hand} = require('../src/Hand');
const {Card, VALUES, TYPES} = require('../src/Card');

// var Hand = require('pokersolver').Hand;

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

describe('Create Hand', () => {
    beforeEach(() => {
        this.hand = new Hand();
    });
    it("should be empty", () => {

        expect(this.hand.count).toBe(0);
    });
    describe("hand with 1 card", () => {
        beforeEach(() => {
            this.card = new Card(VALUES[9], TYPES[1]);
        })
        it("should add 1 card succesfull", () => {
            expect(this.hand.addCard(this.card)).toBeTruthy();
        });
        it("should add 1 card", () => {
            this.hand.addCard(this.card);
            expect(this.hand.count).toBe(1);
        });
    });
    describe("hand with 5 cards", () => {
        beforeEach(() => {
            for (let i = 0; i< 5; i++){
                this.hand.addCard(new Card(VALUES[i], TYPES[i%4]));
            }
        })
        it("should have 5 cards", () => {
            expect(this.hand.count).toBe(5);
        });
        it("should prevent adding more than 5", ()=>{
            expect(this.hand.addCard(new Card("A", "diams"))).toBeFalsy();
        })
    });
    describe("resolve hand", () => {
        it("should miss 5 cards", () => {
            expect(this.hand.solved.name).toBe("missing 5");
        });
        it("should miss 4 cards", () => {
            this.hand.addCard(new Card(VALUES[9], TYPES[2]));
            expect(this.hand.solved.name).toBe("missing 4");
        });
        it("should be Two Pair", () => {
            // 'Ad', 'As', 'Jc', 'Th', '2d', 'Qs', 'Qd']
            this.hand.addCard(new Card("A","diams"));
            this.hand.addCard(new Card("A","spades"));
            this.hand.addCard(new Card("Q","spades"));
            this.hand.addCard(new Card("10","hearts"));
            this.hand.addCard(new Card("Q","diams"));
            expect(this.hand.solved.name).toBe("Two Pair");
        });
    });
});
