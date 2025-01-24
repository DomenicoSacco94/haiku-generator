import './TextEditor.css';
import TextArea from "antd/lib/input/TextArea";
import { ChangeEvent } from "react";
import { usePoemStore } from "../store/usePoemStore.ts";

function TextEditor() {
    const setPoem = usePoemStore((state) => state.setPoemText);
    const poemStyle = usePoemStore((state) => state.poemStyle);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPoem(e.target.value);
    };

    return <TextArea
                style={{
                    color: poemStyle.textColor,
                    fontSize: `${poemStyle.textSize}em`,
                    fontStyle: poemStyle.fontStyle,
                    fontFamily: poemStyle.fontFamily,
                    backgroundColor: poemStyle.backgroundColor,
                    paddingTop: `${poemStyle.paddingTop}px`,
                    paddingLeft: `${poemStyle.paddingLeft}px`
                }}
                className="poem-text-area"
                onChange={handleTextChange}
                placeholder="Write your art here..."
            />
}

export default TextEditor;