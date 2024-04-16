import { MAX_WORD_SIZE } from "../env.js";
import { Word } from "../models/Word.js";

export class Board {

    writeLetter(attempt: number, cell: number, letter: string) {
        Array.from(document.getElementById(`row_${attempt}`)!.children)[cell].textContent = letter;
    }

    deleteLetter(attempt: number, cell: number) {
        Array.from(document.getElementById(`row_${attempt}`)!.children)[cell].textContent = "";
    }

    changeBackgroundCellColor(attempt: number, userWord: Word) {
        debugger
        
        let children = Array.from(document.getElementById(`row_${attempt}`)!.children)

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            let color = "cell-grey";
            
            if(userWord.letters[i].state == "rightLetter") {
                color = "cell-green";
            } 
            if(userWord.letters[i].state == "misplacedLetter") {
                color = "cell-yellow"
            }
            
            children[i].classList.add(color);
        }

    }

    changeBackgroundKeyColor(userWord: Word) {
        const keys = document.getElementsByClassName("key");

        for (let key of keys) {
            userWord.letters.forEach(letter => 
                {
                    if (key.innerHTML == letter.letter && letter.letter !== "Enter" && letter.letter !== "Backspace") {
                        let keyColor: string = "";

                        switch(letter.state){
                            case "wrongLetter":
                                keyColor = "keyPressed"
                                break;
                            case "rightLetter":
                                keyColor = "keyCorrect"
                                break;
                            case "misplacedLetter":
                                keyColor = "keyDiscovered"
                        }
                        key.classList.add(keyColor);
                    }
                }
            )
        }      
    }

    win(){ location.assign("/winner"); }

    lose(){ location.assign("/loser"); }
}