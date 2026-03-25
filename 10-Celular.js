/* Celular
Propiedades
contactos (array de objetos), inicializa vacío
llamadas (array de strings), inicializa vacío
Métodos
agregarContacto(contacto) agrega contacto a contactos
buscarPorNombre(nombre) devuelve el contacto con dicho nombre en el array contactos o undefined si no lo encuentra
buscarPorNumero(numero) devuelve el contacto con dicho número en el array contactos o undefined si no lo encuentra
eliminarContacto(nombre)elimina el contacto con nombrenombredecontactos`
llamar(nombre) si existe un contacto con nombre nombre en la lista contactos, agrega a llamadas un string que representa un registro de la misma, usando la plantilla `Llamada a ${nombre} con número ${numero} realizada
verContactos() devuelve un string listando todos los contactos, con sus nombres y números
verHistorial() devuelve un string con la lista de llamadas realizadas
Observaciones
contacto es un objeto con las propiedades nombre y numero
no se puede agregar un contacto si ya existe en el celular alguno con el mismo nombre o número */

class Celular{
    #contactos;
    #llamadas;
    constructor(){
        this.#contactos = [];
        this.#llamadas = [];
    }
    agregarContacto(contacto){
        if (this.buscarPorNombre(contacto.nombre) || 
            this.buscarPorNumero(contacto.numero)){
            throw new Error("Contacto duplicado");
        }
        this.#contactos.push(contacto);
    }
    buscarPorNombre(nombre){
        return this.#contactos.find(
            contacto => contacto.nombre === nombre
        );
    }
    buscarPorNumero(numero){
        return this.#contactos.find(
            contacto => contacto.numero === numero
        );
    }
    eliminarContacto(nombre){
        let index = this.#contactos.findIndex(
            contacto => contacto.nombre === nombre
        );
        if (index !== -1){
            this.#contactos.splice(index, 1);
        }
    }
    llamar(nombre){
        let contacto = this.buscarPorNombre(nombre);
        if (contacto){
            this.#llamadas.push(
                `Llamada a ${nombre} con número ${contacto.numero} realizada`
            );
        }
    }
    verContactos(){
        let listado = "";
        for (let i=0; i<this.#contactos.length; i++){
            listado += `${this.#contactos[i].nombre} - ${this.#contactos[i].numero}\n`;
        }
        return `Listado de contactos:\n${listado}`;
    }
    verHistorial(){
        let historial = "";
        for (let i=0; i<this.#llamadas.length; i++){
            historial += `${this.#llamadas[i]}\n`;
        }
        return `Historial de llamadas:\n${historial}`;
    }
}

const celular = new Celular;
celular.agregarContacto({nombre: "Marina", numero: "123456789"});
celular.agregarContacto({nombre: "Juan", numero: "987654321"});
celular.llamar("Marina");
celular.llamar("Juan");
console.log(celular.verContactos());
console.log(celular.verHistorial());    
console.log(celular.buscarPorNombre("Marina"));
console.log(celular.buscarPorNumero("123456789"));

