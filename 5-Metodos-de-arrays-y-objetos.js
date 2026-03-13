const alumnos = [
    {
        id: 1,
        nombre: 'Zamora',
        edad: 15,
        master: 'FullStack'
    },
    {
        id: 2,
        nombre: 'Jose Luís',
        edad: 22,
        master: 'BlockChain'
    },
    {
        id: 3,
        nombre: 'Lucía',
        edad: 19,
        master: 'IA'
    },
    {
        id: 4,
        nombre: 'Felipe',
        edad: 49,
        master: 'FullStack'
    },
    {
    id: 5,
    nombre: 'María',
    edad: 17,
        master: 'IA'
    },
    {
        id: 6,
        nombre: 'Cecilia',
        edad: 16,
        master: 'FullStack'
    },
    {
        id: 7,
        nombre: 'Cecilia',
        edad: 16,
        master: 'BlockChain'
    }
];

/* Ejercicio 1
Dado un array de números, crear una función vAbsoluto que reciba un array y que devuelve un array con los valores absolutos de los 
números del array que se pasa como parámetro
Pista: usar Math.abs
*/

const numeros = [1, -3, 5, -9, -7];

function vAbsolutos(arr){
    return arr.map(numero => Math.abs(numero));
};

console.log(vAbsolutos(numeros));

/* Ejercicio 2
Dado un array de datos aleatorios, crear una función llamada porTipos que devuelve un objeto con claves por tipo de dato y 
clasifique los valores del array pasado como parámetro segun su tipo
Pista: usar typeof para determinar el tipo
*/

const datosAleatorios = [
    "Paisa",
    66,
    "Qué tal estás",
    {},
    { name: 'Bienve' },
    [1, 2, 3],
    ['Hola que tal'],
    true
]

function porTipos(arr){
    return {
        "numeros": arr.filter(i => typeof i === "number"),
        "palabras": arr.filter(i => typeof i === "string"),
        "booleanos": arr.filter(i => typeof i === "boolean"),
        "objetos": arr.filter(i => typeof i === "object"),
    }
}

console.log(porTipos(datosAleatorios));

/* Ejercicio 3
Dado el array de alumnos, crear una función getFullStackStudents a la que se lo pasamos como parámetro y nos devuelva únicamente 
a los alumnos que pertenezcan a la formación Full Stack
Pista: usar filter
*/
function getFullStackStudents(arr){
    return arr.filter(alumnos => alumnos.master === 'FullStack')
};

console.log(getFullStackStudents(alumnos));

/* Ejercicio 4
Dado el array de alumnos, crear una función llamada nStudentFullStack que nos devuelva el número de usuarios que pertenecen a 
dicha formación. De igual manera para el resto de las formaciones
Pista: usar reduce o filter (más eficiente reduce)
*/

function nStudentFullStack(arr){
    return {
        "Fullstack": arr.filter(alumno => alumno.master === 'FullStack').length,
        "Blockchain": arr.filter(alumno => alumno.master === 'BlockChain').length,
        "IA": arr.filter(alumno => alumno.master === 'IA').length,
    };
}

function nStudentFullStack(arr){
    return {
        "Fullstack": arr.filter(alumno => alumno.master === 'FullStack').length,
        "Blockchain": arr.filter(alumno => alumno.master === 'BlockChain').length,
        "IA": arr.filter(alumno => alumno.master === 'IA').length,
    };
}

console.log(nStudentFullStack(alumnos));

/* Ejercicio 5
Dado el array de alumnos, crear una función llamada getAdultStudents que reciba el array por parámetro y devuelva un array 
únicamente de los mayores de edad
*/

function getAdultStudents (arr){
    return {
        "Mayores de edad": arr.filter(alumnos => alumnos.edad >= 18)
    };
};

console.log(getAdultStudents (alumnos));

/* Ejercicio 6
Dado el array de alumnos, crear una función llamada mayor que reciba el array como parámetro y que devuelva el alumno mayor de 
toda la lista de alumnos
Pista: usa reduce o for
*/

function mayor(arr){
    return arr.reduce((acumulador, alumno) => {
        if (alumno.edad > acumulador.edad){
            return alumno;
        } else{
            return acumulador;
        }
    }, arr[0])
}; 

console.log(mayor(alumnos));

/* Ejercicio 7
Haz el ejercicio 2 usando "reduce"
*/

/* function porTipos(arr){
    return arr.reduce((acumulador, elemento) => {
        if (typeof elemento === "number"){
            acumulador.numeros.push(elemento);
        }   else if (typeof elemento === "string"){
            acumulador.palabras.push(elemento);
        }   else if (typeof elemento === "boolean"){
            acumulador.booleanos.push(elemento);
        }   else if (typeof elemento === "object"){
            acumulador.objetos.push(elemento);
        }
        return acumulador;
    }, { numeros: [], palabras: [], booleanos: [], objetos: [] })
}; */

function porTipos(arr){
    return arr.reduce((acumulador, elemento) => {
        let tipo = typeof elemento;
        acumulador[tipo] = acumulador[tipo] ? acumulador[tipo] : [];
        acumulador[tipo].push(elemento);
        return acumulador},{})
    };

console.log(porTipos(datosAleatorios));

//El problema con filter es que tiene que recorrer el array varias veces lo cual lo hace poco eficiente por eso es mejor reduce

/* Ejercicio 8
Dado el array de alumnos, crear una función llamada agruparPor que reciba dos parámetros, primero el array y luego un string con 
la propiedad por la que queremos agrupar de las posibles de los alumnos. La función devolverá un objeto con una propiedad por cada 
uno de los valores posibles de la propiedad pasada como parámetro. Te lo explico con un ejemplo mejor.
*/

function agruparPor(arr, string){
    return arr.reduce((acumulador, alumno) => {
        let propiedad = alumno[string];
        acumulador[propiedad] = acumulador[propiedad] ? acumulador[propiedad] : [];
        acumulador[propiedad].push(alumno);
        return acumulador
    }, {})       
};

console.log(agruparPor(alumnos, "master"));
