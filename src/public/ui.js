const notesList = document.querySelector('#container-notes');

function renderNotes(notes) {
    console.log(notes);
    notes.forEach(note => appendNote(noteUI(note)));
}

function noteUI(note) {
    const noteElement = document.createElement('article');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.description}</p>
        <button class="delete" data-id=${note.id}>Delete</button>
        <button class="update" data-id=${note.id}>Update</button>
    `;

    const deleteButton = noteElement.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        deleteNoteById(note.id);
    });

    const updateButton = noteElement.querySelector('.update');
    updateButton.addEventListener('click', () => {
        updateNoteById(note.id);
    });

    // notes.appendChild(noteElement);

    notification.innerHTML = `<p>New note!</p>`;
    notification.style = 'display: block;';
    setTimeout(() => {
        notification.style = 'display: none;';
    }, 1000);

    return noteElement;
}

function appendNote(note) {
    notesList.appendChild(noteUI(note));
}