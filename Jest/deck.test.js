const { Deck } = require('../src/Deck');

// var Hand = require('pokersolver').Hand;

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

describe('Create Deck', () => {
    beforeEach(() => {
        this.deck = new Deck();
    })

    it("should have 52 cards", () => {
        expect(this.deck.count).toBe(52);
        expect(this.deck.cards.length).toBe(52);
    });
    describe("pick card", ()=>{
        beforeEach(()=>{
            this.pickedCard = this.deck.pickCard();
        })
        it("should have 51 cards", () => {
            expect(this.deck.count).toBe(51);
        });
        it("should be sorted, first card should be Ace of spade", ()=>{
            expect(this.pickedCard.toString()).toBe("As");
        });
    });
    describe("shuffle", ()=>{
        beforeEach(() => {
            this.shuffledCards = this.deck.shuffle(this.deck.cards);
            this.deck.setCards(this.shuffledCards);
            this.pickedCard = this.deck.pickCard();
        });
        it("should be shuffled, first card shuold not be Ace spades", () => {
            expect(this.pickedCard.toString()).not.toBe("As");
        });
    })
    describe("init", () => {
        beforeEach(() => {
            this.deck.init();
        });
        it("shuold have an 52 deck cards shuffled", () => {
            expect(this.deck.count).toBe(52);
            let pickedCard = this.deck.pickCard();
            expect(pickedCard.toString()).not.toBe("As");
        })
    })
});
