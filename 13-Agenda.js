/* Agenda con Tareas
Tarea
Propiedades
id (string)
descripcion (string)
categoria (string)
vencimiento (Date)
finalizada (booleano), inicializa en false
Constructor
toma como argumentos descripcion, categoria, vencimiento y los asigna a sus propiedades
genera un id automático y lo asigna a su propiedad
Métodos
finalizar() cambia finalizada a true
getters para obtener los valores de todas las propiedades
Agenda
Propiedades
tareas (array de Tarea), inicializa vacío
Métodos
agregar(tarea) agrega tarea a tareas
eliminar(id) elimina de tareas la tarea con id
finalizar(id) finaliza la Tarea con id
obtener(id) devuelve la tarea con id
obtenerTodas() devuelve un array con todas las tareas
filtrarActivas() devuelve un array de tareas que no estén finalizadas
filtrarFinalizadas() devuelve un array de tareas que estén finalizadas
filtrarPorCategoria(categoria) devuelve un array de tareas que tenga categoria
filtrarPorVencimiento(fecha) devuelve un array de tareas que tenga vencimiento en fecha */

class Tarea{
    #id;
    #descripcion;
    #categoria;
    #vencimiento;
    #finalizada;
    static contador = 0;
    constructor(descripcion, categoria, vencimiento){
        Tarea.contador++;
        this.#id = Tarea.contador;
        this.#descripcion = descripcion;
        this.#categoria = categoria;
        this.#vencimiento = vencimiento;
        this.#finalizada = false;
    }
    finalizar(){
        this.#finalizada = true;
    }
    get id(){
        return this.#id;
    }
    get descripcion(){
        return this.#descripcion;
    }
    get categoria(){
        return this.#categoria;
    }
    get vencimiento(){
        return this.#vencimiento;
    }
    get finalizada(){
        return this.#finalizada;
    }
}

class Agenda {
    #tareas;
    constructor(){
        this.#tareas = [];
    }
    agregar(tarea){
        let existente = this.#tareas.find(t => t.descripcion === tarea.descripcion);
        if (existente){
            throw new Error("La tarea ya existe en la agenda");
        } else{
            this.#tareas.push(tarea);
        }
    }
    eliminar(id){
        let index = this.#tareas.findIndex(
            tarea=> tarea.id === id
        );
        if (index !== -1){
            this.#tareas.splice(index, 1);
        }
    }
    finalizar(id){
        let existente = this.#tareas.find(t => t.id === id);
        if (existente){
            existente.finalizar();
        } else{
            throw new Error("El ID no corresponde a una tarea de la agenda");
        }
    }
    obtener(id){
        let existente = this.#tareas.find(t => t.id === id);
        if (existente){
            return existente;
        } else{
            throw new Error("El ID no corresponde a una tarea de la agenda");
        }
    }
    obtenerTodas(){
        return this.#tareas;
    }
    filtrarActivas(){
        let activas = this.#tareas.filter(t => t.finalizada === false);
        return activas;
    }
    filtrarFinalizadas(){
        let finalizadas = this.#tareas.filter(t => t.finalizada === true);
        return finalizadas;
    }
    filtrarPorCategoria(categoria){
        let filtradas = this.#tareas.filter(t => t.categoria === categoria);
        return filtradas;
    }
    filtrarPorVencimiento(fecha){
        return this.#tareas.filter(
            t => t.vencimiento.getTime() === fecha.getTime()
        );
    }
}

let tarea1 = new Tarea("Ir al super", "Hogar", new Date(2025,3,25));
let tarea2 = new Tarea("Cargar pagos", "Trabajo", new Date(2025,3,25));
let tarea3 = new Tarea("Llamar plomero", "Hogar", new Date(2025,3,23));
let tarea4 = new Tarea("Preparar Informe", "Trabajo", new Date(2025,3,24));

let agenda1 = new Agenda();
agenda1.agregar(tarea1);
agenda1.agregar(tarea2);
agenda1.agregar(tarea3);
agenda1.agregar(tarea4);

agenda1.eliminar(1);
agenda1.finalizar(3);
for (let i=0; i<agenda1.obtenerTodas().length; i++){
    console.log(`Tarea: ${agenda1.obtenerTodas()[i].descripcion} - Vence el ${agenda1.obtenerTodas()[i].vencimiento.toLocaleDateString()}`);
}
for (let i=0; i<agenda1.filtrarActivas().length; i++){
    console.log(`Tarea Activa: ${agenda1.filtrarActivas()[i].descripcion} - Vence el ${agenda1.filtrarActivas()[i].vencimiento.toLocaleDateString()}`);
}
for (let i=0; i<agenda1.filtrarFinalizadas().length; i++){
    console.log(`Tarea Finalizada: ${agenda1.filtrarFinalizadas()[i].descripcion}`);
}
for (let i=0; i<agenda1.filtrarPorCategoria("Trabajo").length; i++){
    console.log(`Tarea de Trabajo: ${agenda1.filtrarPorCategoria("Trabajo")[i].descripcion} - Vence el ${agenda1.filtrarPorCategoria("Trabajo")[i].vencimiento.toLocaleDateString()}`);
}
for (let i=0; i<agenda1.filtrarPorVencimiento(new Date(2025,3,24)).length; i++){
    console.log(`Tarea que vence el 24/4: ${agenda1.filtrarPorVencimiento(new Date(2025,3,24))[i].descripcion} - Vence el ${agenda1.filtrarPorVencimiento(new Date(2025,3,24))[i].vencimiento.toLocaleDateString()}`);
}

