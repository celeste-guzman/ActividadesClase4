// Ejercicio 9: Filtra tus metas completas    
// Consigna: 
// Supongamos que cada meta tiene un estado: “completa” o “pendiente”. 
// Filtra las metas que ya completaste y muéstralas en la consola. 
// Pista: Modifica las metas para que sean objetos con un atributo 
// estado. Usa el método filter para obtener las completas.

const fs = require('fs');
const nombreArchivo = 'metas.json';

fs.readFile(nombreArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer metas.json', err);
        return;
    }

    let metas = JSON.parse(data);
    if (typeof metas[0] === 'string') {
        metas = metas.map(meta => ({
            nombre: meta,
            estado: 'pendiente'
        }));
        console.log('Se actualizaron las metas para incluir un estado.');
        fs.writeFileSync(nombreArchivo, JSON.stringify(metas, null, 2));
    }

    metas[0].estado = 'completa';
    const metasCompletas = metas.filter(meta => meta.estado === 'completa');

    console.log('Metas completas: ');
    console.log(metasCompletas);
});