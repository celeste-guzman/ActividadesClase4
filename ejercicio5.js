// Ejercicio 5: ¡Despídete de tu perfil!
// Consigna: ¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json. Verifica que el archivo existe antes de intentar borrarlo.
// Pista: Usa fs.unlink para eliminar archivos

const fs = require('fs');
const archivo = 'perfil.json';

if (fs.existsSync(archivo)) {
    fs.unlink(archivo, (err) => {
        if (err) {
            console.error('Error al eliminar el archivo:', err);
        } else {
            console.log('Archivo perfil.json eliminado exitosamente.');
        }
    });
} else {
    console.log('El archivo perfil.json no existe.');
}