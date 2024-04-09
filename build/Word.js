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
var _Word_word, _Word_letters;
export class Word {
    constructor(word) {
        _Word_word.set(this, void 0);
        _Word_letters.set(this, void 0);
        __classPrivateFieldSet(this, _Word_word, word, "f");
        __classPrivateFieldSet(this, _Word_letters, getWordLetters(), "f");
    }
    get word() {
        return __classPrivateFieldGet(this, _Word_word, "f");
    }
    set word(word) {
        __classPrivateFieldSet(this, _Word_word, word, "f");
    }
    repeatedLetters() {
        for (let letter of __classPrivateFieldGet(this, _Word_word, "f")) {
        }
    }
    checkWordIsRight(userWord) {
        if (userWord == __classPrivateFieldGet(this, _Word_word, "f")) {
            location.assign("/winner");
        }
    }
    getWordLetters() {
        throw new Error("Function not implemented.");
    }
}
_Word_word = new WeakMap(), _Word_letters = new WeakMap();
