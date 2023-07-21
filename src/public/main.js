const form = document.querySelector('#form-notes');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');

    const note = { title, description };

    newNote(note);

    form.reset();
});