/* Televisor
Propiedades
encendido (booleano), inicializa en false
canal (número), inicializa en 0
canales (número)
volumen (número), inicializa en 0
marca (string)
Constructor
pide como argumentos marca y canales y los asigna a sus respectivas propiedades
Métodos
prender() pone encendido en true
apagar() pone encendido en false
verCanalSiguiente() suma 1 a canal y actualiza dicha propiedad
verCanalAnterior() resta 1 a canal y actualiza dicha propiedad
cambiarCanal(canal) actualiza la propiedad canal con el valor del parámetro canal
subirVolumen() suma 1 a volumen y actualiza dicha propiedad
bajarVolumen() resta 1 a volumen y actualiza dicha propiedad
toString() devuelve un string como el siguiente ejemplo
Televisor Samsung
- Canales: 100
- Canal actual: 23
- Volumen actual: 34
Observaciones
solo se puede modificar el canal y el volumen si el televisor se encuentra prendido
canales representa el máximo de canales posibles. Si se está en el canal máximo o mínimo (0), y se avanza o retrocede, debe dar 
toda la vuelta. P. ej.: si el canal máximo es 100, se está en el canal 100, y se avanza de canal, debe volver al 0
solo se puede cambiar a un canal que exista
el volumen mínimo es 0 y el máximo 100
 */

class Televisor{
    #encendido;
    #canal;
    #volumen;
    constructor(canales, marca){
        this.#encendido = false;
        this.#canal = 0;
        this.canales = canales;
        this.#volumen = 0;
        this.marca = marca;
    }

    prender(){
        this.#encendido = true;
    }
    apagar(){
        this.#encendido = false;
    }
    verCanalSiguiente(){
        if(this.#encendido){
            if (this.#canal < 100) {
                this.#canal++;
            } else {
                this.#canal = 0;
            }
        }else{
            throw new Error("Para poder cambiar de canal, el televisor debe estar encendido.");
        }
    }
    verCanalAnterior(){
        if(this.#encendido){
            if (this.#canal > 0) {
                this.#canal--;
            } else {
                this.#canal = 100;
            }
        }else{
            throw new Error("Para poder cambiar de canal, el televisor debe estar encendido.");
        }
    } 
    cambiarCanal(canal){
        if(this.#encendido){
            this.#canal = canal;
        }else{
            throw new Error("Para poder cambiar de canal, el televisor debe estar encendido.");
        }
    }
    subirVolumen(){
        if(this.#encendido){
            if (this.#volumen < 100) {
                this.#volumen++;
            } else {
                console.log("Alcanzó el volumen máximo.");
            }
        }else{
            throw new Error("Para poder subir el volumen, el televisor debe estar encendido.");
        }
    }
    bajarVolumen(){
        if(this.#encendido){
            if (this.#volumen > 0) {
                this.#volumen--;
            } else {
                console.log("Alcanzó el volumen mínimo.");
            }
        }else{
            throw new Error("Para poder bajar el volumen, el televisor debe estar encendido.");
        }
    } 
    toString(){
        return `
        Televisor ${this.marca} 
        - Canales: ${this.canales} 
        - Canal actual:  ${this.#canal} 
        - Volumen actual: ${this.#volumen}`;
    }
}

const tv = new Televisor(100,"Samsung");

tv.prender();
tv.cambiarCanal(20);
tv.subirVolumen();
tv.subirVolumen();
tv.subirVolumen();
tv.subirVolumen();
tv.bajarVolumen();
tv.verCanalSiguiente();
tv.verCanalSiguiente();
tv.verCanalSiguiente();
tv.verCanalAnterior();
console.log(tv.toString());