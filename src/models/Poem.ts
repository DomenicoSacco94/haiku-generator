import {Verse} from "./Verse.ts";

export class Poem {
    verses: Verse[];

    constructor(verses: Verse[]) {
        this.verses = verses;
    }

    static fromText(text: string): Poem {
        const lines = text.split('\n'); // Split text into lines
        const verses = lines.map(line => Verse.fromLine(line));
        return new Poem(verses);
    }
}