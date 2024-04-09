export class WordPicker{
    static pickRandomWord(words: string[]): string {
        const min = 0;
        const max = words.length - 1;

        return words[Math.trunc(Math.random() * (max - min + 1))]
    }
}