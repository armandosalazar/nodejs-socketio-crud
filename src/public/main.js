socket = io(); // io('http://localhost:4001');

const form = document.querySelector('#form-notes');
const notification = document.querySelector('#notification');
const notes = document.querySelector('#container-notes');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');

    const note = { title, description };

    socket.emit('client:[new-note]', note);
});

socket.on('server:[new-note]', (note) => {
    console.log(note);

    const noteElement = document.createElement('article');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.description}</p>
    `;

    notes.appendChild(noteElement);


    notification.innerHTML = `<p>New note!</p>`;
    notification.style = 'display: block;';
    setTimeout(() => {
        notification.style = 'display: none;';
    }, 1000);
});