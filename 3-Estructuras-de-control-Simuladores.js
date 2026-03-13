/*if, else, else if
1 Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.*/
let numero = parseInt(prompt("Por favor ingrese un número entero distinto de 0: "));
if (numero%2 == 0){
    console.log("El número ingresado es par.")
}
if (numero%2 == 1){
    console.log("El número ingresado es impar.")
}
else{
    console.log("No ingresó un número entero")
};

/*2 Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.*/
const meses31dias = ["ENERO","MARZO","MAYO","JULIO","AGOSTO","OCTUBRE","DICIEMBRE"];
const meses30dias = ["ABRIL","JUNIO","SEPTIEMBRE","NOVIEMBRE"];
const mes28dias = ["FEBRERO"];

let mes = prompt("Por favor ingrese un mes: ").toUpperCase();

if (meses31dias.includes(mes)) {
    console.log("El mes ingresado tiene 31 días.");
}
else if (meses30dias.includes(mes)) {
    console.log("El mes ingresado tiene 30 días.");
}
else if (mes28dias.includes(mes)) {
    console.log("El mes ingresado tiene 28 días (o 29 en año bisiesto).");
}
else {
    console.log("No ha ingresado un mes.");
}

/*3 Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. 
Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue 
cambiada. En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de 
antemano (hardcodear) preguntas y respuestas.*/
let claveGuardada = "clave";
let preguntaSeguridad1 = "Juan";
let preguntaSeguridad2 = "Boby";
let preguntaSeguridad3 = "2025";

console.log("Para cambiar su clave, responda las 3 preguntas de seguridad: ");
let respuestaSeguridad1 = prompt("Ingrese el nombre de su abuelo paterno: ");
let respuestaSeguridad2 = prompt("Ingrese el nombre de su mascota preferida: ");
let respuestaSeguridad3 = prompt("Ingrese su código: ");

if ((preguntaSeguridad1 == respuestaSeguridad1) && (preguntaSeguridad2 == respuestaSeguridad2) && (preguntaSeguridad3 == respuestaSeguridad3)){
    claveGuardada = console.log(prompt("Ingrese su nueva contraseña: "))
}
else{
    console.log("No ha respondido correctamente las 3 preguntas.")
};

/*4 Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el examen está aprobado, si debe 
recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo.*/
let nota = parseFloat(prompt("Por favor ingresa la calificación: "));
if (nota >=7){
    console.log("Aprobado")
}
else if ((nota >=4) && (nota < 7)){
    console.log("Recupera")
}
else if (nota < 4){
    console.log("Aplazo")
}
else {
    console.log("No ingresó un valor correcto")
};


/*5 Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
grupo A = {a, e, i, o ,u}
grupo B = {b, c, d, f, g}
grupo C = {h, j, k , l, m}
grupo D = {n, p, q, r}
grupo E = {s, t, v, w, x, y, z}*/
const grupos = {
    A: ["a", "e", "i", "o", "u"],
    B: ["b", "c", "d", "f", "g"],
    C: ["h", "j", "k", "l", "m"],
    D: ["n", "p", "q", "r"],
    E: ["s", "t", "v", "w", "x", "y", "z"]
};

let letra = prompt("Por favor ingrese una letra: ").toLowerCase();

for (let grupo in grupos) {
    if (grupos[grupo].includes(letra)) {
        console.log(`La letra ingresada se encuentra en el grupo ${grupo}.`);
    }
}


/*6 Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. En caso de que no se 
elija una opción válida en cualquier paso debe mostrar un mensaje alertando que el pedido saldrá incompleto. Mostrar al final un 
mensaje con el pedido resultante. Debe preguntar:
Tipo de pan: blanco, negro, integral
Ingrediente 1: tomate, lechuga, pimiento
Ingrediente 2: cebolla, aceituna, pepino
Aderezos: mostaza, mayonesa, picante
Gaseosa: Coca Cola, Pepsi, Sprite*/
const panes = ["blanco", "negro", "integral"];
const ing1 = ["tomate", "lechuga", "pimiento"];
const ing2 = ["cebolla", "aceituna", "pepino"];
const aderezos = ["mostaza", "mayonesa", "picante"];
const gaseosas = ["coca cola", "pepsi", "sprite"];

let incompleto = false;

let pan = prompt("Elija el tipo de pan (blanco, negro, integral)").toLowerCase();
if (!panes.includes(pan)) incompleto = true;

let ingrediente1 = prompt("Elija un ingrediente (tomate, lechuga, pimiento)").toLowerCase();
if (!ing1.includes(ingrediente1)) incompleto = true;

let ingrediente2 = prompt("Elija un ingrediente (cebolla, aceituna, pepino)").toLowerCase();
if (!ing2.includes(ingrediente2)) incompleto = true;

let aderezo = prompt("Elija un aderezo (mostaza, mayonesa, picante)").toLowerCase();
if (!aderezos.includes(aderezo)) incompleto = true;

let gaseosa = prompt("Elija una gaseosa (Coca Cola, Pepsi, Sprite)").toLowerCase();
if (!gaseosas.includes(gaseosa)) incompleto = true;

if (incompleto) {
    console.log("⚠ El pedido saldrá incompleto por opciones inválidas.");
}
console.log(`Pedido: Pan ${pan}, Ingrediente 1 ${ingrediente1}, Ingrediente 2 ${ingrediente2}, Aderezo ${aderezo}, Gaseosa ${gaseosa}`);

/*7 Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la jugada de la computadora, 
y muestre en un mensaje quién ganó, con las jugadas respectivas.*/
let opciones = ["piedra", "papel", "tijera"];
let eleccionUsuario = prompt("Piedra, papel o tijera?").toLowerCase();
let eleccionPC = opciones[Math.floor(Math.random() * opciones.length)];

console.log(`La computadora eligió: ${eleccionPC}`);    

if (eleccionUsuario == eleccionPC){
    console.log("Empate, tuvieron la misma elección.")
}
else if (((eleccionUsuario == "piedra") && (eleccionPC == "papel")) || ((eleccionUsuario == "tijera") && (eleccionPC == "piedra")) || ((eleccionUsuario == "papel") && (eleccionPC == "tijera"))){
    console.log(``)
    console.log("Lo siento, te he ganado!")
}
else if (((eleccionUsuario == "papel") && (eleccionPC == "piedra")) || ((eleccionUsuario == "piedra") && (eleccionPC == "tijera")) || ((eleccionUsuario == "tijera") && (eleccionPC == "papel"))){
    console.log("Me ganaste, Felicidades!")
};

/*8 Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles son 4: rojo, verde, 
azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.
// Ejemplo
Simón dice: rojo, rojo, azul, verde, amarillo.

Ingrese el primer color: rojo
Ingrese el primer color: rojo
Ingrese el primer color: azul
Ingrese el primer color: verde
Ingrese el primer color: amarillo

Felicitaciones! Has ganado!*/
let colores = ["rojo", "verde", "azul" , "amarillo"];
let simonDice = [];
let usuarioDice = [];

for (let i=0 ; i<5; i++){
    simonDice.push(colores[Math.floor(Math.random() * colores.length)])
};
console.log("Simón dice: "+simonDice);

usuarioDice.push(console.log(prompt("Ingrese el primer color: ")));
usuarioDice.push(console.log(prompt("Ingrese el segundo color: ")));
usuarioDice.push(console.log(prompt("Ingrese el tercer color: ")));
usuarioDice.push(console.log(prompt("Ingrese el cuarto color: ")));
usuarioDice.push(console.log(prompt("Ingrese el quinto color: ")));

if (simonDice.toString() == usuarioDice.toString()){
    console.log("Felicitaciones! Has ganado!")
}
else{
    console.log("Lo siento, perdiste!")
};


/*Condicional switch
Para los siguientes ejercicios utilizar el condicional switch donde sea necesario.*/

/*9 Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.*/
let mesUsuario = parseInt(prompt("Ingrese el número de mes: "));
if ((mesUsuario >= 1) && (mesUsuario <= 12)){
    switch (mesUsuario){
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break;
        case 7:
            console.log("Julio");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Septiembre");
            break;
        case 10:
            console.log("Octubre");
            break;  
        case 11:
            console.log("Noviembre");
            break;  
        case 12:
            console.log("Diciembre");
            break;    
    }
}
else{
    console.log("Por favor ingrese un número del 1 al 12.")
};

/*10 Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina*/
let estaciones = ["verano", "primavera", "otoño", "invierno"]
let estacion = prompt("Ingrese la estación del año: ").toLowerCase();
if (estaciones.includes(estacion)){
    switch (estacion){
        case "verano":
            console.log("El verano comienza el 21 de diciembre y finaliza el 20 de marzo");
            break;
        case "otoño":
            console.log("El otoño comeinza el 20 de marzo y finaliza el 21 de junio");
            break;
        case "primavera":
            console.log("La primavera comienza el 21 de septiembre y finaliza el 20 de diciembre");
            break;
        case "invierno":
            console.log("El invierno comienza el 21 de junio y finaliza el 21 de septiembre");
            break;
    }
}
else{
    console.log("Por favor ingrese una estación válida.")
};

/*11 Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, 
ingresar dos números y hacer dicha operación con ella.*/
let operacion = prompt("Elija una operación: suma, resta, división o multiplicación").toLowerCase();
let num1 = parseInt(prompt("Por favor ingrese un número entero"));
let num2 = parseInt(prompt("Por favor ingrese otro número entero"));

if (operacion == "suma"){
    console.log(`El resultado de sumar ${num1} y ${num2} es: ${(num1+num2)}`);
}
else if (operacion == "resta"){
    console.log(`El resultado de restar ${num1} y ${num2} es: ${(num1-num2)}`);
}
else if (operacion == "división"){
    console.log(`El resultado de dividir ${num1} y ${num2} es: ${(num1/num2)}`);
}
else if (operacion == "multiplicación"){
    console.log(`El resultado de multiplicar ${num1} y ${num2} es: ${(num1*num2)}`);
}
else{
    console.log("Ingrese una operación y números válidos.")
};


/*12 Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. 
Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar 
las siguientes operaciones:
CAMBIAR CANAL: permite ingresar un canal (0 al 99)
CANAL SIGUIENTE: sube un canal
CANAL ANTERIOR: baja un canal
SUBIR VOLUMEN: sube en volumen en 5
BAJAR VOLUMEN: disminuye en volumen en 5
MUTEAR: pone el volumen en 0
Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.*/
let canalActual = 36;
let volumenActual = 20;
let operaciones = prompt("Seleccione una operación: \n1. CAMBIAR CANAL\n2. CANAL SIGUIENTE\n3. CANAL ANTERIOR\n4. SUBIR VOLUMEN\n5. BAJAR VOLUMEN\n6. MUTEAR");
if (prender = confirm("Desea encender la tv?")){
    console.log("Canal actual: "+canalActual);
    console.log("Volumen actual: "+volumenActual);
    switch (operaciones){
        case "1":
            canalActual = parseInt(prompt("Ingrese el canal al que desea cambiar."));
            break;
        case "2":
            canalActual++;
            break;
        case "3":
            canalActual--;
            break;
        case "4":
            volumenActual = volumenActual+5;
            break;
        case "5":
            volumenActual = volumenActual-5;
            break;
        case "6":
            volumenActual = 0;
            break;    
    }
    if (canalActual>=0 && canalActual<100){
    console.log("Canal actual: "+canalActual);
    console.log("Volumne actual: "+volumenActual);
    }
    else{
        console.log("Ingrese un número válido.")
    };
}
else{

}
