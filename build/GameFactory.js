import { Board } from "./controllers/Board.js";
import { WordPicker } from "./controllers/WordPicker.js";
import { WORDS } from "./env.js";
import { Game } from "./models/Game.js";
import { Word } from "./models/Word.js";
export class GameFactory {
    createBasicGame() {
        const secretWord = new Word(WordPicker.pickRandomWord(WORDS));
        const userWord = new Word("");
        const gameInterface = new Board();
        const game = new Game(secretWord, userWord, gameInterface);
        console.log(secretWord);
        return game;
    }
    createDifficultGame() {
        throw new Error("Method not implemented.");
    }
}
