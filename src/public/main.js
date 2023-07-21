const form = document.querySelector('#form-notes');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');

    const note = { title, description };

    if (idSaved != '') {
        updateNote(idSaved, note);
        idSaved = '';
        form.getElementsByTagName('button')[0].textContent = 'Add';
        form.getElementsByTagName('button')[0].classList.remove('btn-success');
        form.getElementsByTagName('button')[0].classList.add('btn-primary');
    } else {
        addNote(note);
    }


    form.reset();
});