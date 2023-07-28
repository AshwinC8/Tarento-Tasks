import './App.css'
import InputForm from './components/InputForm'
import { addNote, getNotes } from './ApiCalls'
import Note from './components/Notes/Note'
import Notes from './components/Notes/Notes'

function App() {
  
  // async function tryFewStuff() {
  //   let notes = []
  //   await getNotes().then(data => notes=data)
  //   await addNote(4, "bleh bleh").then(data => console.log("received data = " + JSON.stringify(data)))
  // }

  // tryFewStuff()
  
  return (
    <>
      <nav className="navbar">
        <h2 className='navHeading'>Note App</h2>
      </nav>
      <div className='mainContent'>
        <InputForm/>
        <Notes/>
        {/* <Note noteInfo={{noteId: 8, note:"blehbleh"}} key={1}/> */}
      </div>
    </>
  )
}

export default App
