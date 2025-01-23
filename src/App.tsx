import './App.css'
import TextEditor from './components/TextEditor'
import Controls from './components/Controls'

function App() {
  return (
      <div className="app-container">
          <div className="main-content">
              <div className="text-editor">
                  <TextEditor />
              </div>
          </div>
          <div className="controls">
              <Controls />
          </div>
      </div>
  )
}

export default App