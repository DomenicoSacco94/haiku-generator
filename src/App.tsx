import './App.css'
import TextEditor from './components/TextEditor'
import Controls from './components/Controls'

//TODO create a single object for the style property inside zustand
//TODO change the layout putting the controls as second half of the poem frame
//TODO add image generation tool
//TODO add background customization tool
//TODO deploy on github pages

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