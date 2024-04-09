import { Word } from "./Word.js";
import { Game } from "./Game.js";
import { Board } from "./Board.js";
import { WORDS } from "./Env.js";
import { WordPicker } from "./WordPicker.js";
import { Key } from "./Key.js";


const wordsCollection: string[] = WORDS;
const pickedWord = WordPicker.pickRandomWord(wordsCollection);

console.log(pickedWord);

const secretWord = new Word(pickedWord);
const userInterface: Board = new Board();
const game: Game = new Game(secretWord, userInterface);

const keyboard: Key = new Key(game);

Array.from(document.getElementsByClassName("key")).forEach(element => 
    element.addEventListener("click", (e) =>
        {keyboard.newKeyPressed((<HTMLButtonElement>e.target).value);}));

document.addEventListener("keydown", (e) => {
    keyboard.newKeyPressed(e.code);
});