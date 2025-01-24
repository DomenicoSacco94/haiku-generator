import './App.css'
import TextEditor from './components/TextEditor'
import Controls from './components/Controls'
import SyllableCounterFrame from "./components/SyllableCounterFrame.tsx";

//TODO allow user to adjust padding from top and form left
//TODO add background customization tool
//TODO deploy on github pages

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