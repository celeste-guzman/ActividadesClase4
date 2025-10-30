// Ejercicio 8: Cuenta tus metas        
// Consigna: 
// ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu 
// archivo metas.json y cuente cuántas metas tienes actualmente. 
// Pista: Usa length para obtener la cantidad de elementos en la lista. 

const fs = require('fs');
const nombreArchivo = 'metas.json';

fs.readFile(nombreArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo.', err);
        return;
    }

    const metas = JSON.parse(data);
    const cantidad = metas.length;
    console.log(`Tienes ${cantidad} metas actualmente.`);
});