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
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./Env.js";
export class Game {
    constructor(pickedWord, userInterface) {
        _Game_secretWord.set(this, void 0);
        _Game_userWord.set(this, void 0);
        _Game_attempt.set(this, void 0);
        _Game_actualPosition.set(this, void 0);
        _Game_validLetterCodes.set(this, void 0);
        _Game_userInterface.set(this, void 0);
        this.checkRightLetters = () => {
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (__classPrivateFieldGet(this, _Game_secretWord, "f")[i] == __classPrivateFieldGet(this, _Game_userWord, "f")[i]) {
                    __classPrivateFieldGet(this, _Game_userInterface, "f").changeBackgroundCellColor(__classPrivateFieldGet(this, _Game_attempt, "f"), i, "rightLetter");
                }
            }
        };
        this.checkMisplacedLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            let numberOfCoincidencesActualWord = 0;
            let differenceOfCoincidences = 0;
            let isMisplacedLetter = true;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = __classPrivateFieldGet(this, _Game_userWord, "f")[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _Game_secretWord, "f").match(pattern) || []).length;
                numberOfCoincidencesActualWord = (__classPrivateFieldGet(this, _Game_userWord, "f").match(pattern) || []).length;
                differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                if (differenceOfCoincidences == 1) {
                    for (let j = 0; j < MAX_WORD_SIZE; j++) {
                        if (__classPrivateFieldGet(this, _Game_secretWord, "f")[j] == actualLetter) {
                            isMisplacedLetter = false;
                            break;
                        }
                    }
                }
                if (differenceOfCoincidences == 0 && __classPrivateFieldGet(this, _Game_secretWord, "f")[i] == __classPrivateFieldGet(this, _Game_userWord, "f")[i]) {
                    isMisplacedLetter = false;
                }
                if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) {
                    __classPrivateFieldGet(this, _Game_userInterface, "f").changeBackgroundCellColor(__classPrivateFieldGet(this, _Game_attempt, "f"), i, "misplacedLetter");
                }
            }
        };
        this.checkWrongLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = __classPrivateFieldGet(this, _Game_userWord, "f")[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _Game_secretWord, "f").match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord == 0) {
                    __classPrivateFieldGet(this, _Game_userInterface, "f").changeBackgroundCellColor(__classPrivateFieldGet(this, _Game_attempt, "f"), i, "wrongLetter");
                }
            }
        };
        this.updateAfterANewWord = () => {
            this.checkRightLetters();
            this.checkMisplacedLetters();
            this.checkWrongLetters();
            __classPrivateFieldSet(this, _Game_attempt, __classPrivateFieldGet(this, _Game_attempt, "f") + 1, "f");
            __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
            __classPrivateFieldSet(this, _Game_userWord, "", "f");
        };
        __classPrivateFieldSet(this, _Game_secretWord, pickedWord, "f");
        __classPrivateFieldSet(this, _Game_userWord, "", "f");
        __classPrivateFieldSet(this, _Game_attempt, 1, "f");
        __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
        __classPrivateFieldSet(this, _Game_validLetterCodes, ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"], "f");
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
    newKeyPressed(code) {
        if (__classPrivateFieldGet(this, _Game_validLetterCodes, "f").includes(code) && __classPrivateFieldGet(this, _Game_actualPosition, "f") < MAX_WORD_SIZE) {
            this.newLetter(code);
        }
        if (code == "Enter") {
            this.enterPressed();
        }
        if (code == "Backspace") {
            this.backspacePressed();
        }
        __classPrivateFieldGet(this, _Game_userInterface, "f").changeBackgroundKeyColor(code);
    }
    newLetter(code) {
        var _a;
        let letter = (code == "Semicolon") ? "Ñ" : code.split("y")[1];
        __classPrivateFieldGet(this, _Game_userInterface, "f").writeLetter(this.turn, this.actualPosition, letter);
        __classPrivateFieldSet(this, _Game_actualPosition, (_a = __classPrivateFieldGet(this, _Game_actualPosition, "f"), _a++, _a), "f");
        __classPrivateFieldSet(this, _Game_userWord, __classPrivateFieldGet(this, _Game_userWord, "f") + letter, "f");
    }
    checkWordIsRight() {
        if (__classPrivateFieldGet(this, _Game_userWord, "f") == __classPrivateFieldGet(this, _Game_secretWord, "f")) {
            location.assign("/winner");
        }
    }
    checkGameIsOver() {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }
    enterPressed() {
        if (__classPrivateFieldGet(this, _Game_userWord, "f").length >= MAX_WORD_SIZE) {
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }
    backspacePressed() {
        if (__classPrivateFieldGet(this, _Game_actualPosition, "f") > 0) {
            __classPrivateFieldSet(this, _Game_userWord, __classPrivateFieldGet(this, _Game_userWord, "f").slice(0, -1), "f");
            __classPrivateFieldSet(this, _Game_actualPosition, __classPrivateFieldGet(this, _Game_actualPosition, "f") - 1, "f");
            __classPrivateFieldGet(this, _Game_userInterface, "f").deleteLetter(__classPrivateFieldGet(this, _Game_attempt, "f"), __classPrivateFieldGet(this, _Game_actualPosition, "f"));
        }
    }
}
_Game_secretWord = new WeakMap(), _Game_userWord = new WeakMap(), _Game_attempt = new WeakMap(), _Game_actualPosition = new WeakMap(), _Game_validLetterCodes = new WeakMap(), _Game_userInterface = new WeakMap();
