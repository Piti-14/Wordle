import { VALID_LETTER_CODES } from "./Env.js"

export class GameDirector {
    isLetterValid(letter: string): boolean{
        return VALID_LETTER_CODES.includes(letter)
    }

    
    

}