import { Letter } from "./Letter";

export class Word {

    #word: string;

    constructor(word: string) {
        this.#word = word;
    }

    get word() {
        return this.#word;
    }

    set word(word: string) {
        this.#word = word;
    }

    checkWordIsRight(userWord: string): void {
        if (userWord == this.#word) {
            location.assign("/winner");
        }
    }
}