import { VALID_LETTER_CODES } from "../env.js";
import { INoticeable } from "../INoticeable.js";
import { Game } from "./Game.js";

export class Keyboard{

    #subscribers: INoticeable[];
    
    #gameInstance: Game
    
    constructor(game: Game){
        this.#gameInstance = game;
        this.#subscribers = [];
        this.addSubscriber(game);
    }

    initKeyboard(){
        Array.from(document.getElementsByClassName("key")).forEach(element =>
            element.addEventListener("click", (e) => { 
                this.newKeyPressed((<HTMLButtonElement>e.target).value); }));
        
        document.addEventListener("keydown", (e) => {
            this.newKeyPressed(e.code);
        });
    }

    newKeyPressed(code: string): void {
        if (VALID_LETTER_CODES.includes(code)) { this.#gameInstance.newLetter(code); }

        if (code == "Enter") { this.#gameInstance.enterPressed(); }
        
        if (code == "Backspace") { this.#gameInstance.backspacePressed(); }        
    }

    notifySubscribers() {
        for(let sub of this.#subscribers){
            sub.notifyLetter("code");
        }
    }

    addSubscriber(sub: INoticeable): void {
        this.#subscribers.push(sub);
    }

    deletSubscriber(index: number): void { 
        this.#subscribers.splice(index, 1);
    }
}