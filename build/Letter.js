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
var _Letter_letter;
export class Letter {
    constructor(letter) {
        _Letter_letter.set(this, void 0);
        this.checkRightLetters = () => {
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (this.[i] == this.[i]) {
                    this..changeBackgroundCellColor(this., i, "rightLetter");
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
                actualLetter = this.[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (this..match(pattern) || []).length;
                numberOfCoincidencesActualWord = (this..match(pattern) || []).length;
                differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                if (differenceOfCoincidences == 1) {
                    for (let j = 0; j < MAX_WORD_SIZE; j++) {
                        if (this.[j] == actualLetter) {
                            isMisplacedLetter = false;
                            break;
                        }
                    }
                }
                if (differenceOfCoincidences == 0 && this.[i] == this.[i]) {
                    isMisplacedLetter = false;
                }
                if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) {
                    this..changeBackgroundCellColor(this., i, "misplacedLetter");
                }
            }
        };
        this.checkWrongLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = this.[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (this..match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord == 0) {
                    this..changeBackgroundCellColor(this., i, "wrongLetter");
                }
            }
        };
        __classPrivateFieldSet(this, _Letter_letter, letter, "f");
    }
    getLetter() {
        return __classPrivateFieldGet(this, _Letter_letter, "f");
    }
    newLetter(code) {
        let letter = (code == "Semicolon") ? "Ñ" : code.split("y")[1];
        this..writeLetter(this.turn, this.actualPosition, letter);
        this.++;
        this. += letter;
    }
}
_Letter_letter = new WeakMap();
