import './styles/App.css'
import InputForm from './components/InputForm'
import { addNote, getNotes, deleteNote } from './ApiCalls'
import Note from './components/Notes/Note'
import Notes from './components/Notes/Notes'

function App() {
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
