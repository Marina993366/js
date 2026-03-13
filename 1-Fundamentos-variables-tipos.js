/*Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!*/
console.log("¡Hola, Mundo!");

/*Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.*/
let saludo = "¡Hola, Mundo! (desde una variable)";
console.log(saludo);

/*Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo introduzca 
muestre por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre que el usuario haya introducido.*/
let nombreUsuario = prompt("Por favor ingresa tu nombre: ");
console.log("Hola " + nombreUsuario + "!");

/*Escribir un programa que pregunte el nombre del usuario en la consola y un número entero e imprima por pantalla en líneas distintas
el nombre del usuario tantas veces como el número introducido.*/
let nombre = prompt("Por favor ingresa tu nombre: ");
let numeroRepeticiones = parseInt(prompt("Por favor ingresa un número entreo: "));
for (let i = 0; i < numeroRepeticiones; i++) {
    console.log(nombre);
}

/*Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo introduzca muestre por pantalla 
<NOMBRE> tiene <n> letras, donde <NOMBRE> es el nombre de usuario en mayúsculas y <n> es el número de letras que tienen el nombre.*/
let nombreUsuario2 = prompt("Por favor ingresa tu nombre: ");
console.log(nombreUsuario2.toUpperCase() + " tiene " + nombreUsuario2.length + " letras.");

/*Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla
la paga que le corresponde.*/
let horasTrabajadas = parseInt(prompt("Por favor ingresa las horas trabajadas: "));
let costoPorHora = parseInt(prompt("Por favor ingresa el valor por hora:"));
console.log("El valor a percibir por la horas trabajadas es: $" + (horasTrabajadas * costoPorHora));

/*Escribir un programa que lea un entero positivo, n, introducido por el usuario y después muestre en pantalla la suma de todos 
los enteros desde 1 hasta n. La suma de los n primeros enteros positivos puede ser calculada de la siguiente forma: (n(n+1))/2*/
let numeroPositivo = parseInt(prompt("Por favor ingresa un número entero positivo:"));
console.log((numeroPositivo(numeroPositivo+1))/2);

/*Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo 
almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> es el índice de masa 
corporal calculado redondeado con dos decimales.*/
let peso = parseFloat(prompt("Por favor ingresa tu peso en kg:"));
let altura = parseFloat(prompt("Por favor ingresa tu altura en metros:"));
let imc = (peso/(altura*altura)).toFixed(2);
console.log("Tu índice de masa corporal es: " + imc);

/*Escribir un programa que pida al usuario dos números enteros y muestre por pantalla: La división resultande de dividir <n> entre 
<m> da un cociente <c> y un resto <r> donde <n> y <m> son los números introducidos por el usuario, y <c> y <r> son el cociente y el 
resto de la división entera respectivamente.*/
let num1 = parseInt(prompt("Por favor ingresa el primer número: "));
let num2 = parseInt(prompt("Por favor ingresa el segundo número: "));
let cociente = parseInt(num1/num2);
let resto = (num1%num2);
console.log("La división resultande de dividir "+num1+" entre "+num2+" da un cociente de: "+cociente+" y un resto de: "+resto);

/*Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla 
el capital obtenido en la inversión.*/
let montoInversion = parseFloat(prompt("Por favor ingresa el dinero que deseas invertir: "));
let interesAnual = parseFloat(prompt("Por favor ingresa el interes anual: "));
let cantidadAnios = parseFloat(prompt("Por favor ingresa la cantidad de años que durará la inversión: "));
let gananciaAnual = (montoInversion * (interesAnual/100)).toFixed(2);
console.log ("El resultado de invertir $"+montoInversion+" al "+interesAnual+"% anual, da una ganancia anual de $"+gananciaAnual+" que, en "+cantidadAnios+" años, sumarían un total de $"+(gananciaAnual*cantidadAnios)+" retirando las ganancias cada año");

/*Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de 
logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a 
demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el 
último pedido y calcule el peso total del paquete que será enviado.*/
let cantPayasos = parseInt(prompt("Por favor ingresa la cantidad de payasos vendidos: "));
let cantMuniecas = parseInt(prompt("Por favor ingresa la cantidad de muñecas vendidas: "));
let pesoPayasos = parseInt(cantPayasos * 112);
let pesomuniecas = parseInt(cantMuniecas * 75);
console.log("El peso total del último pedido es: "+(pesoPayasos+pesomuniecas+"g"));

/*Imagina que acabas de abrir una nueva cuenta de ahorros que te ofrece el 4% de interés al año. Estos ahorros debido a intereses, 
que no se cobran hasta finales de año, se te añaden al balance final de tu cuenta de ahorros. Escribir un programa que comience 
leyendo la cantidad de dinero depositada en la cuenta de ahorros, introducida por el usuario. Después el programa debe calcular y 
mostrar por pantalla la cantidad de ahorros tras el primer, segundo y tercer años. Redondear cada cantidad a dos decimales.*/
let montoCuenta = parseFloat(prompt("Por favor ingrese el monto que posee en la cuenta: "));
let interesAnio1 = montoCuenta*0.04;
let interesAnio2 = (montoCuenta+interesAnio1)*0.04;
let interesAnio3 = (montoCuenta+interesAnio2)*0.04;
console.log("Si dejas "+montoCuenta+" durante 3 años en tu cuenta, obtendrás una ganancia de $"+interesAnio1.toFixed(2)+" el primer año, $"+interesAnio2.toFixed(2)+" el segundo, y finalmente, una ganancia de $"+interesAnio3.toFixed(2)+" al finlaizar el tercer año.");

/*Una panadería vende barras de pan a 3.49€ cada una. El pan que no es el día tiene un descuento del 60%. Escribir un programa que 
comience leyendo el número de barras vendidas que no son del día. Después el programa debe mostrar el precio habitual de una barra 
de pan, el descuento que se le hace por no ser fresca y el coste final total.*/
let precioPan = 3.49;
let precioPanConDescuento = (3.49*0.4);
let cantidadVendidaConDescuento = parseInt(prompt("Por favor ingresa la cantidad de barras vendidas con descuento: "));
console.log("El precio habitual de la barra de pan es de $3.49, las que no son frescas se venden con un 60% de descuento quedando en $"+precioPanConDescuento.toFixed(2)+" lo que da un total de $"+(cantidadVendidaConDescuento*precioPanConDescuento)+" por las "+cantidadVendidaConDescuento+" barras vendidas con descuento.");

/*Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola 
{nombre} {apellido}, bienvenida a Ada".*/
let firstName = prompt("Ingresa tu nombre por favor: ");
let lastName = prompt("Ingresa tu apellido por favor:");
console.log("Hola "+firstName+" "+lastName);

/*Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por 
ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".*/
let sabor1 = prompt("Ingrese un sabor: ");
let sabor2 = prompt("Ingrese otro sabor:");
let sabor3 = prompt("Ingrese otro sabor:");
console.log("Aquí tiene su helado de "+sabor1+","+sabor2+" y "+sabor3);

/*Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego 
un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.*/
let userName = prompt("Nombre: ");
let userLastName = prompt("Apellido: ");
let userAge = prompt("Edad: ");
let userNacionality= prompt("Nacionalidad: ");
let userdni = prompt("DNI: ");
console.log(`Nuevo usuario agregado al sistema: ${userName}, ${userLastName}, ${userAge}, ${userNacionality}, ${userdni}`);

/*Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al 
finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 
'Maniac', 'Final Countdown'".*/
let nombrePlaylist = prompt("Por favor ingresa el nombre de la playlist: ");
let sumarCanción = "si";
const playlist = [];
while (sumarCanción == "si"){
    playlist.push(prompt("Por favor ingresa el título de una canción: "));
    sumarCanción = prompt("¿Deseas agregar otra canción? (si/no)").toLowerCase();
}
console.log(`Se ha creado la playlist ${nombrePlaylist} con las canciones: ${playlist}`);

/*Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad 
y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 
1414, CABA, Argentina".*/
let direccionCalle = prompt("Calle: ");
let direccionNumero = prompt("Número: ");
let direccionDpto = prompt("EDepartamento: ");
let direccionCP= prompt("Código Postal: ");
let direccionCiudad= prompt("Ciudad: ");
let direccionPais = prompt("Pais: ");
console.log(`La dirección que ha ingresado es: ${direccionCalle} ${direccionNumero} ${direccionDpto}, ${direccionCP}, ${direccionCiudad}, ${direccionPais}`);

/*Crear variables que contengan arrays de strings con los nombres de meses, un array para meses de 31 días, uno para de 30, y otro 
para 29. Completar cada array con los nombres correspondientes. Mostrarlos en un mensaje indicando cuál es cuál, p.ej: "Meses con 
31 días: Enero, Marzo, Mayo...".*/
const meses31dias = [" Enero","Marzo","Mayo ","Julio","Agosto","Octubre","Diciembre"];
const meses30dias = [" Abril","Junio","Septiembre","Noviembre"];
const mes28dias = ["Febrero"];
console.log(`Meses con 31 días: ${meses31dias.join(", ")}`);
console.log(`Meses con 30 días: ${meses30dias.join(", ")}`);
console.log(`Mes con 28 o 29 días: ${mes28dias.join(", ")}`);

/*Crear una variable que contengan un array de strings con los nombres de integrantes de la familia y completarlo con todos o 
algunos nombres. Mostrarlos en un mensaje que los liste.*/
const nombresIntegrantes = ["Juan", "Jose", "Maria"];
console.log("Integrantes de mi familia:");
for (let i= 0; i < nombresIntegrantes.length; i++){
    console.log((i+1)+"- "+nombresIntegrantes[i])
};

/*Crear variables que contengan arrays de strings con los nombres de distintas categorías de gustos, por ejemplo, películas, 
cantantes, libros. Completar cada array con algunos valores. Mostrarlos en un mensaje indicando cuál es cuál.*/
const peliculas = ["peli1", "peli2", "peli3"];
const cantantes = ["cantante1", "cantante2", "cantante3"];
const libros = ["libro1", "libro2", "libro3"];
console.log(`Peliculas: ${peliculas.join(", ")}. Cantantes: ${cantantes.join(", ")}. Libros: ${libros.join(", ")}`);

/*Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.*/
let edadHumano = parseInt(prompt("Ingrese la edad en años humanos: "));
console.log("La edad en años perrunos es: "+(edadHumano*7));

/*Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión 
en segundos.*/
let minutos = parseInt(prompt("Por favor ingrese el número de minutos: "));
console.log("Los minutos ingresados corresponden a "+(minutos*60)+" segundos.");

/*Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.*/
let cantidadDias = parseInt(prompt("Por favor ingrese el número de días que desea convertir: "));
console.log("Los días ingresados corresponden a "+(cantidadDias*86400)+" segundos.");

/*Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.*/
let cantidadkm = parseFloat(prompt("Por favor ingrese el número de kilómetros que desea convertir: "));
console.log("Los km ingresados corresponden a "+(cantidadkm*0.62137119).toFixed(2)+" millas.");

/*Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y 
mostrarlo en un mensaje.*/
let baseTriangulo = parseFloat(prompt("Por favor ingrese cuanto mide la base del triángulo en centímetros (sólo el número): "));
let alturaTriangulo = parseFloat(prompt("Por favor ingrese cuanto mide la alturadel triángulo en centímetros (sólo el número): "));
console.log("El área del triángulo es de "+((baseTriangulo*alturaTriangulo)/2).toFixed(2)+" cm2");

/*Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro 
y mostrarlo en un mensaje.*/
let anchoRectangulo = parseFloat(prompt("Por favor ingrese cual es el ancho del rectángulo en centímetros (sólo el número): "));
let altoRectangulo= parseFloat(prompt("Por favor ingrese cual es el alto del rectángulo en centímetros (sólo el número): "));
console.log("El perímetro del rectángulo es de "+((anchoRectangulo+altoRectangulo)/2).toFixed(2)+" cm");

/*Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un 
mensaje muestre el porcentaje de dicho número.*/
let numero = parseInt(prompt("Por favor ingrese un número entero: "));
let porcentajeNumero = parseInt(prompt("Por favor ingrese el porcentaje que desea obtener de dicho número): "));
console.log("El "+porcentajeNumero+"% de "+numero+" es: "+((porcentajeNumero*numero)/100));

/*Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar 
el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte 
(p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).*/
let aPie = 5;
let enBici = 10;
let enAuto = 60;
let distancia = parseFloat(prompt("Por favor indique la distancia que desea recorrer en kilómetros: "))
console.log("Caminando demorará: "+(distancia/aPie).toFixed(2)+" horas");
console.log("En Bicicleta demorará: "+(distancia/enBici).toFixed(2)+" horas");
console.log("EnAutomóvil demorará: "+(distancia/enAuto).toFixed(2)+" horas");

/*Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno 
de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.*/
let primerEscala = prompt("Ingrese la primer escala: ");
let duracionPrimerEscala = parseInt(prompt("Ingrese la duración de la primer escala expresada en minutos: "));
let segundaEscala = prompt("Ingrese la segunda escala: ");
let duracionSegundaEscala = parseInt(prompt("Ingrese la duración de la segunda escala expresada en minutos: "));
let tercerEscala = prompt("Ingrese la tercer escala: ");
let duracionTercerEscala = parseInt(prompt("Ingrese la duración de la tercer escala expresada en minutos: "));
console.log(`Primer Escala: ${primerEscala}, con una duración de ${duracionPrimerEscala} minutos.`);
console.log(`Segunda Escala: ${segundaEscala}, con una duración de ${duracionSegundaEscala} minutos.`);
console.log(`Tercer Escala: ${tercerEscala}, con una duración de ${duracionTercerEscala} minutos.`);
console.log("Duración total del vuelo: "+(duracionPrimerEscala+duracionSegundaEscala+duracionTercerEscala)+" minutos.");

/*Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos 
que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, 
"Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).*/
let numeroPartida = parseInt(prompt("Por favor ingrese el número de partida (entero): "));
let incremento = parseInt(prompt("Por favor ingrese el número por el que desea incrementar: "))
console.log(`Empezando en ${numeroPartida} e incrementando de a ${incremento}:`);
for(let i=1; i<6; i++){
    console.log(`Incremento ${i}) Total: ${(numeroPartida+incremento)}`);
    numeroPartida = (numeroPartida + incremento);
};

/*Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a 
grados Fahrenheit.*/
let gradosCelsius = parseInt(prompt("Por favor ingrese el número de grados celsius a convertir: "));
let gradosFarenheit = ((gradosCelsius * 9/5 ) + 32);
console.log(`Los ${gradosCelsius}C° corresponden a ${gradosFarenheit}F°.`);

/*Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo.*/
let primerNumero = parseInt(prompt("Por favor ingrese un número entero: "));
let numeroVerificarsMultiplo = parseInt(prompt("Por favor ingrese el número que desea saber si es múltiplo: "));
if ((primerNumero % numeroVerificarsMultiplo) == 0) {
    console.log("El número es múltiplo.")
} else {
        console.log("El número no es múltiplo.")
};

/*Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, 
minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)*/
let totalSegundos = parseInt(prompt("Por favor ingrese la cantidad de segundos a convertir: "));
let horas = parseInt(totalSegundos / 3600);
let min = parseInt((totalSegundos % 3600) / 60);
let segundos = parseInt((totalSegundos % 3600) % 60);
console.log(`${totalSegundos} segundos corresponden a: ${horas} horas, ${min} minutos y ${segundos} segundos.`);

/*Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la cantidad de caracteres que tiene ese texto.*/
let texto = prompt("Por favor ingrese el texto: ");
console.log("El texto ingresado tiene un total de "+texto.length+" caracteres.");

/*Crear un programa que pida al usuario ingresar cuántos años lleva trabajando en una empresa, y le devuelva la cantidad de días 
de vacaciones al año que le corresponden, siendo 15 días hasta 3 años y 2 días más por cada año extra (p. ej.: a 6 años 
corresponden 21 días).*/
let aniosTrabajados = parseInt(prompt("Por favor ingresa la cantidad de años trabajos: "));
let diasExtra = (aniosTrabajados-3)*2;
if (aniosTrabajados <= 3) {
    console.log("Te corresponden 15 días de vacaciones");
} else {
    console.log("Te corresponden "+(15 + diasExtra)+" días de vacaciones.");
};

/*Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y 
muestre el máximo de huéspedes que puede albergar.*/
let habitacionPara2 = parseInt(prompt("Por favor ingrese cuántas habitaciones para dos personas tiene el hotel: "));
let habitacionPara3 = parseInt(prompt("Por favor ingrese cuántas habitaciones para tres personas tiene el hotel: "));
let habitacionPara4 = parseInt(prompt("Por favor ingrese cuántas habitaciones para cuatro personas tiene el hotel: "));
console.log("La cantidad total de huespedes que puede alojar el hotel es: "+((2*habitacionPara2)+(3*habitacionPara3)+(4*habitacionPara4)));

/*Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada 
servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el 
mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. 
Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. 
Hacerlo con 3 servicios.*/
let dineroDisponible = parseFloat(prompt("Por favor ingrese la cantidad de dinero que tiene disponible: "));
let serviciosPorPagar = 3;
const servicios = [];
const importes = [];
for(let i=0; i<3; i++){
    servicios.push(prompt("Por favor ingresa el servicio que desea abonar: "));
    importes.push(parseFloat(prompt("Por favor ingresa el importe que desea abonar: ")));
    dineroDisponible = dineroDisponible - importes[i];
    console.log(`Quedan ${(serviciosPorPagar - (i + 1))
                } servicios por pagar y quedan $${(dineroDisponible).toFixed(2)} disponibles.`)
}
console.log("Servicios a pagar: ")
for(let f=0; f<3; f++){
    console.log(servicios[f]+": "+importes[f]);
}
console.log("Dinero disponible: "+dineroDisponible);

/*Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres 
productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. 
Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los 
precios de los productos deben estar definidos de antemano en variables.*/
let precioProducto1 = 9.99;
let precioProducto2 = 9.99;
let precioProducto3 = 9.99;
let cantidadProducto1 = parseInt(prompt("Cuantos productos 1 desea comprar? "));
let cantidadProducto2 = parseInt(prompt("Cuantos productos 2 desea comprar? "));
let cantidadProducto3 = parseInt(prompt("Cuantos productos 3 desea comprar? "));
let totalCompra = ((precioProducto1*cantidadProducto1)+(precioProducto2*cantidadProducto2)+(precioProducto3*cantidadProducto3));
console.log("El valor total de la compra es: "+totalCompra);
let cantidadCuotas = parseInt(prompt("En cuantas cuotas desea abonar? "));
console.log(`El total a abonar es ${totalCompra}, en ${cantidadCuotas} cuotas de $${(totalCompra/cantidadCuotas).toFixed(2)}`);