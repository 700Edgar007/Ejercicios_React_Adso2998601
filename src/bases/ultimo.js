const numeros = [3,5,8,12,7,10,15,2];

//con el metodo map crear un nuevi arreglo que quede de esata forma [1,1,0,0,1,0,1] uno si el numero es impar y cero si es par
//true = par y false si es impar

// const resultado = numeros.map((numero) => {
//     let contadorPAR = 0;
//     let contadorIMPAR = 0;
//     if (numero % 2 === 0) {
//         contadorPAR++;
       
//     } else {
//         contadorIMPAR++;
       
//     }
//     return contadorPAR && contadorIMPAR;

// });


const pares = numeros.filter(numero => numero % 2 === 0);
const impares = numeros.filter(numero => numero % 2 !== 0);

// console.table(resultado(numeros));

const resultadoEdpar = numeros.map(numero => numero%2 ==0) 


console.table(numeros);
console.table(resultadoEdpar);
console.table(pares);
console.table(impares);