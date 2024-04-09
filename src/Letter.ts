 
export class Letter{

    #letter: string;
    #state: string;

    constructor(letter: string) {
        this.#letter = letter;
        this.#state = "wrongLetter";
    }

    get letter(): string {
        return this.#letter;
    }

    get state(){
        return this.#state;
    }

    set state(s: string){
        this.#state = s;
    }
}