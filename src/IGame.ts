import { Board } from "./controllers/Board.js";
import { Word } from "./models/Word.js";

export interface IGame {
    secretWord: Word;
    userWord: Word;
    gameInterface: Board;
}