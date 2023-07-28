const URL = "http://localhost:8080"

export const getNotes = async () => {

    const request = await fetch(`${URL}/getAllNote`,{
        method: "GET",
    })

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
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(body)
    })

    const responseData = await response.json()

    console.log(responseData)
    return responseData
}