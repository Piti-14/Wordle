import { MAX_WORD_SIZE } from "./env.js";
import { Word } from "./Word.js";

export class Board {
    writeLetter(attempt: number, cell: number, letter: string) {
        Array.from(document.getElementById(`row_${attempt}`)!.children)[cell].textContent = letter;
    }

    deleteLetter(attempt: number, cell: number) {
        Array.from(document.getElementById(`row_${attempt}`)!.children)[cell].textContent = "";
    }

    changeBackgroundCellColor(attempt: number, cell: number, userWord: Word) {
        let color = "cell-grey";

        let children = Array.from(document.getElementById(`row_${attempt}`)!.children)

        //Cambiar por interface
        for (let i = 0; i < MAX_WORD_SIZE; i++) {

            (userWord.getWordLetters()[i].state == "rightLetter")? color = "cell-green" : color = "cell-orange";
            
            children[i].classList.add(color);
        }

    }

    changeBackgroundKeyColor(code: string) {
        const keys: any = document.getElementsByClassName("key");

        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !== "Backspace") {
                key.classList.add("keyPressed");
            }
        }
    }

    win(){ location.assign("/winner"); }

    lose(){ location.assign("/loser"); }
}