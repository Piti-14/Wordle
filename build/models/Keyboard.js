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
var _Keyboard_subscribers, _Keyboard_gameInstance;
import { VALID_LETTER_CODES } from "../env.js";
export class Keyboard {
    constructor(game) {
        _Keyboard_subscribers.set(this, void 0);
        _Keyboard_gameInstance.set(this, void 0);
        __classPrivateFieldSet(this, _Keyboard_gameInstance, game, "f");
        __classPrivateFieldSet(this, _Keyboard_subscribers, [], "f");
        this.addSubscriber(game);
    }
    initKeyboard() {
        Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => {
            this.newKeyPressed(e.target.value);
        }));
        document.addEventListener("keydown", (e) => {
            this.newKeyPressed(e.code);
        });
    }
    newKeyPressed(code) {
        if (VALID_LETTER_CODES.includes(code)) {
            __classPrivateFieldGet(this, _Keyboard_gameInstance, "f").newLetter(code);
        }
        if (code == "Enter") {
            __classPrivateFieldGet(this, _Keyboard_gameInstance, "f").enterPressed();
        }
        if (code == "Backspace") {
            __classPrivateFieldGet(this, _Keyboard_gameInstance, "f").backspacePressed();
        }
    }
    notifySubscribers() {
        for (let sub of __classPrivateFieldGet(this, _Keyboard_subscribers, "f")) {
            sub.notifyLetter("code");
        }
    }
    addSubscriber(sub) {
        __classPrivateFieldGet(this, _Keyboard_subscribers, "f").push(sub);
    }
    deletSubscriber(index) {
        __classPrivateFieldGet(this, _Keyboard_subscribers, "f").splice(index, 1);
    }
}
_Keyboard_subscribers = new WeakMap(), _Keyboard_gameInstance = new WeakMap();
