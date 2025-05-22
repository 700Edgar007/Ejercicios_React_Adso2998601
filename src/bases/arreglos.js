//const frutas= [];
//frutas.push("platano verde");
// frutas.push("platano NEGRO");

// console.log(frutas);



// const edades = [12, 23, 45, 67, 89, 90, 100];

// let edades2 = edades

// edades2.push(1000);
// edades2.splice(0, 1, 10000);
// edades2.unshift(10000999999);

// //quiero agragar un elemento al principio del array


// console.log(edades.length);
// console.log(edades2.length);

// console.log(edades);
// console.log(edades2);



// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let tablados=[...numeros,10]; clona el arreglo y le agrega el 10 al final
// let naturales=[...numeros,10];
// console.log(naturales);

// const tabla= naturales.map(function(numero){
//     return numero*2;

// } )
// console.log(tabla);

// const tabla3= naturales.map(function(numero){
//     return numero*3;

// } )
// console.log(tabla3);

const preciosVeiculos = [100, 200000, 210000, 220000];
console.table(preciosVeiculos);


let Iva= [...preciosVeiculos];

const tablaCONIVA= Iva.map(function(numero){
    let total= numero*0.19+numero;
    return total;

} )
console.table(tablaCONIVA);