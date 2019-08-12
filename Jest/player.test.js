const { Player} = require('../src/Player');

// var Hand = require('pokersolver').Hand;

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

describe('Create Player', () => {
    beforeEach(()=>{
        this.player = new Player("player1");
    })
    it("should have 5 hands", () => {
        expect(this.player.hands.length).toBe(5);
    });
    it("should be named palyer1", () => {
        expect(this.player.name).toBe("player1");
    });
    it("should start at round 1", () => {
        expect(this.player.round).toBe(1);
    });
    it("should first hand 0", () => {
        expect(this.player.hands[0].count).toBe(0);
    });
    describe("add cards", () => {
        beforeEach(() => {
            this.player.addCard(new Card("A", "diams"), 0);
        })
        it("should add card to first hand", ()=>{
            expect(this.player.hands[0].count).toBe(1);
        });
        it("should prevent from adding 2 cards to first hand", () => {
            this.player.addCard(new Card("A", "clubs"), 0);
            expect(this.player.hands[0].count).not.toBe(2);
        });
        it("should prevent from adding 2 cards to first hand", () => {
            expect(this.player.addCard(new Card("A", "clubs"), 0)).toBeFalsy();
            expect(this.player.round).toBe(1);
        });
        describe("add 5 cards", ()=>{
            it("should add to each hand and promote round", () => {
                this.player.addCard(new Card("A", "clubs"), 0);
                this.player.addCard(new Card("10", "clubs"), 1);
                this.player.addCard(new Card("9", "clubs"), 2);
                this.player.addCard(new Card("8", "clubs"), 3);
                this.player.addCard(new Card("7", "clubs"), 4);
                expect(this.player.round).toBe(2);
            });
            it("should not promote round if 2 cards go to same hands ", () => {
                this.player.addCard(new Card("A", "clubs"), 0);
                this.player.addCard(new Card("10", "clubs"), 1);
                this.player.addCard(new Card("9", "clubs"), 2);
                this.player.addCard(new Card("8", "clubs"), 3);
                this.player.addCard(new Card("7", "clubs"), 0);
                expect(this.player.round).not.toBe(2);
            });
        });
    })
});

