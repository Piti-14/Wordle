 
export class Letter{

    #letter: string;
    #state: string;
    #checked: boolean;

    constructor(letter: string) {
        this.#letter = letter;
        this.#state = "wrongLetter";
        this.#checked = false;
    }

    get letter(): string {
        return this.#letter;
    }

    get state(){
        return this.#state;
    }

    get checked(){
        return this.#checked;
    }

    set checked(c: boolean){
        this.#checked = c;
    }

    set state(s: string){
        this.#state = s;
    }
}