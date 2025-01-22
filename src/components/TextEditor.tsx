import '../App.css';
import TextArea from "antd/lib/input/TextArea";
import {ChangeEvent, useState} from "react";
import syllables from 'syllables';

function TextEditor() {
    const [text, setText] = useState('');

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const getAnnotatedText = (text: string) => {
        if (text.trim() === '') return null
        const lines = text.split('\n'); // Split text into lines
        return lines.map((line, lineIndex) => {
            const words = line.split(/\s+/); // Split line into words
            let totalSyllables = 0;

            // Annotate each word with its syllable count
            const annotatedWords = words.map((word, wordIndex) => {
                if (word.trim() === '') return null; // Skip empty words
                const wordSyllables = syllables(word);
                totalSyllables += wordSyllables;

                return (
                    <span key={`word-${lineIndex}-${wordIndex}`} style={{marginRight: '8px'}}>
                        {word}
                        <span style={{fontSize: '0.5em', color: 'gray', marginLeft: '4px'}}>
                            ({wordSyllables})
                        </span>
                    </span>
                );
            });

            // Combine words and total syllables in a single line
            return (
                <div
                    key={`line-${lineIndex}`}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '8px',
                    }}
                >
                    <span style={{marginRight: '12px'}}>{annotatedWords}</span>
                    <span style={{fontSize: '0.9em', color: 'red'}}>
                        {totalSyllables}
                    </span>
                </div>
            );
        });
    };

    return (
        <div className="poem-area">
            <TextArea
                className="poem-text-area"
                value={text}
                onChange={handleTextChange}
                placeholder="Write your art here..."
                rows={8}
            />
            <div className="poem-display-area">{getAnnotatedText(text)}</div>
        </div>
    );
}

export default TextEditor;
