import { MAX_WORD_SIZE } from "../env.js";
import { Letter } from "./Letter.js";

export class Word {

    #word: string;
    #letters: Letter[];

    constructor(word: string) {
        this.#word = word;
        this.#letters = this.getWordLetters();
    }

    get word() {
        return this.#word;
    }

    set word(word: string) {
        this.#word = word;
    }

    get letters(){
        return this.#letters;
    }

    set letters(letters: Letter[]){
        this.#letters = letters;
    }

    getWordLetters(): Letter[] {
        let letters: Letter[] = [];

        for (let letter of this.#word) {
            letters.push(new Letter(letter));
        }

        return letters;
    }

    wordIsRight(userWord: string): boolean {
        return (userWord == this.#word)
    }

    check(otherWord: Word) { 
        otherWord.letters = otherWord.getWordLetters()
        //debugger
        for(let i = 0; i < MAX_WORD_SIZE; i++){
            if(this.#word.includes(otherWord.word[i])){
                if(this.#letters[i].letter == otherWord.letters[i].letter){
                    otherWord.letters[i].state = "rightLetter";
                } else {
                    otherWord.letters[i].state = "misplacedLetter";
                }
            }
        }
    }
}