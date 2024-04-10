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
var _Letter_letter, _Letter_state, _Letter_checked;
export class Letter {
    constructor(letter) {
        _Letter_letter.set(this, void 0);
        _Letter_state.set(this, void 0);
        _Letter_checked.set(this, void 0);
        __classPrivateFieldSet(this, _Letter_letter, letter, "f");
        __classPrivateFieldSet(this, _Letter_state, "wrongLetter", "f");
        __classPrivateFieldSet(this, _Letter_checked, false, "f");
    }
    get letter() {
        return __classPrivateFieldGet(this, _Letter_letter, "f");
    }
    get state() {
        return __classPrivateFieldGet(this, _Letter_state, "f");
    }
    get checked() {
        return __classPrivateFieldGet(this, _Letter_checked, "f");
    }
    set checked(c) {
        __classPrivateFieldSet(this, _Letter_checked, c, "f");
    }
    set state(s) {
        __classPrivateFieldSet(this, _Letter_state, s, "f");
    }
}
_Letter_letter = new WeakMap(), _Letter_state = new WeakMap(), _Letter_checked = new WeakMap();
