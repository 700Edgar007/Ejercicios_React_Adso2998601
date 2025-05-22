//template String
const nombre = "Edgar  ";
const apellido = "Rodriguez";
const edad = 20;

const descrico = `su nombre: ${nombre} apellido:  ${apellido} edad: ${edad} `;

console.log(descrico);

function saludar(nombre) {
    return(`hola: ${nombre} `);
}

console.log(saludar("Edgar"));


console.log(`este es un texto simple: ${saludar("Edgar")}`);

