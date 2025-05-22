//construir un arreglo de objetos con informacion de productos (nombre,precio,categoria(asecorios,ropa y calzados),) 
// si el producto perteneze a la categoria ropa, se le aplica un descuento del 10% 
//si pertenece a calsado descuento del 15 porciento 
//de lo contrario no aplicara descuento . 
// usar . map para recorrar el arregloe imprimir cinco productos con el descuento  desceunto y bvalor sin el desceunto 


const productos = [
    { id: 1, nombre: "Reloj", precio: 1200, categoria: "asecorios" },
    { id: 2, nombre: "cadena de ORO", precio: 5000, categoria: "asecorios" },
    { id: 3, nombre: "Camiseta", precio: 150, categoria: "ropa" },
    { id: 2, nombre: "Jordan", precio: 700, categoria: "calzados" },
    { id: 3, nombre: "bermudas", precio: 90, categoria: "ropa" },

  ];



const ropa1 = productos.filter(producto => producto.categoria === "ropa") .map(producto => ({ nombre: producto.nombre, precio: producto.precio, descuento: calcularDescuentoROPA(producto.precio) }));

const calzados2 = productos.filter(producto => producto.categoria === "calzados") .map(producto => ({ nombre: producto.nombre, precio: producto.precio, descuento: calcularDescuentoCAlzado(producto.precio) }));




function calcularDescuentoROPA(precio) {
    let descuento = precio * 0.10;
    return precio - descuento;
}

function calcularDescuentoCAlzado(precio) {
    let descuento = precio * 0.15;
    return precio - descuento;
}


console.table(ropa1);
console.table(calzados2);

