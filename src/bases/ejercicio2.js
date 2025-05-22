const usuario = {
    nombre: "Edgar",
    edad: 80,
    objetos: {
        item1: 1500,
    },    
};

console.table(usuario);


function calcularDescuentoMenor(valor) {
    return valor * 0.10;
}

function calcularDescuentoMayor(valor) {
    return valor * 0.15;
}



if (usuario.edad <= 18) {
    let descuento = calcularDescuentoMenor(usuario.objetos.item1);
    console.table(`Descuento del 10% para ${descuento}`);


} else if (usuario.edad <= 65) {
    console.table("no aplica descuento " + usuario.objetos.item1);



} else {
    let descuento = calcularDescuentoMayor(usuario.objetos.item1);
    console.table(`Descuento del 15% para ${descuento}`);
}








