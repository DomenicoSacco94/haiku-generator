import {Poem} from "../models/Poem.ts";


function PoemText ({poem}: {poem: Poem}) {
    return poem.verses.map((verse, lineIndex) => (
        <div key={`line-${lineIndex}`} className="poem-counted-word-group">
            {verse.words.map((word, wordIndex) => (
                <span key={`word-${lineIndex}-${wordIndex}`} style={{ marginRight: '8px' }}>
                    {word.word}
                    <span style={{ fontSize: '0.5em', color: 'gray', marginLeft: '4px' }}>
                        ({word.syllableCount})
                    </span>
                </span>
            ))}
            <span style={{ fontSize: '0.9em', color: 'red', marginLeft: '12px' }}>
                {verse.totalSyllables}
            </span>
        </div>
    ));
}

export default PoemText;