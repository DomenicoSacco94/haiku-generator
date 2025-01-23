import { describe, it, expect } from 'vitest';
import { Poem } from './Poem';

describe('Poem', () => {
    it('should count syllabs correctly', () => {
        const text = 'This is a line\nThis is another line';
        const poem = new Poem(text);
        expect(poem.verses.length).toBe(2);
        expect(poem.verses[0].totalSyllables).toBe(4);
        expect(poem.verses[0].words[0].syllableCount).toBe(1);
        expect(poem.verses[1].totalSyllables).toBe(6);
    });
});