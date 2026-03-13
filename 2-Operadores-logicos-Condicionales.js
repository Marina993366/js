/*Usar confirm cuando se necesite obtener la respuesta a una pregunta de sí o no por parte del usuario. Mostrar true o false como 
respuesta (no hace falta poner un mensaje).*/

/*1 Crear un programa que permita ingresar tres número y muestre si alguno de ellos es mayor a 100*/
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:")); 
let mayorA100 = (num1 > 100) || (num2 > 100) || (num3 > 100);
if (mayorA100 == true) {
    console.log("Alguno de los números ingresados es mayor a 100");
}
else {
    console.log("Ninguno de los números ingresados es mayor a 100");
}

/*2 Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, uno que represente el 
límite mayor, y luego otro cualquiera y mostrar en un mensaje si el último número se encuentra dentro del rango ingresado.*/
let limiteInf = parseFloat(prompt("Ingrese el número que representa el límite inferior del rango:"));
let limiteSup = parseFloat(prompt("Ingrese el número que representa el límite superrior del rango:"));
let numControl = parseFloat(prompt("Ingrese el número que desea controlar:")); 
if ((numControl>=limiteInf) && (numControl<=limiteSup)){
    console.log("El número ingresado se encuentra dentro del rango")
}
else{
    console.log("El número ingresado se encuentra fuera del rango")
}

/*3 Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes recientemente, si ha tenido o tiene hepatitis, si 
tiene anemia. Si responde a alguna de ellas afirmativamente, debe mostrar un mensaje que indique si puede o no donar sangre*/
let tatuajes = confirm("¿Se ha hecho tatuajes recientemente?");
let hepatitis = confirm("¿Ha tenido hepatitis recientemente?");
let anemia = confirm("¿Ha tenido anemia recientemente?");
if ((tatuajes == true) || (hepatitis == true) || (anemia == true)){
    console.log("Lamentablemente usted no puede ser donador de sangre.")
}
else {
    console.log("Usted puede ser donador de sangre.")
};

/*4 Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables, 
y muestre en un mensaje si tiene el acceso autorizado*/
let usuario = "usuario";
let clave = "clave";
let usuarioIngresado = prompt("Por favor ingrese su usuario: ");
let claveIngresada = prompt("Por favor ingrese su contraseña: ");
if ((usuario == usuarioIngresado) && (clave == claveIngresada)){
    console.log("Acceso autorizado")
}
else{
    console.log("usuario o contraseña erróneas.")
};

/*5 Hacer un programa que pregunte por separado si el auto tiene aceite, agua, y neumáticos con presión. Mostrar en un mensaje si 
tiene que hacer mantenimiento o no si alguna de las respuestas es negativa*/
let aceite = confirm("¿El auto tiene aceite?");
let agua = confirm("¿El auto tiene el nivel adecuado de agua?");
let neumaticos = confirm("¿La presión de los neumáticos es la correcta?");
if ((aceite == false) || (agua == false) || (neumaticos == false)){
    console.log("El auto necesita mantenimiento.")
}
else {
    console.log("El auto no necesita mantenimiento.")
};

/*6 Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan autorización. 
Hacer un programa que pregunte estas si es miembro, si tiene la cuota al día y si tiene autorización y muestre luego un mensaje 
indicando si tiene el acceso permitido o no.*/
let miembro = confirm("¿Es miembro del club?");
let cuota = confirm("¿Posee la cuota al día?");
let autorizado = confirm("¿Tiene autorización?");
if ((miembro == true) && (cuota == true)){
    console.log("Miembro con la cuota al día, puede ingresar.")
}
else if (autorizado == true){
    console.log("Autorizado, puede ingresar.")
}
else{
    console.log("No puede ingresar.")
};

/*7 Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra mostrar un mensaje indicando si promociona 
o no la cátedra. La misma se promociona si al menos dos de ellos fueron aprobados con una nota de 8 o más.*/
let nota1 = prompt("Por favor ingrese la nota del primer parcial: ");
let nota2 = prompt("Por favor ingrese la nota del segundo parcial: ");
let nota3 = prompt("Por favor ingrese la nota del tercer parcial: ");
if (((nota1 >= 8) && (nota2 >= 8))|| (nota1 >= 8) && (nota3 >= 8) || (nota3 >= 8) && (nota2 >= 8)){
    console.log("Está en condiciones de promocionar la cátedra.")
}
else{
    console.log("No está en condiciones de promocionar la cátedra.")
};

/*8 Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la 
funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.*/
let numero1 = parseFloat(prompt("Por favor ingrese el primer número: "));
let numero2 = parseFloat(prompt("Por favor ingrese el segundo número: "));
if (numero1 > numero2){
    console.log("El primer número ingresado: "+numero1+", es el mayor.")
}
else if (numero2 > numero1){
    console.log("El segundo número ingresado: "+numero2+", es el mayor.")
}
else if (numero2 == numero1){
    console.log("Ambos números son iguales.")
};

/*9 Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la 
funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.*/
let primerNumero = parseFloat(prompt("Por favor ingrese el primer número: "));
let segundoNumero = parseFloat(prompt("Por favor ingrese el segundo número: "));
let tercerNumero = parseFloat(prompt("Por favor ingrese el tecer número: "));
if ((tercerNumero > primerNumero) && (tercerNumero > segundoNumero)){
    console.log("El tercer número ingresado: "+tercerNumero+", es el mayor.")
}
else if ((primerNumero > tercerNumero) && (primerNumero > segundoNumero)){
    console.log("El primer número ingresado: "+primerNumero+", es el mayor.")
}
else if ((tercerNumero > primerNumero) && (tercerNumero > segundoNumero)){
    console.log("El segundo número ingresado: "+segundoNumero+", es el mayor.")
}
else if ((primerNumero == segundoNumero) || (tercerNumero == segundoNumero) || (primerNumero == tercerNumero)){
    console.log("Hay números repetidos.")
};

/*10 Crear un programa que pregunte si acepta los términos y condiciones de uso. Si el usuario responde que sí, debe mostrar un mensaje 
que diga "Continuando con el proceso...". Si responde que no, debe mostrar un mensaje que diga "No se puede continuar con el 
proceso si no se aceptan los términos y condiciones de uso".*/
let aceptaTerminos = confirm("Acepta los términos y condiciones?");
if (aceptaTerminos == true) {
    console.log("Continuando con el proceso...")
}
else {
    console.log("No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso")
};

/*11 Crear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, mostrar un mensaje de felicitaciones si se 
respondió bien a todas, o uno de que ha perdido el juego si respondió mal al menos una.*/
console.log ("Responda 3 preguntas correctamente para ganar el juego");
let pregunta1 = confirm("Manu Ginobili es basquetbolista?");
let pregunta2 = confirm("Hugo Conte es basquetbolista?");
let pregunta3 = confirm("Diego Maradona es basquetbolista?");

if ((pregunta1 == true) && (pregunta2 == false) && (pregunta3 == false)){
    console.log("Felicitaciones! Ha ganado el juego.")
}
else{
    console.log("Lo siento! Ha perdido el juego.")
}

/*12 Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables. Si 
coinciden debe mostrar un mensaje que diga "Autenticación exitoso" y si no, debe mostrar "Usuario o contraseña equivocados".*/
let usuarioGuardado = "usuario";
let claveGuardada = "clave";
let usuarioQueIngresa = prompt("Por favor ingrese su usuario: ");
let claveQueIngresa = prompt("Por favor ingrese su contraseña: ");
if ((usuario == usuarioIngresado) && (clave == claveIngresada)){
    console.log("Autenticación exitosa")
}
else{
    console.log("Usuario o contraseña equivocados")
};


/*13 Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa (a elección). Dependiendo de la respuesta, 
debe mostrar un mensaje en consonancia. Hacer mínimo 4 casos posibles. Si se ingresa algo que no sea un número del 1 al 10, 
mostrar un mensaje de advertencia y volver a pedir dicho número.*/
let valoracion = parseInt(prompt("Del 1 al 10, que tanto le gusta el voley? "));
if ((valoracion >= 1) && (valoracion <= 10)){
    switch (valoracion){
        case 1:
            console.log("Oh! Lo odias, que triste");
            break;
        case 2:
            console.log("No te gusta para nada!");
            break;
        case 3:
            console.log("Que pena que no te guste!");
            break;
        case 4:
            console.log("Oye deberías probarlo");
            break;
        case 5:
            console.log("Creo que si lo jugaras te empezaría a gustar");
            break;
        case 6:
            console.log("Si le dedicas tiempo seguro te atrapa");
            break;
        case 7:
            console.log("Te gusta, eso es bueno!");
            break;
        case 8:
            console.log("Que bueno que te guste!");
            break;
        case 9:
            console.log("Esa es la actitud!");
            break;
        case 10:
            console.log("Excelente! Eres un fan");
            break;    
    }
}
else{
    console.log("Por favor ingrese un número del 1 al 10.")
};

/*14 Crear un programa que permita ingresar el resultado de una evaluación con un puntaje del 1 al 10, y muestre un mensaje que 
diga:
¡Excelente!, si la nota es 10
¡Muy bien!, si la nota es 8 o 9
Aprobado, si la nota es 6 o 7
Reprobado, si la nota es menor a 6*/
let nota = parseFloat(prompt("Por favor ingresa la calificación: "));
if (nota == 10){
    console.log("¡Excelente!")
}
else if ((nota ==8) || (nota == 9)){
    console.log("¡Muy bien!")
}
else if ((nota ==7) || (nota == 6)){
    console.log("Aprobado")
}
else if (nota < 6){
    console.log("Reprobado")
};
