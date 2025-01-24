import './SyllableCounterFrame.css'
import { Poem } from "../models/Poem.ts";
import {usePoemStore} from "../store/usePoemStore.ts";

function SyllableCounterFrame() {
    const poemText = usePoemStore((state) => state.poemText);
    const poem: Poem = new Poem(poemText);
    return (
        <>
            {poemText && poem.verses.map((verse, lineIndex) => (
                <div key={`line-${lineIndex}`} className="poem-counted-word-group">
                    {verse.words.map((word, wordIndex) => (
                        <span key={`word-${lineIndex}-${wordIndex}`} className="word">
                            {word.word}
                            <span className="word-syllable-count">
                                ({word.syllableCount})
                            </span>
                        </span>
                    ))}
                    <span className="total-syllables">
                        {verse.totalSyllables}
                    </span>
                </div>
            ))}
        </>
    );
}

export default SyllableCounterFrame;