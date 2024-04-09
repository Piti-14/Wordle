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

    newLetter(code: string): void {
        if(this.#actualPosition < MAX_WORD_SIZE){
            let letter: string = (code == "Semicolon")? "Ñ" : code.split("y")[1];
        
            this.#userInterface.writeLetter(this.turn, this.actualPosition, letter);
            this.#actualPosition++;
            this.#userWord += letter;
        }
    }

    //Poner aquí métodos para cambiar el color del teclado en pantalla
    updateLetterColors(){

    }

    

    updateAfterANewWord = (): void => {
        //Word es quien checkea las letras!
        /* this.#secretWord.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters(); */
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
            this.#secretWord.checkWordIsRight(this.#userWord);
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