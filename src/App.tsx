import './App.css'
import TextEditor from './components/TextEditor'
import Controls from './components/Controls'
import PoemFrame from "./components/PoemFrame.tsx";

//TODO change the layout putting the controls as second half of the poem frame
//TODO create a single object for the style property inside zustand
//TODO add image generation tool
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
                    <PoemFrame />
                </div>
                <div className="controls">
                    <Controls />
                </div>
            </div>
        </div>
    )
}

export default App