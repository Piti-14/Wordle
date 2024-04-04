import { MAX_WORD_SIZE, VALID_LETTER_CODES } from "./Env.js"

export class GameDirector {
    isLetterValid(letter: string): boolean {
        return VALID_LETTER_CODES.includes(letter)
    }

    onKeyPress(): void {

    }

    checkLetters(): void {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            //palabraUsuario[i] está en palabraWordle ?
            //Cuantas veces (n) está? - Bucle con n
            //Comprueba posición
            //Posición correcta ? verde : naranja
        }
    }




}