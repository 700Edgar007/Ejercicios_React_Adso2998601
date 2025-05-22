// Desestruturacion de objetos

//const { useContext } = require("react")

const persona = {
    nombre: "Edgar",
    apellido: "Rodriguez",
    edad: 20,
    Clave: "123456789",
    pais: "Colombia",
    
}

// const {nombre,edad ,Clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(Clave);
// console.log(persona.pais);

const useContext = ({ nombre, edad, Clave, rango = "sargeneto" })=> {


    //console.log(nombre, edad, Clave, rango);

    return { 
        rango,
        nombreClave:Clave,
        anios: edad,
        ubicacion:{
            lat: 14.1234,
            lng: -12.1234
        }
     };
   
}

const{nombreClave,anios,ubicacion:{lat,lng}} = useContext(persona);

//console.log(nombreClave,anios,lat,lng);


console.table(useContext(persona));

console.table(persona);