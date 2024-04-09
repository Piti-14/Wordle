import { MAX_WORD_SIZE } from "./env.js";
export class Board {
    writeLetter(attempt, cell, letter) {
        Array.from(document.getElementById(`row_${attempt}`).children)[cell].textContent = letter;
    }
    deleteLetter(attempt, cell) {
        Array.from(document.getElementById(`row_${attempt}`).children)[cell].textContent = "";
    }
    changeBackgroundCellColor(attempt, cell, userWord) {
        let color = "cell-grey";
        let children = Array.from(document.getElementById(`row_${attempt}`).children);
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (userWord.getWordLetters()[i].state == "rightLetter") {
                color = "cell-green";
            }
            if (userWord.getWordLetters()[i].state == "misplacedLetter") {
                color = "cell-orange";
            }
            children[i].classList.add(color);
        }
    }
    changeBackgroundKeyColor(code) {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add("keyPressed");
            }
        }
    }
    win() { location.assign("/winner"); }
    lose() { location.assign("/loser"); }
}
