import { Word } from "../models/Word.js";
import { Game } from "../models/Game.js";
import { Board } from "./Board.js";
import { WORDS } from "../env.js";
import { WordPicker } from "./WordPicker.js";
import { Key } from "../models/Key.js";


const secretWord = new Word(WordPicker.pickRandomWord(WORDS));
const userWord = new Word("");
const userInterface: Board = new Board();
const game: Game = new Game(secretWord, userWord, userInterface);

console.log(secretWord);

const keyboard: Key = new Key(game);

Array.from(document.getElementsByClassName("key")).forEach(element =>
    element.addEventListener("click", (e) => { keyboard.newKeyPressed((<HTMLButtonElement>e.target).value); }));

document.addEventListener("keydown", (e) => {
    keyboard.newKeyPressed(e.code);
});