//objetos literales

const { getElementError } = require("@testing-library/dom");

const estudiante = {
    nombre: "Edgar",
    materia: "Sociales",
    notas: {
        tona1: 4.0,
        tona2: 4.0,
        tona3: 4.0,
        tona4: 4.0
    },
    
    
};

console.table(estudiante);


function promedio(nota1 ,nota2, nota3, nota4) {
    return(`promedio: (${nota1} + ${nota2} + ${nota3} + ${nota4}) / 4`);
    
}

console.table(promedio(estudiante.notas.tona1, estudiante.notas.tona2, estudiante.notas.tona3, estudiante.notas.tona4));







