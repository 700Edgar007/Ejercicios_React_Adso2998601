//crear un arreglo de objetos que representen productos id nombre del producto precio y stoc7
// incluya funciones para buscar productos por id y por nombre
// implemente una funcion ue simule una compra usando promesas con resolve y reject
//la venta sera efectiva resolve es logica buena y reject es logica mala
import { getProductoNEWById } from './bases/Impor_Expor_Productos';
import { getProductoNEWByNombre } from './bases/Impor_Expor_Productos';
import { venta } from './bases/Impor_Expor_Productos';
import { MostrarTodo } from './bases/Impor_Expor_Productos';

// console.log(getProductoNEWById(10));


const getProductoNEWByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
           const p1 = getProductoNEWById(id);
           if (p1) {
               resolve(p1);
           }else{
               reject('No se encontro el heroe');
           }

        }, 5000);
    });
};
// getProductoNEWByIdAsync(10)
// .then(console.table)
// .catch(console.error);

const getProductoNEWByNameAsync = (nombre) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
           const p1 = getProductoNEWByNombre(nombre);
           if (p1) {
               resolve(p1);
           }else{
               reject('Luis es una putaaaaa');
           }



        }, 2000);



        
    });

};




getProductoNEWByNameAsync('Smartphone')
.then(console.table)
.catch(console.error);

const comprarProducto = (nombre,stock) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = venta(nombre,stock);
            if (p1) {
                resolve(p1);
            }else{
                reject('No se encontro el producto');
            }
        }, 2000);
    });
};

comprarProducto('Smartphone',1)
.then(console.table)
.catch(console.error);


const MostrarTodoAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = MostrarTodo();
            if (p1) {
                resolve(p1);
            }else{
                reject('No se encontro el producto');
            }
        }, 3000);
    });
};

MostrarTodoAsync()
.then(console.table)
.catch(console.error);