import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'
import { Criminal } from "./Criminal.js"

export const CriminalList = () => {
    getCriminals().then(() => {
        const allTheCriminals = useCriminals()
        const contentElement = document.querySelector(".criminalsContainer")
        for (const criminalObject of allTheCriminals) {
            const criminalHTML = Criminal(criminalObject)
            contentElement.innerHTML += criminalHTML
        }
    }
        /*
            Now that you have the data, what
            component should be rendered?
        */
    )
}