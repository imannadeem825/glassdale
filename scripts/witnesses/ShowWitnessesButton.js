const contentTarget = document.querySelector(".witnessListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showWitnesses'>Toggle Notes</button>"
}




//joe's way

// const contentTarget = document.querySelector(".witnessStatementsBtn")
// const eventHub = document.querySelector(".container")

// eventHub.addEventListener("click", clickEvent => {
//     const witnessBtn = clickEvent.target
//     if (clickEvent.target.id === "showWitnessStatements") {
//         let btnAction = ""
//         if (witnessBtn.innerText === "Witnesses Statements") {
//             btnAction = "show"
//             witnessBtn.innerText = "Show Criminals"
//         } else {
//             btnAction = "hide"
//             witnessBtn.innerText = "Witnesses Statements"
//         }

//         const customEvent = new CustomEvent("showStatementsClicked", {
//             details: {btnAction: btnAction}
//         })
//         eventHub.dispatchEvent(customEvent)
//     }
// })

// export const ShowWitnessStatementsBtn = () => {
//     contentTarget.innerHTML = "<button id='showWitnessStatements'>WitnessesStatements</button>"
// }

// call this function on main.js ^

