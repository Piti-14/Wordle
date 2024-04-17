import { Board } from "./controllers/Board.js";
import { WordPicker } from "./controllers/WordPicker.js";
import { WORDS } from "./env.js";
import { IGameFactory } from "./IGameFactory.js";
import { Game } from "./models/Game.js";
import { Word } from "./models/Word.js";

export class GameFactory implements IGameFactory{
    
    createBasicGame(): Game {
        const secretWord = new Word(WordPicker.pickRandomWord(WORDS));
        const userWord = new Word("");
        const gameInterface: Board = new Board();
        const game: Game = new Game(secretWord, userWord, gameInterface);

        console.log(secretWord);

        return game;
    }

    createDifficultGame(): Game {
        throw new Error("Method not implemented.");
    }
}