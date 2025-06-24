// 1. Beca Estudiante

//Datos del Estudiante

let edad = Number (prompt("¿Cuántos años tienes?"));
let ciudad = prompt ("¿En qué ciudad vives?").toLowerCase;
let familiaNumerosa = prompt ("¿Tienes familia numerosa? (si/no)").toLowerCase();
let respuestaGenio = prompt ("¿Cuál es el resultado de '5' + 4 * 8?").trim( );
let esGenio = respuestaGenio === "532";


// Condición 1 - Que sea mayor o igual a 18 años y reside en Barcelona

let cumpleCondicion1 = edad >= 18 && ciudad === "Barcelona";

// Condición 2 - Que sea mayor de 30 años y tenga familia numerosa

let cumpleCondicion2 = edad >= 30 && familiaNumerosa === "si";

// Condición 3 - Que tenga entre 12 y 18 años y sea un geni@ de la programación

let cumpleCondicion3 = edad >= 12 && edad <= 18 && esGenio;

// Resultado

if (cumpleCondicion1 || cumpleCondicion2 ||cumpleCondicion3) {
    console.log("¡Felicidades! Cumples con los requisitos para optar por la beca")
} else {
    console.log("Lo sentimos, no cumples con los requisitos para optar por la beca")
}