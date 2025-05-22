// Desestruturacion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks", "Gohan"];

const[ , ,  p3] = personajes;

console.table(p3);
console.table(personajes);

const retornaArreglo = () => {

    return ["ABC", 123];
};
console.table(retornaArreglo());

const[letras, numeros] = retornaArreglo();

console.table(letras, numeros);
