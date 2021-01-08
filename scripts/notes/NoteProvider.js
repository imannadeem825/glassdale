const eventHub = document.querySelector(".container")
let notes = []

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

// retrieving notes data, turning into json, putting into notes array
export const getNotes = () => {
    return fetch('http://localhost:8080/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const useNotes = () => {
    return notes.slice()
}


export const saveNote = note => {
    let stringifiedObj = JSON.stringify(note)
    return fetch('http://localhost:8080/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}


export const deleteNote = noteId => {
    return fetch( `http://localhost:8080/notes/${noteId}`, {
        method: DELETE
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
    
}
