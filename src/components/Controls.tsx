import { usePoemStore } from '../store/usePoemStore';
import { Button, Select } from 'antd';
import './Controls.css';

const { Option } = Select;

const colors = [
    { color: 'Black', colorCode: '#000000' },
    { color: 'Red', colorCode: '#FF0000' },
    { color: 'Green', colorCode: '#00FF00' },
    { color: 'Blue', colorCode: '#0000FF' },
];

function Controls() {
    const poemText = usePoemStore((state) => state.poemText);
    const textSize = usePoemStore((state) => state.textSize);
    const setTextColor = usePoemStore((state) => state.setTextColor);
    const setTextSize = usePoemStore((state) => state.setTextSize);

    const handlePrintClick = () => {
        console.log("Will print some stuff");
        console.log(poemText);
    };

    const handleColorChange = (value: string) => {
        setTextColor(value);
    };

    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextSize(parseFloat(event.target.value));
    };

    return (
        <div className="controls-container">
            <Select className="control-item" defaultValue="#000000" style={{ width: 120 }} onChange={handleColorChange}>
                {colors.map(({ color, colorCode }) => (
                    <Option value={colorCode}>{color}</Option>
                ))}
            </Select>
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
            <Button className="control-item" type="primary" onClick={handlePrintClick}>Print Poem</Button>
        </div>
    );
}

export default Controls;