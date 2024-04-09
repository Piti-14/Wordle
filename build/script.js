import { Word } from "./Word.js";
import { Game } from "./Game.js";
import { Board } from "./Board.js";
import { WORDS } from "./Env.js";
const wordsCollection = new Word(WORDS);
const pickedWord = wordsCollection.getRandomWord();
console.log(pickedWord);
const userInterface = new Board();
const game = new Game(pickedWord, userInterface);
Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => { game.newKeyPressed(e.target.value); }));
document.addEventListener("keydown", (e) => {
    game.newKeyPressed(e.code);
});
