import { DataContext } from "../context/DataProvider"
import { useContext, useState } from "react"
import { TextField } from '@mui/material'
import { addNote } from "../ApiCalls";
import { v4 as uuid } from 'uuid';

function InputForm(){
    const { notes, setNotes} = useContext(DataContext);
    const [ inputNote, setInputNote] = useState("");

    const onNoteSubmit = (event) => {
        const note = document.getElementById("noteInput").value
        document.getElementById("noteInput").value = ""
        setInputNote(note)

        const noteID = parseInt(uuid().replace(/\D/g, '')) & 0xFFFFFFFF;
        console.log(noteID)
        addNote(noteID, note)

        let updatedNotes = notes.filter(() => true)
        updatedNotes.push({ noteId : noteID, note: note})
        setNotes(updatedNotes)
    }
    
    return(
        <div style={{margin: "2em", padding: 10, paddingBottom: 15}} className="inputForm">
            <div className="inputDiv">
                <TextField
                    style={
                        {
                            margin: 10, 
                            minHeight: "100px",
                            width: "100%",
                            backgroundColor: "white",
                        }}
                    id="noteInput"
                    label="Enter Note"
                    multiline
                    rows={4}
                    defaultValue=""
                />
                <button style={{alignSelf:"end"}} onClick={onNoteSubmit}>Create Note</button>
            </div>
        </div>
    ) 
}

export default InputForm