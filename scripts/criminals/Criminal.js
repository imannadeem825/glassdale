const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")


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


export const Criminal = (criminal) => {
    return `
        <section class="criminal">
            <h2 class="criminal__name">${criminal.name}</h2>
            <div class="criminal__age">${criminal.age}</div>
            <div class="criminal__conviction">${criminal.conviction}</div>
            <div class="criminal__datesOfIncarcerationStart">${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__datesOfIncarcerationEnd">${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            <button id="associates--${criminal.id}">Associate Alibis</button>
        </section>
    `
}