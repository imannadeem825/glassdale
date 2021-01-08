import { CriminalList } from "./criminals/CriminalList.js"
CriminalList()

import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
ConvictionSelect()

import { OfficerSelect } from "./officers/OfficerSelect.js"
OfficerSelect()

import { NoteForm } from "./notes/NoteForm.js"
NoteForm()

import { ShowNoteButton } from "./notes/ShowNotesButton.js"
ShowNoteButton()

import "./notes/NoteList.js"

// import { Criminal } from "./criminals/Criminal.js"
// import { AssociatesDialog } from "./criminals/AssociatesDisplay.js"



// Alibis ( ch 8 )
// Add a button to Criminal (HTML converter ) component
// Add new component to display known associates: AssociatesDisplay
//       job: create HTML rep of associates and alibis
// Dispatch custom event from Criminal.js to alert other modules that the associates btn has been clicked
// Listen for knownAssociatesClicked event on AssociatesDisplay
// Associates Display component needs to find the criminal with the matching id
// Loop over the found criminal's known_associates array and display them


//http://localhost:8080
//http://localhost:5000   