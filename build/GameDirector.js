import { VALID_LETTER_CODES } from "./Env.js";
export class GameDirector {
    isLetterValid(letter) {
        return VALID_LETTER_CODES.includes(letter);
    }
}
