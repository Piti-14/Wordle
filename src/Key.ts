import { VALID_LETTER_CODES } from "./Env";
import { Game } from "./Game";

export class Key{
    
    #gameInstance: Game
    
    constructor(game: Game){
        this.#gameInstance = game;
    }

    newKeyPressed(code: string): void {
        if (VALID_LETTER_CODES.includes(code)) { this.#gameInstance.newLetter(code); }

        if (code == "Enter") { this.#gameInstance.enterPressed(); }
        
        if (code == "Backspace") { this.#gameInstance.backspacePressed(); }
        
       // this.#userInterface.changeBackgroundKeyColor(code);
    }

    /* enterPressed(): void {
        if (this.#userWord.length >= MAX_WORD_SIZE) {
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    backspacePressed(): void {
        if (this.#actualPosition > 0) {
            this.#userWord = this.#userWord.slice(0, -1)
            this.#actualPosition -= 1;
            this.#userInterface.deleteLetter(this.#attempt, this.#actualPosition);
        }
    } */
}