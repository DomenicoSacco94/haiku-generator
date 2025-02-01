import { usePoemStore } from '../store/usePoemStore';
import {Button, Checkbox, CheckboxChangeEvent, Collapse} from 'antd';
import './ControlBar.css';
import { toPng } from 'html-to-image';
import {useState} from "react";

const { Panel } = Collapse;

function ControlBar() {
    const poemStyle = usePoemStore((state) => state.poemStyle);
    const setPoemStyle = usePoemStore((state) => state.setPoemStyle);
    const setShowSyllables = usePoemStore((state) => state.setShowSyllables);
    const [isVisible, setIsVisible] = useState(true);

    const handleChange = (attribute: string, value: string | number) => {
        setPoemStyle({ [attribute]: value });
    };

    const onItalicToggleClick = () => {
        handleChange('fontStyle', poemStyle.fontStyle = poemStyle.fontStyle == "normal" ? "italic" : "normal");
    };

    const handleShowSyllables = (e: CheckboxChangeEvent) => {
        setShowSyllables(e.target.checked);
    };

    const handlePrintClick = () => {
        setIsVisible(false);
        const textEditorElement = document.querySelector('.poem-area');
        if (textEditorElement instanceof HTMLElement) {
            toPng(textEditorElement)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = 'poem.png';
                    link.href = dataUrl;
                    link.click();
                })
                .catch((error) => {
                    console.error('Error generating image:', error);
                })
                .finally(()=> setIsVisible(true));
        }
    };

    return (
        <div hidden={!isVisible} className="control-bar">
            <Collapse>
                <Panel header="Controls" key="1">
                    <div className="control-bar-content">
                        <Checkbox defaultChecked onChange={handleShowSyllables}>Show Syllables</Checkbox>
                        <Button onClick={() => handleChange('textSize', poemStyle.textSize + 0.1)}>+</Button>
                        <Button onClick={() => handleChange('textSize', poemStyle.textSize - 0.1)}>-</Button>
                        <Button style={{ fontStyle: poemStyle.fontStyle }} onClick={onItalicToggleClick}>A</Button>
                        <Button type="primary" onClick={handlePrintClick}>Print Poem</Button>
                    </div>
                </Panel>
            </Collapse>
        </div>
    );
}

export default ControlBar;