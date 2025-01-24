import './App.css'
import TextEditor from './components/TextEditor'
import Controls from './components/Controls'
import SyllableCounterFrame from "./components/SyllableCounterFrame.tsx";

//TODO add background customization tool
//TODO deploy on github pages
//TODO craft responsive design
//TODO add helper modal

function App() {
    return (
        <div className="app-container">
            <div className="poem-area">
                <TextEditor />
            </div>
            <div className="tools-container">
                <div className="poem-display-area">
                    <SyllableCounterFrame />
                </div>
                <div className="controls">
                    <Controls />
                </div>
            </div>
        </div>
    )
}

export default App