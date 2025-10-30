// Ejercicio 10: ¡Haz un respaldo de tus metas!        
// Consigna: 
// Nunca está de más guardar una copia de seguridad. Escribe un programa 
// que copie el contenido de metas.json en un archivo llamado 
// respaldo_metas.json. 
// Pista: Usa el método fs.copyFile para copiar archivos de manera 
// sencilla.

const fs = require('fs');
const archivoOriginal = 'metas.json';
const archivoRespaldo = 'respaldo_metas.json';

if (fs.existsSync(archivoOriginal)) {
    fs.copyFile(archivoOriginal, archivoRespaldo, (err) => {
        if (err) {
            console.error('Error al crear el respaldo: ', err);
        } else {
            console.log('Respaldo creado con éxito.');
            console.log(`Archivo original: ${archivoOriginal}`);
            console.log(`Copia guardada como: ${archivoRespaldo}`);
        }
    });
} else {
    console.log('No se encontró metas.json. No hay nada que respaldar.');
}