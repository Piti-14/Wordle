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

    get letters() {
        return this.#letters;
    }

    set letters(letters: Letter[]) {
        this.#letters = letters;
    }

    getWordLetters(): Letter[] {
        let letters: Letter[] = [];

        for (let letter of this.#word) {
            letters.push(new Letter(letter));
        }

        return letters;
    }
    
    clearChecks() {
        this.#letters.forEach(letter => letter.checked = false);
    }


    wordIsRight(userWord: string): boolean {
        return (userWord == this.#word)
    }

    check(otherWord: Word) { 
        otherWord.letters = otherWord.getWordLetters()
        
        for(let i = 0; i < MAX_WORD_SIZE; i++){
            if(this.#word.includes(otherWord.word[i])){
                if(this.#letters[i].letter == otherWord.letters[i].letter){
                    otherWord.letters[i].state = "rightLetter";
                    
                    otherWord.letters[i].checked = true;
                    this.#letters[i].checked = true;
                } else {
                    otherWord.letters[i].state = "misplacedLetter";
                }
            }
        }
        
        for(let i = 0; i < MAX_WORD_SIZE; i++){
            if(this.#word.includes(otherWord.word[i])){
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    
                    if(otherWord.letters[i].checked) break;

                    if(otherWord.letters[i].letter == this.#letters[j].letter){
                        if(this.#letters[j].checked){
                            otherWord.letters[i].state = "wrongLetter";
                        } else {
                            otherWord.letters[i].state = "misplacedLetter";
                            this.#letters[j].checked = true;
                            break;
                        }
                    }
                }
            }
        }
    }
}