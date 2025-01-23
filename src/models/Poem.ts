import { Verse } from "./Verse.ts";

export class Poem {
    verses: Verse[];

    constructor(text: string) {
        if(text) {
            const lines = text.split('\n'); // Split text into lines
            this.verses = lines.map(line => new Verse(line));
        }
    }
}