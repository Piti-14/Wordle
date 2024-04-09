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
var _Key_gameInstance;
import { VALID_LETTER_CODES } from "./env.js";
export class Key {
    constructor(game) {
        _Key_gameInstance.set(this, void 0);
        __classPrivateFieldSet(this, _Key_gameInstance, game, "f");
    }
    newKeyPressed(code) {
        if (VALID_LETTER_CODES.includes(code)) {
            __classPrivateFieldGet(this, _Key_gameInstance, "f").newLetter(code);
        }
        if (code == "Enter") {
            __classPrivateFieldGet(this, _Key_gameInstance, "f").enterPressed();
        }
        if (code == "Backspace") {
            __classPrivateFieldGet(this, _Key_gameInstance, "f").backspacePressed();
        }
        // this.#userInterface.changeBackgroundKeyColor(code);
    }
}
_Key_gameInstance = new WeakMap();
