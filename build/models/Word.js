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
import { MAX_WORD_SIZE } from "../env.js";
import { Letter } from "./Letter.js";
export class Word {
    constructor(word) {
        _Word_word.set(this, void 0);
        _Word_letters.set(this, void 0);
        __classPrivateFieldSet(this, _Word_word, word, "f");
        __classPrivateFieldSet(this, _Word_letters, this.getWordLetters(), "f");
    }
    get word() {
        return __classPrivateFieldGet(this, _Word_word, "f");
    }
    set word(word) {
        __classPrivateFieldSet(this, _Word_word, word, "f");
    }
    get letters() {
        return __classPrivateFieldGet(this, _Word_letters, "f");
    }
    set letters(letters) {
        __classPrivateFieldSet(this, _Word_letters, letters, "f");
    }
    getWordLetters() {
        let letters = [];
        for (let letter of __classPrivateFieldGet(this, _Word_word, "f")) {
            letters.push(new Letter(letter));
        }
        return letters;
    }
    clearChecks() {
        __classPrivateFieldGet(this, _Word_letters, "f").forEach(letter => letter.checked = false);
    }
    wordIsRight(userWord) {
        return (userWord == __classPrivateFieldGet(this, _Word_word, "f"));
    }
    check(otherWord) {
        otherWord.letters = otherWord.getWordLetters();
        debugger;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (__classPrivateFieldGet(this, _Word_word, "f").includes(otherWord.word[i])) {
                if (__classPrivateFieldGet(this, _Word_letters, "f")[i].letter == otherWord.letters[i].letter) {
                    otherWord.letters[i].state = "rightLetter";
                    otherWord.letters[i].checked = true;
                    __classPrivateFieldGet(this, _Word_letters, "f")[i].checked = true;
                }
                else {
                    otherWord.letters[i].state = "misplacedLetter";
                }
            }
        }
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (__classPrivateFieldGet(this, _Word_letters, "f")[i].letter.includes(otherWord.word[i])) {
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    if (otherWord.letters[i].checked)
                        break;
                    if (otherWord.letters[i].letter == __classPrivateFieldGet(this, _Word_letters, "f")[j].letter) {
                        (__classPrivateFieldGet(this, _Word_letters, "f")[j].checked) ?
                            otherWord.letters[i].state = "wrongLetter" :
                            otherWord.letters[i].state = "misplacedLetter";
                    }
                }
            }
        }
    }
}
_Word_word = new WeakMap(), _Word_letters = new WeakMap();
