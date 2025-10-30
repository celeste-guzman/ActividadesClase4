// Ejercicio 6: Tu lista de metas        
// Consigna: 
// Es momento de planear tus metas. Crea un archivo llamado metas.json 
// con una lista vacía al principio. Luego, agrega metas como: “Aprender 
// Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo. 
// Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la 
// lista.

const fs = require('fs');
const nombreArchivo = 'metas.json';

let metas = [];
if (fs.existsSync(nombreArchivo)) {
    const data = fs.readFileSync(nombreArchivo, 'utf8');
    metas = JSON.parse(data);
    console.log('Archivo metas.json encontrado. Cargando metas existentes...');
} else {
    console.log('No existe metas.json. Creando uno nuevo...');
}

metas.push('Pasar la carrera');
metas.push('Viajar a China');

fs.writeFile(nombreArchivo, JSON.stringify(metas, null,2), (err) => {
    if (err) {
        console.log('Error al guardar metas.', err);
    } else {
        console.log('Metas guardadas con éxito.');
        console.log('Tus metas actuales son: ', metas);
    }
});