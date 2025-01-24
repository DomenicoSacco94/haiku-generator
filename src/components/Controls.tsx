import { usePoemStore } from '../store/usePoemStore';
import { Button, Select } from 'antd';
import './Controls.css';
import { toPng } from 'html-to-image';

const { Option } = Select;

const colors = [
    { color: 'Black', colorCode: '#000000' },
    { color: 'Red', colorCode: '#FF0000' },
    { color: 'Green', colorCode: '#00FF00' },
    { color: 'Blue', colorCode: '#0000FF' },
    { color: 'White', colorCode: '#FFFFFF' },
    { color: 'Gray', colorCode: '#808080' },
];

const fontStyles = ['normal', 'italic'];
const fontFamilies = ['monospace', 'Comic Sans MS', 'Arial', 'Times New Roman'];

function Controls() {
    const poemStyle = usePoemStore((state) => state.poemStyle);
    const setPoemStyle = usePoemStore((state) => state.setPoemStyle);

    const handlePrintClick = () => {
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
                });
        }
    };

    const handleChange = (attribute: string, value: string | number) => {
        setPoemStyle({ [attribute]: value });
    };

    return (
        <div className="controls-container">
            <div className="control-group-column">
                <div className="control-group">
                    <div className="control-title">Font Family</div>
                    <Select className="control-item" defaultValue="monospace" style={{ width: 120 }} onChange={(value) => handleChange('fontFamily', value)}>
                        {fontFamilies.map((family) => (
                            <Option key={family} value={family}>{family}</Option>
                        ))}
                    </Select>
                </div>
                <div className="control-group">
                    <div className="control-title">Font Style</div>
                    <Select className="control-item" defaultValue="normal" style={{ width: 120 }} onChange={(value) => handleChange('fontStyle', value)}>
                        {fontStyles.map((style) => (
                            <Option key={style} value={style}>{style}</Option>
                        ))}
                    </Select>
                </div>
                <div className="control-group">
                    <div className="control-title">Text Color</div>
                    <Select className="control-item" defaultValue="#000000" style={{ width: 120 }} onChange={(value) => handleChange('textColor', value)}>
                        {colors.map(({ color, colorCode }) => (
                            <Option key={colorCode} value={colorCode}>{color}</Option>
                        ))}
                    </Select>
                </div>
                <div className="control-group">
                    <div className="control-title">Background Color</div>
                    <Select className="control-item" defaultValue="#FFFFFF" style={{ width: 120 }} onChange={(value) => handleChange('backgroundColor', value)}>
                        {colors.map(({ color, colorCode }) => (
                            <Option key={colorCode} value={colorCode}>{color}</Option>
                        ))}
                    </Select>
                </div>
            </div>
            <div className="control-group-column">
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
                            onChange={(event) => handleChange('textSize', parseFloat(event.target.value))}
                        />
                        <label style={{padding: "10px"}}>{poemStyle.textSize}em</label>
                    </div>
                </div>
                <div className="control-group">
                    <Button className="control-item" type="primary" onClick={handlePrintClick}>Print Poem</Button>
                </div>
            </div>
        </div>
    );
}

export default Controls;