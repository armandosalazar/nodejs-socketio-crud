// socket = io('http://localhost:4001');
socket = io();

socket.on('server:[notes]', renderNotes);
socket.on('server:[add-note]', appendNote);
socket.on('server:[delete-note]', renderNotes);
socket.on('server:[update-note]', renderNotes);

const addNote = (note) => socket.emit('client:[add-note]', note);
const deleteNote = (id) => socket.emit('client:[delete-note]', id);
const updateNote = (id, data) => socket.emit('client:[update-note]', id, data);