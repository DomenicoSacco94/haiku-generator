import './TextEditor.css';
import { ChangeEvent } from 'react';
import { usePoemStore } from '../store/usePoemStore.ts';
import Draggable from 'react-draggable';
import ControlBar from './ControlBar';
import TextArea from "antd/es/input/TextArea";
import SyllableCounterFrame from "./SyllableCounterFrame";

function TextEditor() {
    const setPoem = usePoemStore((state) => state.setPoemText);
    const poemStyle = usePoemStore((state) => state.poemStyle);
    const showSyllables = usePoemStore((state) => state.showSyllables);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPoem(e.target.value);
    };

    return (
        <Draggable>
            <div className="draggable-area">
                <ControlBar />
                {showSyllables && (
                    <SyllableCounterFrame />
                )}
                <TextArea
                    style={{
                        '--text-size': `${poemStyle.textSize}em`,
                        color: poemStyle.textColor,
                        fontSize: `var(--text-size)`,
                        fontStyle: poemStyle.fontStyle,
                        fontFamily: poemStyle.fontFamily,
                        backgroundColor: poemStyle.backgroundColor,
                        height: `${poemStyle.textSize ? poemStyle.textSize * 120 : 100}px`,
                    }}
                    className="poem-text-input"
                    onChange={handleTextChange}
                    placeholder="Write your art here..."
                />
            </div>
        </Draggable>
    );
}

export default TextEditor;