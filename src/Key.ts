import { VALID_LETTER_CODES } from "./env.js";
import { Game } from "./Game.js";

export class Key{
    
    #gameInstance: Game
    
    constructor(game: Game){
        this.#gameInstance = game;
    }

    newKeyPressed(code: string): void {
        if (VALID_LETTER_CODES.includes(code)) { this.#gameInstance.newLetter(code); }

        if (code == "Enter") { this.#gameInstance.enterPressed(); }
        
        if (code == "Backspace") { this.#gameInstance.backspacePressed(); }        
    }
}