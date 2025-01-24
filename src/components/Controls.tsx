import { usePoemStore } from '../store/usePoemStore';
import { Button, Select } from 'antd';
import './Controls.css';

import {ChangeEvent} from "react";

const { Option } = Select;

const colors = [
    { color: 'Black', colorCode: '#000000' },
    { color: 'Red', colorCode: '#FF0000' },
    { color: 'Green', colorCode: '#00FF00' },
    { color: 'Blue', colorCode: '#0000FF' },
    { color: 'White', colorCode: '#FFFFFF' },
    { color: 'Gray', colorCode: '#808080' },
];

const fontStyles = ['normal', 'bold', 'italic'];
const fontFamilies = ['monospace', 'Comic Sans MS', 'Arial', 'Times New Roman'];

function Controls() {
    const poemText = usePoemStore((state) => state.poemText);
    const textSize = usePoemStore((state) => state.textSize);
    const setTextColor = usePoemStore((state) => state.setTextColor);
    const setTextSize = usePoemStore((state) => state.setTextSize);
    const setFontStyle = usePoemStore((state) => state.setFontStyle);
    const setFontFamily = usePoemStore((state) => state.setFontFamily);
    const setBackgroundColor = usePoemStore((state) => state.setBackgroundColor);

    const handlePrintClick = () => {
        console.log("Will print some stuff");
        console.log(poemText);
    };

    const handleColorChange = (value: string) => {
        setTextColor(value);
    };

    const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTextSize(parseFloat(event.target.value));
    };

    const handleFontStyleChange = (value: string) => {
        setFontStyle(value);
    };

    const handleFontFamilyChange = (value: string) => {
        setFontFamily(value);
    };

    const handleBackgroundColorChange = (value: string) => {
        setBackgroundColor(value);
    };

    return (
        <div className="controls-container">
            <div className="control-group">
                <div className="control-title">Font Family</div>
                <Select className="control-item" defaultValue="monospace" style={{ width: 120 }} onChange={handleFontFamilyChange}>
                    {fontFamilies.map((family) => (
                        <Option key={family} value={family}>{family}</Option>
                    ))}
                </Select>
            </div>
            <div className="control-group">
                <div className="control-title">Font Style</div>
                <Select className="control-item" defaultValue="normal" style={{ width: 120 }} onChange={handleFontStyleChange}>
                    {fontStyles.map((style) => (
                        <Option key={style} value={style}>{style}</Option>
                    ))}
                </Select>
            </div>
            <div className="control-group">
                <div className="control-title">Color</div>
                <Select className="control-item" defaultValue="#000000" style={{ width: 120 }} onChange={handleColorChange}>
                    {colors.map(({ color, colorCode }) => (
                        <Option key={colorCode} value={colorCode}>{color}</Option>
                    ))}
                </Select>
            </div>
            <div className="control-group">
                <div className="control-title">Text Size</div>
                <div className="control-item">
                    <input
                        id="text-size"
                        type="range"
                        min="2.0"
                        max="5.0"
                        step="0.1"
                        defaultValue="2.0"
                        onChange={handleSizeChange}
                    />
                    <label style={{padding: "10px"}}>{textSize}em</label>
                </div>
            </div>
            <div className="control-group">
                <div className="control-title">Background Color</div>
                <Select className="control-item" defaultValue="#FFFFFF" style={{ width: 120 }} onChange={handleBackgroundColorChange}>
                    {colors.map(({ color, colorCode }) => (
                        <Option key={colorCode} value={colorCode}>{color}</Option>
                    ))}
                </Select>
            </div>
            <div className="control-group">
                <Button className="control-item" type="primary" onClick={handlePrintClick}>Print Poem</Button>
            </div>
        </div>
    );
}

export default Controls;