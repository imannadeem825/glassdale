import { getNotes, useNotes, deleteNote } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js"; 
import { useCriminals } from "../criminals/CriminalProvider.js"
// doesn't matter what this variable is called
let visible = false

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")


eventHub.addEventListener("showNotesClicked", () => {
    //when no notes are shown on page, then render notes and make visibility true
    if (visible === false) {
        NoteList()
        visible = true
    // when notes are shown, clear notes before changing value of visibility to false
    } else {
        contentTarget.innerHTML = ""
        visible = false
    }
})

// if notes are already visible, add saved note to visible list. 
// if notes are not visible, nothing should happen. this is checking 
eventHub.addEventListener("noteStateChanged", () => {
    if (visible === true) {
        NoteList()
    }
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        (note) => {
           const associatedCriminal = criminals.find( 
               (criminal) => {
                   return criminal.id === note.criminalId
               }
            )
           note.criminalName = associatedCriminal.name
           return NoteHTMLConverter(note)}).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    let criminals = useCriminals()
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes, criminals)
        })
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteNote(noteId).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
    }
})