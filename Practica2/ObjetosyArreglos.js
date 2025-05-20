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

