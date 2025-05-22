import heroes from './../DATA/heroes'; // Import the default export from heroes.js
// import {owners} from './DATA/heroes';

export const getheroeById = (id) => heroes.find((heroe) => heroe.id === id)//find es una busqueda

// console.table(getheroeById(7));

// export const getheroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// // console.table(getheroesByOwner('Marvel'));
// console.table(getheroesByOwner('DC'));

