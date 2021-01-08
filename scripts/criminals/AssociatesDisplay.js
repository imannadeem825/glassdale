//Task: create HTML representation of associates and alibis

import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")


eventHub.addEventListener("click", (event) => {
    if (event.target.id === "closeDialog") {
        associatesDialog.close()
    }
})


eventHub.addEventListener("associatesButtonClicked", (event) => {
    const associatesDialog = document.querySelector("#associatesDialog")
    const dialogText = document.querySelector("#associatesDialog__text")

    const clickedCriminal = useCriminals().find(
        (criminal) => criminal.id === parseInt(event.detail.clickedCriminalId)
    )

    dialogText.innerHTML = `
        <h3>Associates of ${clickedCriminal.name}</h3>
        ${clickedCriminal.known_associates.map( (associate) => `
            <h4>${associate.name}</h4>
            <div>${associate.alibi}</div>
        `).join("")}
    `
    associatesDialog.showModal()
})


export const AssociatesDialog = () => {
    contentTarget.innerHTML =
     `
        <dialog id="associatesDialog">
            <div id="associatesDialog__text"></div>
            <button id="closeDialog">close</button>
        </dialog>
    `
}