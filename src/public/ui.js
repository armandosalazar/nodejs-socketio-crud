const notesList = document.querySelector('#container-notes');
const notification = document.querySelector('.alert-success');

let idSaved = '';

function renderNotes(notes) {
    console.log(notes);
    notesList.innerHTML = '';

    notes.forEach(note => appendNote(note, true));

    notification.textContent = `All notes render successfully!`;
    notification.style = 'display: block;';
    setTimeout(() => {
        notification.style = 'display: none;';
    }, 2000);
}

function renderNote(note, renderFromServer = false) {
    const noteElement = document.createElement('article');
    noteElement.classList.add('note');
    noteElement.classList.add('card');
    noteElement.classList.add('animate__animated');
    noteElement.classList.add('animate__fadeInUp');
    noteElement.innerHTML = `
        <h4>${note.title}</h4>
        <p>${note.description}</p>
        <button class="btn btn-warning update" data-id=${note.id}>Update</button>
        <button class="btn btn-danger delete" data-id=${note.id}>Delete</button>
    `;

    const deleteButton = noteElement.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        deleteNote(deleteButton.dataset.id);
    });

    const updateButton = noteElement.querySelector('.update');
    updateButton.addEventListener('click', () => {
        form.title.value = note.title;
        form.description.value = note.description;
        form.getElementsByTagName('button')[0].textContent = 'Update';
        form.getElementsByTagName('button')[0].classList.remove('btn-primary');
        form.getElementsByTagName('button')[0].classList.add('btn-success');

        idSaved = updateButton.dataset.id;
    });

    if (renderFromServer) return noteElement;

    notification.textContent = `New note added successfully!`;
    notification.style = 'display: block;';
    setTimeout(() => {
        notification.style = 'display: none;';
    }, 2000);

    return noteElement;
}

function appendNote(note, renderFromServer = false) {
    console.log(note);
    notesList.appendChild(renderNote(note, renderFromServer));
}