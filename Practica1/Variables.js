//Ejercicio a
let nombre = "Emilio";
const edad = 21;

nombre = "Brayan Alejandro";
let saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";
console.log(saludo);

//Ejercicio b
const cuadrado = (numero) => {
    return numero * numero;
}

console.log(cuadrado(9))

//Ejercicio c
const saludoPersonalizado = (nombre, edad) => {
    return `Hola, me llamo ${nombre} y tengo ${edad} años.`;
};

console.log(saludoPersonalizado("Emilio Márquez", 21));
