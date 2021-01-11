import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { WitnessHTMLConverter } from "./Witness.js"

// doesn't matter what this variable is called
let visible = false

const contentTarget = document.querySelector(".witnessList")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("showWitnessesClicked", () => {
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


