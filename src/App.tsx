import './App.css'
import TextEditor from './components/TextEditor'
import ControlBar from "./components/ControlBar.tsx";
import SyllableCounterFrame from "./components/SyllableCounterFrame.tsx";
import Draggable from "react-draggable";

//TODO re-style controller accordion
//TODO fix for touch interactions on mobile
//TODO more unit tests
//TODO add haiku validation logic
//TODO add background customization tool
//TODO add helper modal

function App() {

    return (
        <div className="app-container">
            <div
                style={{
                    backgroundImage: `url('/haiku-generator/backgrounds/Mount-Fuji.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="poem-area">
                <Draggable>
                    <div className="draggable-area">
                        <ControlBar />
                        <SyllableCounterFrame />
                        <TextEditor />
                    </div>
                </Draggable>
            </div>
        </div>
    )
}

export default App;