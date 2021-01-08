// TASKS:
// add event listener for a click on the form button
// need to gather the data from the form
// convert form data to an object
// send data to be stored in the database, via the API

import { saveNote } from "./NoteProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    const criminalsCollection = useCriminals()
    contentTarget.innerHTML = 
    `
    <section class="noteForm">
        <input type="text" id="author" placeholder="author name">
        <textarea id="text" placeholder="note text"></textarea>
        <select class="dropdown" id="suspect">
            <option value="0">Please select a suspect...</option>
            ${
            criminalsCollection.map( (crime) =>
                `<option value=${crime.id}>
                ${crime.name}
                </option>`
                )
            }
    </select>
    <button id="saveNote">Save Note</button>
    </section>

    `
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // need to gather data from the form
        const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const criminalId = document.querySelector("#suspect").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            author: author,
            text: text,
            crimnalId: criminalId,
            dateCreated: Date.now()
        }

        // Change API state and application state
        
        saveNote(newNote)
    }
})

// DOM needs time for criminals to show up in dropdown, this allows for that
export const NoteForm = () => {
    getCriminals()
    .then( () => render())
}