export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note--suspect">Suspect: ${ noteObject.criminalName }</div>
            <div class="note--text">${ noteObject.text }</div>
            <div class="note--author">Author: ${ noteObject.author }</div>
            <div class="note--dateCreated">Date Created: ${ new Date(noteObject.dateCreated).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}"><Delete</button>
        </section>
    `
}