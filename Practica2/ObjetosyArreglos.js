//Ejercicio a
const persona = {
    nombre: "Emilio",
    edad: 20,
    direccion: {
        ciudad: "Querétaro",
        pais: "México"
    }
};

const { nombre, edad, direccion: { ciudad } } = persona;

console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);


//Ejercicio b
const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];

const nombres = productos
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre);

console.log(nombres);

//Ejercicio c
const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];

const luis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", luis);

personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

const totalEdades = personas.reduce((acum, persona) => acum + persona.edad, 0);
console.log("Suma total de edades:", totalEdades);
