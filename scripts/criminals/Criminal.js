export const Criminal = (criminal) => {
    return `
        <section class="criminal">
            <h2 class="criminal__name">${criminal.name}</h2>
            <div class="criminal__age">${criminal.age}</div>
            <div class="criminal__conviction">${criminal.conviction}</div>
            <div class="criminal__datesOfIncarcerationStart">${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__datesOfIncarcerationEnd">${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>
    `
}