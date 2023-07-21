import { v4 as uuid } from 'uuid';

const notes = [];

export default (server) => {
    /**
     * Cuando emitimos un evento desde el cliente, solo el cliente
     * que emite el evento recibe la respuesta del servidor, pero no los
     * demás clientes, por lo que no se actualiza la lista de notas en
     * los demás clientes
     */
    /**
     * Cuando emitimos un evento desde el servidor, todos los clientes
     * conectados reciben la respuesta del servidor, por lo que se actualiza
     * la lista de notas en todos los clientes
     */
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
         * que ya están en el servidor, así evitamos que el cliente renderice
         * las notas en cada conexión de un nuevo cliente
         */
        socket.emit('server:[notes]', notes);
        /**
         * Cuando el cliente emite un evento 'client:[new-note]'
         * el servidor recibe la nota y la agrega al array de notas
         * y emite un evento 'server:[new-note]' con la nota agregada
         * para que el cliente la reciba y la renderice
         */
        socket.on('client:[add-note]', (data) => {
            const note = { id: uuid(), ...data };
            console.log(note);

            notes.push(note);

            server.emit('server:[add-note]', note);
        });
        /**
         * Cuando el cliente emite un evento 'client:[delete-note]'
         * el servidor recibe el id de la nota a eliminar y la elimina
         * del array de notas y emite un evento 'server:[delete-note]'
         * con el array de notas actualizado para que el cliente lo
         * reciba y lo renderice
         */
        socket.on('client:[delete-note]', (id) => {
            console.log('Delete note:', id);

            const index = notes.findIndex(note => note.id === id);
            notes.splice(index, 1);

            server.emit('server:[delete-note]', notes);
        });
        /**
         * Cuando el cliente emite un evento 'client:[update-note]'
         * el servidor recibe el id de la nota a actualizar y los datos
         * de la nota actualizada, actualiza la nota en el array de notas
         * y emite un evento 'server:[update-note]' con el array de notas
         * actualizado para que el cliente lo reciba y lo renderice
         */
        socket.on('client:[update-note]', (id, data) => {
            console.log('Update note:', id, data);

            const index = notes.findIndex(note => note.id === id);
            notes[index] = { id, ...data };

            server.emit('server:[update-note]', notes);
        });
    });
}