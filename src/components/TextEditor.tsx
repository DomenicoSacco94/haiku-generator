import './TextEditor.css';
import TextArea from "antd/lib/input/TextArea";
import {ChangeEvent} from "react";
import {usePoemStore} from "../store/usePoemStore.ts";

function TextEditor() {

    const setPoem = usePoemStore((state) => state.setPoemText);
    const textColor = usePoemStore((state) => state.textColor);
    const textSize = usePoemStore((state) => state.textSize);
    const fontStyle = usePoemStore((state) => state.fontStyle);
    const fontFamily = usePoemStore((state) => state.fontFamily);
    const backgroundColor = usePoemStore((state) => state.backgroundColor);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPoem(e.target.value);
    };

    return <TextArea
                style={{ color: textColor, fontSize: `${textSize}em`, fontStyle: fontStyle, fontFamily: fontFamily, backgroundColor: backgroundColor }}
                className="poem-text-area"
                onChange={handleTextChange}
                placeholder="Write your art here..."
            />
}

export default TextEditor;
