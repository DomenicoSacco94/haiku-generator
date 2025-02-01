import './TextEditor.css';
import { Input } from 'antd';
import { ChangeEvent } from 'react';
import { usePoemStore } from '../store/usePoemStore.ts';
import Draggable from 'react-draggable';
import ControlBar from './ControlBar';

function TextEditor() {
    const setPoem = usePoemStore((state) => state.setPoemText);
    const poemStyle = usePoemStore((state) => state.poemStyle);

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPoem(e.target.value);
    };

    return (
        <Draggable>
            <div>
                <ControlBar />
                <Input
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
                />
            </div>
        </Draggable>
    );
}

export default TextEditor;