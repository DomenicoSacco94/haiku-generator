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

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPoem(e.target.value);
    };

    return (
        <Draggable>
            <div>
                <ControlBar />
                {showSyllables && (
                        <SyllableCounterFrame/>
                )}
                <TextArea
                    style={{
                        color: poemStyle.textColor,
                        fontSize: `${poemStyle.textSize}em`,
                        fontStyle: poemStyle.fontStyle,
                        fontFamily: poemStyle.fontFamily,
                        backgroundColor: poemStyle.backgroundColor,
                    }}
                    className="poem-text-input"
                    onChange={handleTextChange}
                    placeholder="Write your art here..."
                    autoSize={{ minRows: 3, maxRows: 3 }}
                />
            </div>
        </Draggable>
    );
}

export default TextEditor;