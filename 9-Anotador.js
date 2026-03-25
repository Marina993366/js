/*Anotador
Propiedades

titulo (string)
notas (array de strings), inicializa vacío
Constructor

pide como argumento titulo y lo asigna a sus respectiva propiedad
Método

agregarNota(nota) agrega nota al array de notas
actualizarNota(id, nota) actualiza el ítem con índice id, reemplazándolo por nota
obtenerNota(id) devuelve el ítem del array notas con índice id
eliminarNota(id) elimina de notas el ítem con índice id
eliminarNotas() borra todos los ítems de notas
listarNotas() devuelve un string con todas las notas y sus respectivos ids, por ejemplo

Cosas para hacer
------------------------
1. Ir al súper
2. Ver serie
3. Programar
4. Leer libro
*/

class Anotador{
    #notas;
    constructor(titulo){
        this.#notas = [];
        this.titulo = titulo;
    }
    agregarNota(nota) {
        this.#notas.push(nota);
    }
    actualizarNota(id, nota){
        this.#notas[(id-1)] = nota;
    } 
    obtenerNota(id){
        return this.#notas[(id-1)];
    }
    eliminarNota(id){
        this.#notas.splice((id-1), 1);
    } 
    eliminarNotas(){
        this.#notas =[];
    }
    listarNotas(){
        let resultado = "";
        for (let i=0; i<this.#notas.length; i++){
            resultado += `${i+1}. ${this.#notas[i]}\n`;
        }
        return `
Cosas para hacer
------------------------ 
${resultado}`;
    }
}

const anotador = new Anotador;
anotador.agregarNota("Desayunar");
anotador.agregarNota("Comprar tomates");
anotador.agregarNota("Comprar uvas");
anotador.agregarNota("Comprar bananas");
console.log(anotador.listarNotas());
anotador.actualizarNota(3, "Comprar papel");
console.log(anotador.listarNotas());
console.log(anotador.obtenerNota(2));
anotador.eliminarNota(1);
console.log(anotador.listarNotas());