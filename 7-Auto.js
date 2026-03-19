/* Auto
Propiedades
encendido (booleano), inicializa en false
velocidad (número), inicializa en 0
marca (string)
modelo (número)
patente (string)
Constructor
pide como argumentos marca, modelo, patente y los asigna a sus respectivas propiedades
Métodos
arrancar() pone encendido en true
apagar() pone encendido en false
acelerar() suma 10 a velocidad y actualiza dicha propiedad
desacelerar() resta 10 a velocidad y actualiza dicha propiedad
toString() devuelve un string con la siguiente plantilla ${marca} ${modelo}, patente ${patente}
Observaciones
sólo se puede acelerar o desacelerar si el auto se encuentra prendido
sólo se puede apagar el auto si la velocidad es 0
la velocidad mínima es 0 */

class Auto {
    #encendido;
    #velocidad;
    constructor(marca, modelo, patente){
        this.#encendido = false;
        this.#velocidad = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    arrancar(){
        this.#encendido = true;
    }
    apagar(){
        if(this.#velocidad === 0){
            this.#encendido = false;
        }else{
            throw new Error("Para apagar el auto la velocidad debe llegar a 0.");
        }
    }
    acelerar(){
        if(this.#encendido){
            this.#velocidad += 10;
        }else{
            throw new Error("Para poder acelerar, el auto debe estar encendido.");
        }
    }
    desacelerar(){
        if(this.#encendido){
            this.#velocidad -= 10;
            if(this.#velocidad < 0){
                this.#velocidad = 0;
            }
        }
    }
    toString(){
        return `${this.marca} ${this.modelo}, patente ${this.patente}`;
    }
    obtenerVelocidad(){
        return this.#velocidad;
    }
}

const auto1 = new Auto("Ford", "Escort", "SOH381");
const auto2 = new Auto("Fiat", "Palio", "PPS936");

auto1.arrancar();
auto1.acelerar();
auto1.acelerar();
console.log(auto1.obtenerVelocidad());
auto1.acelerar();
auto1.desacelerar();
console.log(`La velocidad del ${auto1.toString()} es ${auto1.obtenerVelocidad()}`);