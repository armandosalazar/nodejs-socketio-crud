socket = io(); // io('http://localhost:4001');

const form = document.querySelector('#form-notes');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');

    const note = { title, description };

    socket.emit('client:[new-note]', note);
});

socket.on('ping', () => {
    console.log('ping');
    socket.emit('pong');
});