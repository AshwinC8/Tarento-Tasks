import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { deleteNote } from "../../ApiCalls";

function Note({noteInfo, index}){
    const {notes, setNotes} = useContext(DataContext)

    const handleDelete = () => {
        const id = noteInfo.noteId
        deleteNote(id)
        
        const updatedNotes = notes.filter(note => note.noteId !== id)
        setNotes(updatedNotes)
    }

    return (
        <div 
            className="card"
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                minWidth: "200px",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "25px",
                borderWidth: "5px",
                borderStyle: "solid",
                backgroundColor: "#322653",
                fontSize: "1em",
                justifyContent: "space-between"
            }}
        >
            <p>{noteInfo.note}</p>
            <Button
                style={{alignSelf:"end",}}
                onClick={handleDelete}
            >
                <DeleteIcon/>
            </Button>
        </div>       
    )
}

export default Note