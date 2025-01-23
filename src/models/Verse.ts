import {SyllabCountedWord} from "./SyllabCountedWord.ts";
import syllables from "syllables";

export class Verse {
    words: SyllabCountedWord[];
    totalSyllables: number;

    constructor(words: SyllabCountedWord[], totalSyllables: number) {
        this.words = words;
        this.totalSyllables = totalSyllables;
    }

    static fromLine(line: string): Verse {
        const words = line.split(/\s+/); // Split line into words
        let totalSyllables = 0;

        const syllabCountedWords = words.map((word) => {
            if (word.trim() === '') return null; // Skip empty words
            const wordSyllables = syllables(word);
            totalSyllables += wordSyllables;
            return new SyllabCountedWord(word, wordSyllables);
        }).filter(Boolean) as SyllabCountedWord[];

        return new Verse(syllabCountedWords, totalSyllables);
    }
}