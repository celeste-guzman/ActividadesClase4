// Ejercicio 7: Encuentra tu meta perdida     
// Consigna: 
// Revisa tu lista de metas en el archivo metas.json. Busca si una meta 
// específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala. 
// Pista: Usa fs.readFile para leer el archivo y un método como find para 
// buscar en la lista.

const fs = require('fs');
const nombreArchivo = 'metas.json';
const nuevaMeta = 'Viajar a China';

fs.readFile(nombreArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer metas.json.' , err);
        return;
    }
     let metas = JSON.parse(data);
     const existe = metas.find(meta => meta === nuevaMeta);
     if(existe) {
        console.log(`La meta '${nuevaMeta}' ya está en tu lista.`);
     } else {
        console.log(`La meta '${nuevaMeta}' no estaba, agregámdola a la lista...`);
        metas.push(nuevaMeta);

        fs.writeFile(nombreArchivo, JSON.stringify(metas, null, 2), (err) => {
            if(err) {
                console.error('Error al guardar la nueva meta.', err);
            } else {
                console.log('Lista actualizada con éxito.');
                console.log('Metas actuales: ', metas);
            }
        });
     }
});