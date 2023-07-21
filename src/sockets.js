import { v4 as uuid } from 'uuid';

const notes = [];

export default (server) => {
    server.on('connection', (socket) => {
        console.log('Client connected:', socket.id);

        /**
         * Cuando el cliente se conecta, el servidor emite un evento
         * 'server:[notes]' con el array de notas para que el cliente
         * las reciba y las renderice
         */
        /**
         * Aquí se emite el evento desde el mismo cliente que se conecta
         * de esta manera el cliente que se conecta recibe las notas
         * que ya están en el servidor
         */
        socket.emit('server:[notes]', notes);
        /**
         * Cuando el cliente emite un evento 'client:[new-note]'
         * el servidor recibe la nota y la agrega al array de notas
         * y emite un evento 'server:[new-note]' con la nota agregada
         * para que el cliente la reciba y la renderice
         */
        socket.on('client:[new-note]', (note) => {
            console.log(note);

            notes.push({ id: uuid(), ...note });

            server.emit('server:[new-note]', note);
        });
    });
}