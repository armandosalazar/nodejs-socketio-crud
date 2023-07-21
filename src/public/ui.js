const notes = document.querySelector('#container-notes');

function appendNote(note) {
    const noteElement = document.createElement('article');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.description}</p>
        <button>Delete</button>
        <button>Update</button>
    `;

    notes.appendChild(noteElement);

    notification.innerHTML = `<p>New note!</p>`;
    notification.style = 'display: block;';
    setTimeout(() => {
        notification.style = 'display: none;';
    }, 1000);
}