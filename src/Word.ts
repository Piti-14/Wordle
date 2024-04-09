import { Letter } from "./Letters";

export class Word {

    #word: string;
    #letters: Letters;

    constructor(word: string) {
        this.#word = word;
        this.#letters = getWordLetters();
    }

    get word() {
        return this.#word;
    }

    set word(word: string) {
        this.#word = word;
    }

    repeatedLetters(): void {
        for(let letter of this.#word){

        }
    }

    checkWordIsRight(userWord: string): void {
        if (userWord == this.#word) {
            location.assign("/winner");
        }
    }

    getWordLetters(): Letters {
        let letters: string[];

        for(let letter of this.#word){
            letters.push(letter);
        }

        return new Letters(letters);
    }
}

