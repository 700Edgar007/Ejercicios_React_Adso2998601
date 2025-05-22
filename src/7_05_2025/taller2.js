//gestion de un sistema de pedidos 
//crear un sistema de gestion de pedididos en donde diseño un archivo data con 15 pedidos de barios clientes 
// aplicar logiaca condicional para determinar si un pedido es procesado o no dependiendo de la disponividlidad de los productos y el estado del pedido 
// id del pedido id del cliente el producto la cantidad el estado (pendiente ,enviado cancelado) y si esat disponibles 



import Productos from './DATA/Productos'; // Import the default export from heroes.js


// export const getheroeById = (id) => productos.find((Productos) => Productos.id === id)//find es una busqueda

// console.table(getheroeById(7));

export const getheroesByOwner = (estado) => Productos.filter((Productos) => Productos.estado === estado);

// console.table(getheroesByOwner('pendiente'));
// console.table(getheroesByOwner('cancelado'));
// console.table(getheroesByOwner('enviado'));


function pedidos_disponibles(estado) {
    if (estado === 'pendiente') {
        return Productos.filter((pedido) => pedido.estado === estado && pedido.disponible === true);
    } else if (estado === 'enviado') {
        return Productos.filter((pedido) => pedido.estado === estado && pedido.disponible === true);
    }   

}

console.table(pedidos_disponibles('pendiente'));
console.table(pedidos_disponibles('enviado'));