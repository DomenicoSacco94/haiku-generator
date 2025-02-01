import './App.css'
import TextEditor from './components/TextEditor'
import {usePoemStore} from "./store/usePoemStore.ts";

//TODO craft responsive design
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
                    color: poemStyle.textColor,
                    fontSize: `${poemStyle.textSize}em`,
                    fontStyle: poemStyle.fontStyle,
                    fontFamily: poemStyle.fontFamily,
                    backgroundColor: poemStyle.backgroundColor,
                }}
                className="poem-area">
                <TextEditor />
            </div>
        </div>
    )
}

export default App