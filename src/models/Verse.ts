import { SyllabCountedWord } from "./SyllabCountedWord.ts";

export class Verse {
    words: SyllabCountedWord[];
    totalSyllables: number;

    constructor(line: string) {
        const words = line.split(/\s+/); // Split line into words
        this.words = words
            .filter(word => word.trim() !== '') // Skip empty words
            .map(word => new SyllabCountedWord(word));
        this.totalSyllables = this.words.reduce((sum, word) => sum + word.syllableCount, 0);
    }
}