socket = io('http://localhost:4001');

socket.on('server:[notes]', renderNotes);

socket.on('server:[new-note]', appendNote);

newNote = (note) => socket.emit('client:[new-note]', note);