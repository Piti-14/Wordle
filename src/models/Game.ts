import { Board } from "../controllers/Board.js";
import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "../env.js";
import { IGame } from "../IGame.js";
import { INoticeable } from "../INoticeable.js";
import { Word } from "./Word.js";

export class Game implements INoticeable, IGame{

    #secretWord: Word
    #userWord: Word
    #gameInterface: Board
    #attempt: number
    #actualPosition: number
    
    constructor(secretWord: Word, userWord: Word, gameInterface: Board) {
        this.#secretWord = secretWord;
        this.#userWord = userWord;
        this.#gameInterface = gameInterface;
        this.#attempt = 1;
        this.#actualPosition = 0;
    }
    
    notifyLetter(code: string): void {
        throw new Error("Method not implemented.");
    }

    notifyKey(name: string): void {
        throw new Error("Method not implemented.");
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

    get gameInterface() {
        return this.#gameInterface;
    }
    set gameInterface(i) {
        this.#gameInterface = i;
    }

    newLetter(code: string): void {
        if(this.#actualPosition < MAX_WORD_SIZE){
            
            let letter: string = (code == "Semicolon")? "Ñ" : code.split("y")[1];
        
            this.#gameInterface.writeLetter(this.turn, this.actualPosition, letter);
            this.#actualPosition++;
            this.#userWord.word += letter;
        }
    }

    enterPressed(): void {
        if (this.#userWord.word.length >= MAX_WORD_SIZE) {
            if(this.#secretWord.wordIsRight(this.#userWord.word)){
                this.#gameInterface.win();
            } else if (this.turn >= MAX_ATTEMPTS) {
                this.#gameInterface.lose();
            }

            this.#secretWord.clearChecks();
            this.#secretWord.check(this.#userWord);
            
            this.updateLetterColors();
            
            this.#attempt++;
            this.#actualPosition = 0;
            this.#userWord.word = "";
        }
    }

    backspacePressed(): void {
        if (this.#actualPosition > 0) {
            this.#userWord.word = this.#userWord.word.slice(0, -1)
            this.#actualPosition -= 1;
            this.#gameInterface.deleteLetter(this.#attempt, this.#actualPosition);
        }
    }

    updateLetterColors(){
        this.#gameInterface.changeBackgroundCellColor(this.#attempt, this.#userWord)

        this.#gameInterface.changeBackgroundKeyColor(this.#userWord)
    } 
}