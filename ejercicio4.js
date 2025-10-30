// Ejercicio 4: ¿Existe tu perfil?
// Consigna: Antes de hacer cualquier cosa, 
// asegúrate de que tu archivo perfil.json existe.
// Si no existe, crea uno nuevo con un perfil básico.
// Pista: Usa fs.existsSync para verificar la existencia del archivo.

const fs = require('fs');
const archivo = 'perfil.json';

if (!fs.existsSync(archivo)) {
    const perfil = {
        nombre: 'Celeste',
        edad: 27,
        ciudad: 'Pilar'
    };
    fs.writeFileSync(archivo, JSON.stringify(perfil, null, 2));
    console.log('Archivo perfil.json no existía. Se ha creado un nuevo archivo con un perfil básico.');
} else {
    console.log('El archivo perfil.json ya existe.');
}