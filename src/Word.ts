import { MAX_WORD_SIZE } from "./env.js";
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
        let otherLetters = otherWord.getWordLetters()

        for(let i = 0; i < MAX_WORD_SIZE; i++){
            if(this.#word.includes(otherWord.word[i])){
                if(this.#letters[i] == otherLetters[i]){
                    otherLetters[i].state = "rightLetter";
                } else {
                    otherLetters[i].state = "misplacedLetter";
                }
            }
        }
    }
}