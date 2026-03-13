/*Bucle for*/
/*1 Crear un programa que muestre en consola los números impares entre el 0 y el 20*/
for (let i=0; i<=20; i++){
    if (i%2 == 1){
        console.log(i)
    }
};

/*2 Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego 
debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por 
agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el 
nombre de la playlist y la lista de canciones.*/
let nombrePlaylist = prompt("Ingrese el nombre de la playlist: ");
let playlist = [];
let cantCanciones = parseInt(prompt("Ingrese el número de canciones que va a agregar: "));
for (let i=0; i<cantCanciones; i++){
    playlist.push(prompt("Ingrese la canción: "));
    console.log(`Quedan por cargar: ${cantCanciones-i-1} canciones.`);
    console.log("Canciones en la playlist: "+playlist.join(", "));
};

/*3 Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se 
desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor 
de todos los ingresados según el elegido.*/
let mayorMenor = prompt("Desea buscar el número mayor o menor? ").toLowerCase();
let cuantos = parseInt(prompt("Cuántos números desea ingresar? "));
let numeros = []
for (let i=0; i<cuantos; i++){
    numeros.push(parseFloat(prompt("Ingrese el número: ")));
}
const mayor = Math.max(...numeros);
const menor = Math.min(...numeros);

if (mayorMenor == "mayor") {
    console.log(`El número mayor es: ${mayor}`)
}
else if (mayorMenor == "menor") {
    console.log(`El número menor es: ${menor}`)
};

/*4 Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos 
los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 24*/
let num = parseInt(prompt("Por favor ingrese un número entero: "));
let factorial = num;

for (let i=num; i>1 ; i--){
    factorial = factorial * (i -1);
};

console.log(`El factorial de ${num} es: ${factorial}.`);

/*5 Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar 
e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y 
el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s*/
/*let cantVueltas = parseInt(prompt("Por favor ingrese la cantidad de vueltas que va a correr: "));
let tiempos = [];
for (let i=0; i<cantVueltas; i++){
    tiempos.push(parseFloat(prompt("Ingrese el tiempo de la vuelta actual en segundos: ")))
};
const suma = tiempos.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(`El promedio por vuelta es de: ${(suma/cantVueltas)} segundos.`);*/

let cantVueltas = parseInt(prompt("Por favor ingrese la cantidad de vueltas que va a correr: "));
let tiempos = [];
for (let i=0; i<cantVueltas; i++){
    tiempos.push(parseFloat(prompt("Ingrese el tiempo de la vuelta actual en segundos: ")))
};
let suma = 0;
for (let i=0; i<cantVueltas; i++){
    suma = suma + tiempos[i]
};
console.log(`El promedio por vuelta es de: ${(suma/cantVueltas)} segundos.`);

/*6 Al ejercicio de Piedra, papel, tijera de condicionales, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. 
Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y 
rondas restantes. Al finalizar se debe indicar quién ganó. Ejemplo:
Ronda: 2 de 5
🙍‍♀️ Jugadora: Piedra
👾 Computadora: Tijera
Jugadora ha ganado esta ronda 🎉
Puntaje: 2 (Jugadora) - 0 (Computadora)*/
let rondasTotales = parseInt(prompt("Por favor ingrese la cantidad de rondas que desea jugar: "));
let puntajePC = 0;
let puntajeUsuario = 0;
let opciones = ["piedra", "papel", "tijera"];

for (let i=0; i<rondasTotales; i++){
    let eleccionUsuario = prompt("Piedra, papel o tijera?").toLowerCase();
    let eleccionPC = opciones[Math.floor(Math.random() * opciones.length)];
    console.log(`Ronda ${(i+1)} de ${rondasTotales}.`) 
    console.log(`Jugador/a eligió: ${eleccionUsuario}`);
    console.log(`computadora eligió: ${eleccionPC}`); 

    if (eleccionUsuario == eleccionPC){
        console.log("Empate, tuvieron la misma elección.")
    }
    else if (((eleccionUsuario == "piedra") && (eleccionPC == "papel")) || ((eleccionUsuario == "tijera") && (eleccionPC == "piedra")) || ((eleccionUsuario == "papel") && (eleccionPC == "tijera"))){
        console.log("Computadora ha ganado esta ronda 🎉");
        puntajePC++;
    }
    else if (((eleccionUsuario == "papel") && (eleccionPC == "piedra")) || ((eleccionUsuario == "piedra") && (eleccionPC == "tijera")) || ((eleccionUsuario == "tijera") && (eleccionPC == "papel"))){
        console.log("Jugador/a ha ganado esta ronda 🎉");
        puntajeUsuario++;
    };
}

console.log(`Puntaje: ${puntajeUsuario} (Jugador/a) - ${puntajePC} (Computadora)`);

/*7 Crear un programa que muestre en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
************* */
let caracter = "*";

for (let i=0; i<13; i++){
    console.log(caracter.repeat(i+1))
};

/*Bucle while*/
/*8 Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la 
contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. 
Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben 
estar guardadas en variables.*/
let usuario = "usuario";
let clave = "clave";
let intentos = 3;
let usuarioIngresado = "";
let claveIngresada = "";

for (let i=0; i<intentos; i++){
    usuarioIngresado = prompt("Por favor ingrese su usuario: ");
    claveIngresada = prompt("Por favor ingrese su clave: ");
    if ((usuario == usuarioIngresado) && (clave == claveIngresada)){
        console.log("Bienvenido "+ usuario);
        break;
    }
    else{
        if (i == 2){
            console.log("Error. 3 intentos fallidos.")
        }
        else{
            console.log("Usuario o clave equivocados.")
        }
    }
};

/*9 Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se 
acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, 
reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando 
se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto 
a un mensaje de despedida, y terminar su ejecución.*/
let resultado = ["cara", "cruz"];
let resultadoUsuario = "";
let resultadoPC = "";
let rondasMaxSeguidas = 0;
let rondasGanadas = 0;

while (resultadoUsuario != "salir"){
    resultadoUsuario = prompt("Cara, cruz o salir?").toLowerCase();
    resultadoPC = resultado[Math.floor(Math.random() * resultado.length)];
    if (resultadoUsuario == resultadoPC){
        rondasGanadas++;
        console.log(`¡Acertaste! Llevas ${rondasGanadas} ronda/s seguidas acertadas.`)
    }
    else{
        if (rondasGanadas > rondasMaxSeguidas){
            rondasMaxSeguidas = rondasGanadas;
        }
        rondasGanadas = 0;
        console.log("Fallaste. Reiniciando contador de rondas seguidas.")
    }
    if (resultadoUsuario == "salir"){
        console.log(`Gracias por jugar. Tu cantidad máxima de rondas seguidas acertadas fue: ${rondasMaxSeguidas}. ¡Hasta luego!`)
    }
};

/*10 Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el 
número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar 
cuando se adivina el número.*/
let numeroAdivinar = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
while (numeroUsuario != numeroAdivinar){
    numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 10: "));
    if (numeroUsuario < numeroAdivinar){
        console.log("El número a adivinar es mayor que el ingresado.")
    }
    else if (numeroUsuario > numeroAdivinar){
        console.log("El número a adivinar es menor que el ingresado.")
    }
    else{
        console.log("¡Felicitaciones! Adivinaste el número.")
    }
};