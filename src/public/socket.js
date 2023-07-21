socket = io();

function saveNote(note) {
    socket.emit('client:[new-note]', note);
}

socket.on('server:[new-note]', appendNote);