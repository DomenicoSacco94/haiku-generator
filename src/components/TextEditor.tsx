import './TextEditor.css';
import TextArea from "antd/lib/input/TextArea";
import {ChangeEvent, useState} from "react";
import {Poem} from "../models/Poem.ts";
import PoemText from "./PoemText.tsx";

function TextEditor() {
    const [text, setText] = useState('');

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
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
            <div className="poem-display-area">
                {text.trim().length != 0 && <PoemText poem={Poem.fromText(text)}/>}
            </div>
        </div>
    );
}

export default TextEditor;
