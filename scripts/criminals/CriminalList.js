import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { AssociatesDialog } from "./AssociatesDisplay.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

const render = (criminals) => {
    let criminalCards = []
    
    for (const perp of criminals) {
        criminalCards.push(Criminal(perp))
    }
    // contentTarget.innerHTML = criminalCards.join("")
    contentTarget.innerHTML = `${criminalCards.join("")} ${AssociatesDialog()}`
}




// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        console.log("crime", event.detail)
        const crimes = useConvictions()
        const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))

        const criminals = useCriminals()
        const matchingCriminals = criminals.filter( (criminal) => 
            criminal.conviction === crime.name
        )
        
       render(matchingCriminals)
    }
})


eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const choosingCriminalsByOfficer =
    criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
    contentTarget.innerHTML = ""
    render(choosingCriminalsByOfficer)
})



export const CriminalList = () => {
    getCriminals()
        .then(() => {
            let perps = useCriminals()
            render(perps)
        })
}