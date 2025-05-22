const empleado = {
    nombre: "Edgar",
    salarioBruto: 1000,
    impuestos: 0.10,
      
};

console.table(empleado);

function calcularSalario(valor) {

    let total= valor * empleado.impuestos;
    let final= valor - total;
    return  final;
}



if (empleado.impuestos >= 0.20) {
    let descuento = calcularSalario(empleado.salarioBruto);
    console.table(`salario total ${descuento}`);

} else if (empleado.impuestos < 0.20) {
    console.table("salario total " + empleado.salarioBruto);
} 


