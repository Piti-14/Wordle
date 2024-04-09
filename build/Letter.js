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
var _Letter_letter, _Letter_state;
export class Letter {
    constructor(letter) {
        _Letter_letter.set(this, void 0);
        _Letter_state.set(this, "");
        __classPrivateFieldSet(this, _Letter_letter, letter, "f");
    }
    get letter() {
        return __classPrivateFieldGet(this, _Letter_letter, "f");
    }
    set state(s) {
        __classPrivateFieldSet(this, _Letter_state, s, "f");
    }
}
_Letter_letter = new WeakMap(), _Letter_state = new WeakMap();
/*
    newLetter(code: string): void {
        let letter: string = (code == "Semicolon")? "Ñ" : code.split("y")[1];
        
        this.#userInterface.writeLetter(this.turn, this.actualPosition, letter);
        this.#actualPosition++;
        this.#userWord += letter;
    }

    checkRightLetters = (): void => {
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            if (this.#secretWord[i] == this.#userWord[i]) {
                this.#userInterface.changeBackgroundCellColor(this.#attempt, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters = (): void => {
        let actualLetter: string = "";
        let pattern: RegExp;
        
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        
        let differenceOfCoincidences: number = 0;
        
        let isMisplacedLetter: boolean = true;

        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            isMisplacedLetter = true;

            actualLetter = this.#userWord[i];
            
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidencesPickedWord = (this.#secretWord.match(pattern) || []).length;
            numberOfCoincidencesActualWord = (this.#userWord.match(pattern) || []).length;
            
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            
            if (differenceOfCoincidences == 1) {
                for (let j = 0; j < MAX_WORD_SIZE; j++) {
                    if (this.#secretWord[j] == actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }

            if (differenceOfCoincidences == 0 && this.#secretWord[i] == this.#userWord[i]) {
                isMisplacedLetter = false;
            }

            if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) {
                this.#userInterface.changeBackgroundCellColor(this.#attempt, i, "misplacedLetter");
            }
        }
    }

    checkWrongLetters = (): void => {
        let actualLetter = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i = 0; i < MAX_WORD_SIZE; i++) {
            actualLetter = this.#userWord[i];
            pattern = new RegExp(actualLetter, "g");
            numberOfCoincidencesPickedWord = (this.#secretWord.match(pattern) || []).length;

            if (numberOfCoincidencesPickedWord == 0) {
                this.#userInterface.changeBackgroundCellColor(this.#attempt, i, "wrongLetter");
            }
        }
    }
} */ 
