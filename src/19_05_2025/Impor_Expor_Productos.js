import productosEje from '../DATA/productosEje';


export const getProductoNEWById = (id) => productosEje.find((productosEje) => productosEje.id === id)
export const getProductoNEWByNombre = (nombre) => productosEje.find((productosEje) => productosEje.nombre === nombre)

export const venta = (nombre,stock)=>{
    const producto = getProductoNEWByNombre(nombre);
    if(producto && producto.stock > 0 && producto.stock >= stock){
        producto.stock -= stock;
        return producto;
    }
}

export const MostrarTodo = (nombre,stock) => {
    return productosEje.map(producto => ({ nombre: producto.nombre, precio: producto.precio, stock: producto.stock }));
}