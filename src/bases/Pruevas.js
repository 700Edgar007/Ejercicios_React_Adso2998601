//objetos literales



const estudiante = {
    nombre: "juan eduardo ",
    materia: "matematicas",
    notas:{
        primerperiodo: 10,
        segundoperiodo: 9,
        tercerperiodo: 8,
         cuartoperiodo: 7
        
    }, 
    
};

estudiante.promedio = (
    estudiante.notas.primerperiodo +
    estudiante.notas.segundoperiodo +
    estudiante.notas.tercerperiodo +
    estudiante.notas.cuartoperiodo
) / 4;

console.table(estudiante);
console.log(estudiante.promedio);