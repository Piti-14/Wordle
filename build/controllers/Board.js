import { MAX_WORD_SIZE } from "../env.js";
export class Board {
    writeLetter(attempt, cell, letter) {
        Array.from(document.getElementById(`row_${attempt}`).children)[cell].textContent = letter;
    }
    deleteLetter(attempt, cell) {
        Array.from(document.getElementById(`row_${attempt}`).children)[cell].textContent = "";
    }
    changeBackgroundCellColor(attempt, userWord) {
        debugger;
        let children = Array.from(document.getElementById(`row_${attempt}`).children);
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            let color = "cell-grey";
            if (userWord.letters[i].state == "rightLetter") {
                color = "cell-green";
            }
            if (userWord.letters[i].state == "misplacedLetter") {
                color = "cell-yellow";
            }
            children[i].classList.add(color);
        }
    }
    changeBackgroundKeyColor(userWord) {
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            userWord.letters.forEach(letter => {
                if (key.innerHTML == letter.letter && letter.letter !== "Enter" && letter.letter !== "Backspace") {
                    let keyColor = "";
                    switch (letter.state) {
                        case "wrongLetter":
                            keyColor = "keyPressed";
                            break;
                        case "rightLetter":
                            keyColor = "keyCorrect";
                            break;
                        case "misplacedLetter":
                            keyColor = "keyDiscovered";
                    }
                    key.classList.add(keyColor);
                }
            });
        }
    }
    win() { location.assign("/winner"); }
    lose() { location.assign("/loser"); }
}
