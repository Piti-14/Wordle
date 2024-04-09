var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Game_secretWord, _Game_userWord, _Game_attempt, _Game_actualPosition, _Game_validLetterCodes, _Game_userInterface;
import { MAX_ATTEMPTS, MAX_WORD_SIZE, VALID_LETTER_CODES } from "./env.js";
export class Game {
    constructor(secretWord, userWord, userInterface) {
        _Game_secretWord.set(this, void 0);
        _Game_userWord.set(this, void 0);
        _Game_attempt.set(this, void 0);
        _Game_actualPosition.set(this, void 0);
        _Game_validLetterCodes.set(this, void 0);
        _Game_userInterface.set(this, void 0);
        this.updateAfterANewWord = () => {
            //Word es quien checkea las letras!
            /* this.#secretWord.checkRightLetters();
            this.checkMisplacedLetters();
            this.checkWrongLetters(); */
            __classPrivateFieldSet(this, _Game_attempt, __classPrivateFieldGet(this, _Game_attempt, "f") + 1, "f");
            __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
            __classPrivateFieldGet(this, _Game_userWord, "f").word = "";
        };
        __classPrivateFieldSet(this, _Game_secretWord, secretWord, "f");
        __classPrivateFieldSet(this, _Game_userWord, userWord, "f");
        __classPrivateFieldSet(this, _Game_attempt, 1, "f");
        __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
        __classPrivateFieldSet(this, _Game_validLetterCodes, VALID_LETTER_CODES, "f");
        __classPrivateFieldSet(this, _Game_userInterface, userInterface, "f");
    }
    get pickedWord() {
        return __classPrivateFieldGet(this, _Game_secretWord, "f");
    }
    set pickedWord(word) {
        __classPrivateFieldSet(this, _Game_secretWord, word, "f");
    }
    get actualWord() {
        return __classPrivateFieldGet(this, _Game_userWord, "f");
    }
    set actualWord(word) {
        __classPrivateFieldSet(this, _Game_userWord, word, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _Game_attempt, "f");
    }
    set turn(num) {
        __classPrivateFieldSet(this, _Game_attempt, num, "f");
    }
    get actualPosition() {
        return __classPrivateFieldGet(this, _Game_actualPosition, "f");
    }
    set actualPosition(num) {
        __classPrivateFieldSet(this, _Game_actualPosition, num, "f");
    }
    get validLetterCodes() {
        return __classPrivateFieldGet(this, _Game_validLetterCodes, "f");
    }
    set validLetterCodes(letters) {
        __classPrivateFieldSet(this, _Game_validLetterCodes, letters, "f");
    }
    get interface() {
        return __classPrivateFieldGet(this, _Game_userInterface, "f");
    }
    set interface(i) {
        __classPrivateFieldSet(this, _Game_userInterface, i, "f");
    }
    newLetter(code) {
        var _a;
        if (__classPrivateFieldGet(this, _Game_actualPosition, "f") < MAX_WORD_SIZE) {
            let letter = (code == "Semicolon") ? "Ñ" : code.split("y")[1];
            __classPrivateFieldGet(this, _Game_userInterface, "f").writeLetter(this.turn, this.actualPosition, letter);
            __classPrivateFieldSet(this, _Game_actualPosition, (_a = __classPrivateFieldGet(this, _Game_actualPosition, "f"), _a++, _a), "f");
            __classPrivateFieldGet(this, _Game_userWord, "f").word += letter;
        }
    }
    enterPressed() {
        if (__classPrivateFieldGet(this, _Game_userWord, "f").word.length >= MAX_WORD_SIZE) {
            if (__classPrivateFieldGet(this, _Game_secretWord, "f").wordIsRight(__classPrivateFieldGet(this, _Game_userWord, "f").word)) {
                __classPrivateFieldGet(this, _Game_userInterface, "f").win();
            }
            if (this.turn == MAX_ATTEMPTS) {
                __classPrivateFieldGet(this, _Game_userInterface, "f").lose();
            }
            __classPrivateFieldGet(this, _Game_secretWord, "f").check(__classPrivateFieldGet(this, _Game_userWord, "f"));
            this.updateLetterColors();
            this.updateAfterANewWord();
        }
    }
    backspacePressed() {
        if (__classPrivateFieldGet(this, _Game_actualPosition, "f") > 0) {
            __classPrivateFieldGet(this, _Game_userWord, "f").word = __classPrivateFieldGet(this, _Game_userWord, "f").word.slice(0, -1);
            __classPrivateFieldSet(this, _Game_actualPosition, __classPrivateFieldGet(this, _Game_actualPosition, "f") - 1, "f");
            __classPrivateFieldGet(this, _Game_userInterface, "f").deleteLetter(__classPrivateFieldGet(this, _Game_attempt, "f"), __classPrivateFieldGet(this, _Game_actualPosition, "f"));
        }
    }
    //Poner aquí métodos para cambiar el color del teclado en pantalla
    updateLetterColors() {
        __classPrivateFieldGet(this, _Game_userInterface, "f").changeBackgroundCellColor(__classPrivateFieldGet(this, _Game_attempt, "f"), __classPrivateFieldGet(this, _Game_actualPosition, "f"), __classPrivateFieldGet(this, _Game_userWord, "f"));
    }
}
_Game_secretWord = new WeakMap(), _Game_userWord = new WeakMap(), _Game_attempt = new WeakMap(), _Game_actualPosition = new WeakMap(), _Game_validLetterCodes = new WeakMap(), _Game_userInterface = new WeakMap();
