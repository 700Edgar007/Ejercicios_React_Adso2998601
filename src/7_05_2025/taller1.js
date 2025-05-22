const persona = {
    nombre: "Edgar",
    edad: 20,
    ocupacion: "Desarrollador de software",
    pais: "Colombia",
    
}


console.table(persona);
const {nombre,edad ,ocupacion} = persona;
console.table(nombre,edad,ocupacion);

const cosa = ({ nombre, edad,ocupacion ,SegunDoTrabajo = "analitica de datos" })=> {
    return { 
        nombre,
        edad,
        ocupacion,
        SegunDoTrabajo
        
     };
}

console.table(cosa(persona));