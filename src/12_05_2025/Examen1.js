// un pequeña productora de cine independiente desea digitalizar su catalogo de peliculas. para ello,
//contrata a un equipo de desarrolladores para construir una aplicacion base que permita manejar una colecion de peliculas 
// almacenadas en un arreglo de objetos desan poder consultar peliculas , genero , año o por nombre , 
// adicional mente desean que el codigo este modularizado para poder crecer la aplicacion en un futuro (modul exfor)

//data aaprte 20 peliculas funciones tipo flecha 


import peliculas from './DATA/peliculas';

export const generos = (genero) => peliculas.filter((peliculas) => peliculas.genero===genero);


// console.table(generos('Acción'));
// console.table(generos('Drama'));
// console.table(generos('Ciencia Ficción'));
// console.table(generos('Animación'));


export const NombresTOdos = (nombre) => peliculas.filter((peliculas) => peliculas.nombre);
// console.table(NombresTOdos());


export const Nombres = (nombre) => peliculas.filter((peliculas) => peliculas.nombre===nombre);
// console.table(Nombres('Wall-E'));


export const año = (año) => peliculas.filter((peliculas) => peliculas.año>2010 && peliculas.año<2020);

console.table(año());





// un pequeña productora de cine independiente desea digitalizar su catalogo de peliculas. para ello,
//contrata a un equipo de desarrolladores para construir una aplicacion base que permita manejar una colecion de peliculas 
// almacenadas en un arreglo de objetos desan poder consultar peliculas , genero , año o por nombre , 
// adicional mente desean que el codigo este modularizado para poder crecer la aplicacion en un futuro (modul exfor)

//data aaprte 20 peliculas funciones tipo flecha 



import peliculas from './DATA/peliculas';

const generos = (genero) => peliculas.filter((peliculas) => peliculas.genero===genero);


console.table(generos('Acción'));
console.table(generos('Drama'));
console.table(generos('Ciencia Ficción'));
console.table(generos('Animación'));


const NombresTOdos = (nombre) => peliculas.filter((peliculas) => peliculas.nombre);
console.table(NombresTOdos());


const Nombres = (nombre) => peliculas.filter((peliculas) => peliculas.nombre===nombre);
console.table(Nombres('Wall-E'));


const año = (año) => peliculas.filter((peliculas) => peliculas.año>2010 && peliculas.año<2020);

console.table(año());


const añoPOrNombre = (nombre) => peliculas.filter((peliculas) => peliculas.nombre===nombre).map((peliculas) => [peliculas.año, peliculas.genero]);/// importante 


console.table(añoPOrNombre('Wall-E'));
