//objetos literales

const { getElementError } = require("@testing-library/dom");

const escitor= {
    nombre: "Edgar",
    genero: "Prostitucion",
    obraimportante: "el burdel de la calle",
        localizacion: {
            pais: "Mexico",
            ciudad: "Guadalajara",
            departamento: "su madre",
        }

   
}

console.table(escitor); 
console.log(escitor.nombre); //imprime el valor de la variable nombre en la consola del navegador
console.table(escitor.localizacion);