import { Board } from "./Board.js";
import { MAX_ATTEMPTS, MAX_WORD_SIZE, VALID_LETTER_CODES } from "./env.js";
import { Word } from "./Word.js";

export class Game {

    #secretWord: Word
    #userWord: Word
    #attempt: number
    #actualPosition: number
    #validLetterCodes: string[]
    #userInterface: Board

    constructor(secretWord: Word, userWord: Word, userInterface: Board) {
        this.#secretWord = secretWord;
        this.#userWord = userWord;
        this.#attempt = 1;
        this.#actualPosition = 0;
        this.#validLetterCodes = VALID_LETTER_CODES;
        this.#userInterface = userInterface;
    }

    get secretWord() {
        return this.#secretWord;
    }
    set secretWord(word) {
        this.#secretWord = word;
    }

    get userWord() {
        return this.#userWord;
    }
    set userWord(word) {
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
            this.#userWord.word += letter;
        }
    }

    enterPressed(): void {
        if (this.#userWord.word.length >= MAX_WORD_SIZE) {
            if(this.#secretWord.wordIsRight(this.#userWord.word)){
                this.#userInterface.win();
            }

            if (this.turn == MAX_ATTEMPTS) {
                this.#userInterface.lose();
            }

            this.#secretWord.check(this.#userWord);
            
            this.updateLetterColors();
            this.updateAfterANewWord();
        }
    }

    backspacePressed(): void {
        if (this.#actualPosition > 0) {
            this.#userWord.word = this.#userWord.word.slice(0, -1)
            this.#actualPosition -= 1;
            this.#userInterface.deleteLetter(this.#attempt, this.#actualPosition);
        }
    }
    //Poner aquí métodos para cambiar el color del teclado en pantalla
    updateLetterColors(){
        this.#userInterface.changeBackgroundCellColor(this.#attempt, this.#userWord)

        //this.#userInterface.changeBackgroundKeyColor()
    }

    updateAfterANewWord = (): void => {
        //Word es quien checkea las letras!
        /* this.#secretWord.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters(); */
        this.#attempt = this.#attempt + 1;
        this.#actualPosition = 0;
        this.#userWord.word = "";
    } 
}