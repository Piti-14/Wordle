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
var _Game_secretWord, _Game_userWord, _Game_gameInterface, _Game_attempt, _Game_actualPosition;
import { MAX_ATTEMPTS, MAX_WORD_SIZE } from "../env.js";
export class Game {
    constructor(secretWord, userWord, gameInterface) {
        _Game_secretWord.set(this, void 0);
        _Game_userWord.set(this, void 0);
        _Game_gameInterface.set(this, void 0);
        _Game_attempt.set(this, void 0);
        _Game_actualPosition.set(this, void 0);
        __classPrivateFieldSet(this, _Game_secretWord, secretWord, "f");
        __classPrivateFieldSet(this, _Game_userWord, userWord, "f");
        __classPrivateFieldSet(this, _Game_gameInterface, gameInterface, "f");
        __classPrivateFieldSet(this, _Game_attempt, 1, "f");
        __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
    }
    notifyLetter(code) {
        throw new Error("Method not implemented.");
    }
    notifyKey(name) {
        throw new Error("Method not implemented.");
    }
    get secretWord() {
        return __classPrivateFieldGet(this, _Game_secretWord, "f");
    }
    set secretWord(word) {
        __classPrivateFieldSet(this, _Game_secretWord, word, "f");
    }
    get userWord() {
        return __classPrivateFieldGet(this, _Game_userWord, "f");
    }
    set userWord(word) {
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
    get gameInterface() {
        return __classPrivateFieldGet(this, _Game_gameInterface, "f");
    }
    set gameInterface(i) {
        __classPrivateFieldSet(this, _Game_gameInterface, i, "f");
    }
    newLetter(code) {
        var _a;
        if (__classPrivateFieldGet(this, _Game_actualPosition, "f") < MAX_WORD_SIZE) {
            let letter = (code == "Semicolon") ? "Ñ" : code.split("y")[1];
            __classPrivateFieldGet(this, _Game_gameInterface, "f").writeLetter(this.turn, this.actualPosition, letter);
            __classPrivateFieldSet(this, _Game_actualPosition, (_a = __classPrivateFieldGet(this, _Game_actualPosition, "f"), _a++, _a), "f");
            __classPrivateFieldGet(this, _Game_userWord, "f").word += letter;
        }
    }
    enterPressed() {
        var _a;
        if (__classPrivateFieldGet(this, _Game_userWord, "f").word.length >= MAX_WORD_SIZE) {
            if (__classPrivateFieldGet(this, _Game_secretWord, "f").wordIsRight(__classPrivateFieldGet(this, _Game_userWord, "f").word)) {
                __classPrivateFieldGet(this, _Game_gameInterface, "f").win();
            }
            else if (this.turn >= MAX_ATTEMPTS) {
                __classPrivateFieldGet(this, _Game_gameInterface, "f").lose();
            }
            __classPrivateFieldGet(this, _Game_secretWord, "f").clearChecks();
            __classPrivateFieldGet(this, _Game_secretWord, "f").check(__classPrivateFieldGet(this, _Game_userWord, "f"));
            this.updateLetterColors();
            __classPrivateFieldSet(this, _Game_attempt, (_a = __classPrivateFieldGet(this, _Game_attempt, "f"), _a++, _a), "f");
            __classPrivateFieldSet(this, _Game_actualPosition, 0, "f");
            __classPrivateFieldGet(this, _Game_userWord, "f").word = "";
        }
    }
    backspacePressed() {
        if (__classPrivateFieldGet(this, _Game_actualPosition, "f") > 0) {
            __classPrivateFieldGet(this, _Game_userWord, "f").word = __classPrivateFieldGet(this, _Game_userWord, "f").word.slice(0, -1);
            __classPrivateFieldSet(this, _Game_actualPosition, __classPrivateFieldGet(this, _Game_actualPosition, "f") - 1, "f");
            __classPrivateFieldGet(this, _Game_gameInterface, "f").deleteLetter(__classPrivateFieldGet(this, _Game_attempt, "f"), __classPrivateFieldGet(this, _Game_actualPosition, "f"));
        }
    }
    updateLetterColors() {
        __classPrivateFieldGet(this, _Game_gameInterface, "f").changeBackgroundCellColor(__classPrivateFieldGet(this, _Game_attempt, "f"), __classPrivateFieldGet(this, _Game_userWord, "f"));
        __classPrivateFieldGet(this, _Game_gameInterface, "f").changeBackgroundKeyColor(__classPrivateFieldGet(this, _Game_userWord, "f"));
    }
}
_Game_secretWord = new WeakMap(), _Game_userWord = new WeakMap(), _Game_gameInterface = new WeakMap(), _Game_attempt = new WeakMap(), _Game_actualPosition = new WeakMap();
