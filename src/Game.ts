import { Board } from "./Board.js";
import { MAX_WORD_SIZE, MAX_ATTEMPTS, VALID_LETTER_CODES } from "./Env.js";
import { Word } from "./Word.js";

export class Game {

    #secretWord: Word
    #userWord: string
    #attempt: number
    #actualPosition: number
    #validLetterCodes: string[]
    #userInterface: Board

    constructor(secretWord: Word, userInterface: Board) {
        this.#secretWord = secretWord;
        this.#userWord = "";
        this.#attempt = 1;
        this.#actualPosition = 0;
        this.#validLetterCodes = VALID_LETTER_CODES;
        this.#userInterface = userInterface;
    }

    get pickedWord() {
        return this.#secretWord;
    }
    set pickedWord(word) {
        this.#secretWord = word;
    }

    get actualWord() {
        return this.#userWord;
    }
    set actualWord(word) {
        this.#userWord = word;
    }

    get turn() {
        return this.#attempt;
    }
    set turn(num) {
        this.#attempt = num;
    }

    get actualPosition() {
        return this.#actualPosition;
    }
    set actualPosition(num) {
        this.#actualPosition = num;
    }

    get validLetterCodes() {
        return this.#validLetterCodes
    }
    set validLetterCodes(letters) {
        this.#validLetterCodes = letters;
    }

    get interface() {
        return this.#userInterface;
    }
    set interface(i) {
        this.#userInterface = i;
    }

/*     newKeyPressed(code: string): void {
        if (this.#validLetterCodes.includes(code) && this.#actualPosition < MAX_WORD_SIZE) { this.newLetter(code); }

        if (code == "Enter") { this.enterPressed(); }
        
        if (code == "Backspace") { this.backspacePressed(); }
        
        this.#userInterface.changeBackgroundKeyColor(code);
    }*/

    newLetter(code: string): void {
        let letter: string = (code == "Semicolon")? "Ñ" : code.split("y")[1];
        
        this.#userInterface.writeLetter(this.turn, this.actualPosition, letter);
        this.#actualPosition++;
        this.#userWord += letter;
    }
    //Poner aquí métodos para cambiar el color del teclado en pantalla

   /* checkWordIsRight(): void {
        if (this.#userWord == this.#secretWord) {
            location.assign("/winner");
        }
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
    } */

    updateAfterANewWord = (): void => {
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this.#attempt = this.#attempt + 1;
        this.#actualPosition = 0;
        this.#userWord = "";
    }

     checkGameIsOver(): void {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
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