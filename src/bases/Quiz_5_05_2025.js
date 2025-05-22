//Creamos un objeto con tres empleados ese objeto tendrá nombre, cantidad de horas trabajadas, valor de cada hora, total a pagar 
//-	Dos salidas una tabla con los tres empleados 
//-	otra salida el nombre del empleado con mayor sueldo 

const empleados= {

    
    empleado1: {
        nombre: "Edgar Rodriguez",
        horas_trabajadas: 15,
        Precio_hora: 30500,
    },
    empleado2: {
        nombre: "yeison meguia",
        horas_trabajadas: 15,
        Precio_hora: 500,
    },
    empleado3: {
        nombre: "Manuel Medrano",
        horas_trabajadas: 25,
        Precio_hora: 1000,
    }


}
console.table(empleados);

function calcularSalario(valor) {
let total1 = 0;  
let total2 = 0;
let total3 = 0;
total1 = empleados.empleado1.horas_trabajadas * empleados.empleado1.Precio_hora;
total2 = empleados.empleado2.horas_trabajadas * empleados.empleado2.Precio_hora;
total3 = empleados.empleado3.horas_trabajadas * empleados.empleado3.Precio_hora;

if(total1 > total2 && total1 > total3) {
    return total1, empleados.empleado1.nombre;
} else if (total2 > total1 && total2 > total3) {
    return total2 , empleados.empleado2.nombre;
} else {
    return total3, empleados.empleado3.nombre;
}

}
console.table(`el empleado con mayor salario es: ${calcularSalario(empleados)}`);

