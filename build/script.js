import { Word } from "./models/Word.js";
import { Game } from "./models/Game.js";
import { Board } from "./controllers/Board.js";
import { WORDS } from "./env.js";
import { WordPicker } from "./controllers/WordPicker.js";
import { Key } from "./models/Key.js";
const secretWord = new Word(WordPicker.pickRandomWord(WORDS));
const userWord = new Word("");
const userInterface = new Board();
const game = new Game(secretWord, userWord, userInterface);
console.log(secretWord);
const keyboard = new Key(game);
Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => { keyboard.newKeyPressed(e.target.value); }));
document.addEventListener("keydown", (e) => {
    keyboard.newKeyPressed(e.code);
});
