const { Board } = require('../src/Board');
const { fillPlayers } = require('./testUtils');

describe('Create Board', () => {
    beforeEach(() => {
        this.board = new Board("test1", "test2");
    });
    it("should have palyer 1", () => {
        expect(this.board.player1).toBeDefined();
    });
    it("should have palyer 1, name test1", () => {
        expect(this.board.player1.name).toBe("test1");
    });
    it("should have palyer 2", () => {
        expect(this.board.player2).toBeDefined();
    });
    it("should have palyer 2, name test2", () => {
        expect(this.board.player2.name).toBe("test2");
    });

    describe("test hands", ()=>{
        it("player 1 shuold win hand 0", ()=>{
            fillPlayers(this.board.player1, this.board.player2);
            let winner = this.board.winningHand(0);
            expect(winner).toBe(1);
        });
    });

    describe("test final hands", () => {
        it("player 1 shuold win", () => {
            fillPlayers(this.board.player1, this.board.player2);
            let winner = this.board.winner();
            expect(winner).toBe(1);
        });
    });
});