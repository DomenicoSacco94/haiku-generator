import './App.css'
import TextEditor from './components/TextEditor'
import Sidebar from './components/Sidebar'
import Controls from './components/Controls'

function App() {
  return (
      <div className="app-container">
          <div className="main-content">
              <div className="text-editor">
                  <TextEditor />
              </div>
              <div className="side-bar">
                  <Sidebar />
              </div>
          </div>
          <div className="controls">
              <Controls />
          </div>
      </div>
  )
}

export default App