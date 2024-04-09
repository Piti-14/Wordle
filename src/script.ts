import { Word } from "./Word.js";
import { Game } from "./Game.js";
import { Board } from "./Board.js";
import { WORDS } from "./Env.js";
import { WordPicker } from "./WordPicker.js";


const wordsCollection: string[] = WORDS;
const pickedWord = WordPicker.pickRandomWord(wordsCollection);

console.log(pickedWord);

const userInterface: Board = new Board()
const game: Game = new Game(pickedWord, userInterface);

Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => {game.newKeyPressed((<HTMLButtonElement>e.target).value);}));

document.addEventListener("keydown", (e) => {
    game.newKeyPressed(e.code);
});