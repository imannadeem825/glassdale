import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js"; 
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
        // convert the notes objects to HTML with NoteHTMLConverter
        (note) => NoteHTMLConverter(note)).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}
