const URL = "http://localhost:8080"

export const getNotes = async () => {

    const request = await fetch(`${URL}/getAllNote`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json', 
        },
    }).then(error => {console.log(error); return error})

    const data = await request.json()
    console.log(data)
    return data
}


export async function addNote(noteID, note){
    const body = {
        "noteId": noteID,
        "note": note
    }

    const response = await fetch(`${URL}/addNote`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(body)
    }).then(error => {console.log(error); return error;})

    const responseData = await response.json()
    console.log(responseData)
    return responseData
}

export async function deleteNote(noteID){

    const response = await fetch(`${URL}/deleteNote/${noteID}`,{
        method: "DELETE",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json', 
        },
    }).then(error => {console.log(error); return error;})

    const responseData = await response.json()
    console.log(responseData)
    return responseData
}