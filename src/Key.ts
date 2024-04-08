export class Key{

    newKeyPressed(code: string): void {
        if (this.#validLetterCodes.includes(code) && this.#actualPosition < MAX_WORD_SIZE) { this.newLetter(code); }

        if (code == "Enter") { this.enterPressed(); }
        
        if (code == "Backspace") { this.backspacePressed(); }
        
        this.#userInterface.changeBackgroundKeyColor(code);
    }

    enterPressed(): void {
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
    }
}