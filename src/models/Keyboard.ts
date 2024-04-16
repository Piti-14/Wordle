import { VALID_LETTER_CODES } from "../env.js";
import { Game } from "./Game.js";

export class Keyboard{

    #subscribers: INoticeable[];
    
    #gameInstance: Game
    
    constructor(game: Game){
        this.#gameInstance = game;
        this.#subscribers = [];
    }

    newKeyPressed(code: string): void {
        if (VALID_LETTER_CODES.includes(code)) { this.#gameInstance.newLetter(code); }

        if (code == "Enter") { this.#gameInstance.enterPressed(); }
        
        if (code == "Backspace") { this.#gameInstance.backspacePressed(); }        
    }

    notifySubscribers() {
        for(let sub of this.#subscribers){
            sub.update();
        }
    }

    addSubscriber(sub: INoticeable): void {
        this.#subscribers.push(sub);
    }

    deletSubscriber(index: number): void { 
        this.#subscribers.splice(index, 1);
    }
}