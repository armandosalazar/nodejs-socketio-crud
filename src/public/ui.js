const notesList = document.querySelector('#container-notes');
const notification = document.querySelector('.alert-success');

function renderNotes(notes) {
    console.log(notes);

    notes.forEach(note => appendNote(note, true));

    notification.textContent = `All notes render successfully!`;
    notification.style = 'display: block;';
    setTimeout(() => {
        notification.style = 'display: none;';
    }, 1000);
}

function renderNote(note, renderFromServer = false) {
    const noteElement = document.createElement('article');
    noteElement.classList.add('note');
    noteElement.classList.add('card');
    noteElement.innerHTML = `
        <h4>${note.title}</h4>
        <p>${note.description}</p>
        <button class="btn btn-info update" data-id=${note.id}>Update</button>
        <button class="btn btn-danger delete" data-id=${note.id}>Delete</button>
    `;

    const deleteButton = noteElement.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        deleteNoteById(note.id);
    });

    const updateButton = noteElement.querySelector('.update');
    updateButton.addEventListener('click', () => {
        updateNoteById(note.id);
    });

    if (renderFromServer) return noteElement;

    notification.textContent = `New note added successfully!`;
    notification.style = 'display: block;';
    setTimeout(() => {
        notification.style = 'display: none;';
    }, 1000);

    return noteElement;
}

function appendNote(note, renderFromServer = false) {
    notesList.appendChild(renderNote(note, renderFromServer));
}