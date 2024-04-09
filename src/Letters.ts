 
export class Letter{

    #letter: string;

    constructor(letter: string) {
        this.#letter = letter;
    }

    getLetter(): string {
        return this.#letter;
    }
}
/*    
    newLetter(code: string): void {
        let letter: string = (code == "Semicolon")? "Ñ" : code.split("y")[1];
        
        this.#userInterface.writeLetter(this.turn, this.actualPosition, letter);
        this.#actualPosition++;
        this.#userWord += letter;
    }  

    checkRightLetters = (): void => {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (this.#secretWord[i] == this.#userWord[i]) {
                this.#userInterface.changeBackgroundCellColor(this.#attempt, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters = (): void => {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;
            actualLetter = this.#userWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidencesPickedWord = (this.#secretWord.match(pattern) || []).length;
            numberOfCoincidencesActualWord = (this.#userWord.match(pattern) || []).length;
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if (differenceOfCoincidences == 1) {
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    if (this.#secretWord[j] == actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }

            if (differenceOfCoincidences == 0 && this.#secretWord[i] == this.#userWord[i]) {
                isMisplacedLetter = false;
            }

            if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) {
                this.#userInterface.changeBackgroundCellColor(this.#attempt, i, "misplacedLetter");
            }
        }
    }

    checkWrongLetters = (): void => {
        let actualLetter = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this.#userWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidencesPickedWord = (this.#secretWord.match(pattern) || []).length;

            if (numberOfCoincidencesPickedWord == 0) {
                this.#userInterface.changeBackgroundCellColor(this.#attempt, i, "wrongLetter");
            }
        }
    }
} */