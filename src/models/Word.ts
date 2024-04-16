import { json } from "express";
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
        
        debugger
        for(let i = 0; i < MAX_WORD_SIZE; i++){
            if(this.#letters[i].letter.includes(otherWord.word[i])){
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    
                    if(otherWord.letters[i].checked) break;

                    if(otherWord.letters[i].letter == this.#letters[j].letter){
                        (this.#letters[j].checked)? 
                            otherWord.letters[i].state = "wrongLetter" : 
                            otherWord.letters[i].state = "misplacedLetter";
                    }
                }
            }
        }
    }










 //Prueba para colorear correctamente las letras

    /* check(otherWord: Word) {
        otherWord.letters = otherWord.getWordLetters()
        let checkedLetters: string[] = [];
        //debugger
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (this.#word.includes(otherWord.word[i]) && !checkedLetters.includes(otherWord.word[i])) {

                checkedLetters.push(otherWord.word[i])

                let ocurrencesInSecretWord = (this.#word.match(new RegExp(otherWord.letters[i].letter, "g")) || []).length;
                let ocurrencesInUserWord = (otherWord.word.match(new RegExp(otherWord.letters[i].letter, "g")) || []).length;

                let coincidences = Math.min(ocurrencesInSecretWord, ocurrencesInUserWord);

                for (let j = i; j < MAX_WORD_SIZE; j++) { //j = i por ser la pos en la que aparece una ocurrencia - MIRAR RECORRIDO!!!
                    if (this.#letters[j].letter == otherWord.letters[j].letter) {
                        otherWord.letters[j].state = "rightLetter";
                        coincidences--;
                        j = i;
                    } else {
                        if (coincidences == 0) {
                            otherWord.letters[j].state = "wrongLetter"
                        } else {
                            otherWord.letters[j].state = "misplacedLetter";
                        }
                    }
                    if(coincidences == 0 || )
                }
            }
        }
    } */
}