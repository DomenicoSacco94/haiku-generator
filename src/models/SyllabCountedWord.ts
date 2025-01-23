import syllables from "syllables";

export class SyllabCountedWord {
    word: string;
    syllableCount: number;

    constructor(word: string) {
        this.word = word;
        this.syllableCount = syllables(word);
    }
}