import './TextEditor.css';
import { ChangeEvent } from 'react';
import { usePoemStore } from '../store/usePoemStore.ts';
import TextArea from "antd/es/input/TextArea";

function TextEditor() {
    const setPoem = usePoemStore((state) => state.setPoemText);
    const poemStyle = usePoemStore((state) => state.poemStyle);
    const hideTextEditorFrame = usePoemStore((state) => state.hideTextEditorFrame);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPoem(e.target.value);
    };

    return (
            <div hidden={hideTextEditorFrame}>
                <TextArea
                    style={{
                        color: poemStyle.textColor,
                        fontSize: `${poemStyle.textSize}em`,
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
    );
}

export default TextEditor;