import { useContext, useEffect } from "react"
import { DataContext } from "../../context/DataProvider"
import Note from "./Note"
import { getNotes } from "../../ApiCalls"

function Notes(){
    const { notes, setNotes} = useContext(DataContext)
    
    useEffect(() => { 
        async function initNotes(){
            let notes = []
            await getNotes().then( data => {notes=data; setNotes(notes);})
        }
        initNotes()
    }, [])

    return(
        <div 
            style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                minWidth: "200px",
                height: "auto",
                gap: "30px",
                marginTop: "2em",
                alignItems: "center",
            }}
        >
            {
                notes.map( (noteInfo, index) => (
                    <Note noteInfo={noteInfo} index={index+1} key={index}/>
                ))
            }
        </div>
    )
}

export default Notes