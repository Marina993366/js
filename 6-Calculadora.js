/* Crear las siguientes clases con sus respectivos métodos y propiedades. Usar propiedades privadas. Cuando se devuelvan valores, 
si son objetos y arrays de las propiedades, devolver copias de los mismos, para evitar que puedan ser modificados.

Calculadora
Propiedades
resultado (número), inicializa en 0
Métodos
sumar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
restar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
multiplicar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
dividir(numero): divide resultado por numero, y actualiza resultado con el valor de dicha operación
obtenerResultado(): devuelve resultado
reiniciar(): pone resultado en 0
Observaciones
arrojar un error cuando el argumento ingresado no sea un número, con Number.isFinite()
arrojar un error cuando se intenta dividir por 0 */

class Calculadora {
    #resultado;
    constructor(){
        this.#resultado = 0;
    }
    sumar(numero){
        if(Number.isFinite(numero) === false){
            throw new Error("Debe ingresar un número.");
        }
        this.#resultado += numero;
    }
    restar(numero){
        if(Number.isFinite(numero) === false){
            throw new Error("Debe ingresar un número.");
        }
        this.#resultado -= numero;
    }
    multiplicar(numero){
        if(Number.isFinite(numero) === false){
            throw new Error("Debe ingresar un número.");
        }
        this.#resultado *= numero;
    }
    dividir(numero){
        if(Number.isFinite(numero) === false){
            throw new Error("Debe ingresar un número.");
        }
        if(numero === 0){
            throw new Error("No se puede dividir por 0.");
        }
        this.#resultado /= numero;
    }
    obtenerResultado(){
        return this.#resultado;
    }
    reiniciar(){
        this.#resultado = 0;
    }
}
const nuevaOperacion = new Calculadora();
nuevaOperacion.sumar(20);
nuevaOperacion.multiplicar(2);
console.log(nuevaOperacion.obtenerResultado());