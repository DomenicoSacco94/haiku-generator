import { Verse } from "./Verse";

export class Poem {
    verses: Verse[] = [];

    constructor(text: string | null) {
        if (text) {
            const lines = text.split('\n').filter(line => line.trim() !== "");
            this.verses = lines.map(line => new Verse(line));
        }
    }
}