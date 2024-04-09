export class Key {
    newKeyPressed(code) {
        if (this..includes(code) && this. < MAX_WORD_SIZE) {
            this.newLetter(code);
        }
        if (code == "Enter") {
            this.enterPressed();
        }
        if (code == "Backspace") {
            this.backspacePressed();
        }
        this..changeBackgroundKeyColor(code);
    }
    enterPressed() {
        if (this..length >= MAX_WORD_SIZE) {
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }
    backspacePressed() {
        if (this. > 0) {
            this. = this..slice(0, -1);
            this. -= 1;
            this..deleteLetter(this., this.);
        }
    }
}
