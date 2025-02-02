import './App.css'
import TextEditor from './components/TextEditor'
import {usePoemStore} from "./store/usePoemStore.ts";

//TODO re-style controller accordion
//TODO fix for touch interactions on mobile
//TODO more unit tests
//TODO add haiku validation logic
//TODO add background customization tool
//TODO add helper modal

function App() {

    const poemStyle = usePoemStore((state) => state.poemStyle);

    return (
        <div className="app-container">
            <div
                style={{
                    backgroundColor: poemStyle.backgroundColor,
                }}
                className="poem-area">
                <TextEditor />
            </div>
        </div>
    )
}

export default App