const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessContainer")


//TODO
eventHub.addEventListener("click", (event) => {
    if (event.target.id.includes("associates--")) {
        const customEvent = new CustomEvent("associatesButtonClicked", {
            detail: {
                clickedCriminalId: event.target.id.split("--")[1]
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})


export const WitnessHTMLConverter = (witness) => {
    return `
        <section class="witness">
            <h2 class="witness__name">${witness.name}</h2>
            <div class="witness__statements">${witness.statements}</div>
            <button id="${witness.id}">Witness Statements</button>
        </section>
    `
}