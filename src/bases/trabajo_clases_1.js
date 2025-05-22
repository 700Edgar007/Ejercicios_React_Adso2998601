//crear un ibjeto con 10 perosas  que tangan nombre edad ciudad 7

//sando funcion tipo fecha filtramos los que son mayores de edad usar filter 


const usuarios = {
    persona_1: {
        nombre: "Edgar Rodriguez",
        edad: 20,
        ciudad: "Guadalajara",
    },
    persona_2: {
        nombre: "yeison meguia",
        edad: 17,
        ciudad: "armenia",
        
    },
    persona_3: {
        nombre: "Manuel Medrano",
        edad: 25,
        ciudad: "manizales",
        
    },
    persona_4: {
        nombre: "Juan comes",
        edad: 10,
        ciudad: "Bogotá",
 
    },  
    persona_5: {
        nombre: "Pedro sanchez",
        edad: 35,
        ciudad: "Cali",
        
    },
    persona_6: {
        nombre: "Juan pablo",
        edad: 60,
        ciudad: "Bogotá",
 
    },  
    persona_7: {
        nombre: "yiset",
        edad: 35,
        ciudad: "Cali",
        
    },
    persona_8: {
        nombre: "caren",
        edad: 50,
        ciudad: "armenia",
 
    },  
    persona_9: {
        nombre: "alejandra",
        edad: 19,
        ciudad: "armenia",
        
    },
    persona_10: {
        nombre: "migel",
        edad: 12,
        ciudad: "Bogotá",
 
    }

};
  



const mayoresEdad = Object.values(usuarios).filter(persona => persona.edad >= 18).map(persona => ({ nombre: persona.nombre, ciudad: persona.ciudad }));


console.table(mayoresEdad);