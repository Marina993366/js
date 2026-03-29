/* Carrito con Producto
Producto
Propiedades
id (string)
nombre (string)
precio (número)
cantidad (número)
tieneImpuesto (booleano)
Constructor
toma como argumentos nombre, precio, cantidad y tieneImpuesto y los asigna a sus respectivas propiedades
genera un id automático y lo asigna a su propiedad
Métodos
getters para obteners los valores de todas las propiedades
setter para modificar el valor de cantidad
Observaciones
la cantidad nunca puede ser 0
el precio no puede ser menor a 0
Carrito
Propiedades
productos (array de Producto), inicializa vacío
Métodos
agregarProducto(producto) agrega producto a `productos
actualizarCantidadProducto(id, cantidad) actualiza la cantidad del producto en productos con id
eliminarProducto(id) elimina de productos el producto con id
calcularTotal() devuelve el total del carrito (con impuestos incluidos)
calcularImpuestoTotal() devuelve el total de la suma de los impuestos de cada producto que tieneImpuesto
obtenerCantidadTotal() devuelve la cantidad total de ítems en el producto
toString() devuelve un string con
la lista de productos, detallando nombre, precio por unidad y cantidad
subtotal de todos los productos sin sumar impuesto
subtotal de todos los impuestos sumados
total final (suma de los subtotales)
Observaciones
el impuesto es del 10% sobre el precio del producto */

class Producto{ 
    #id;
    #nombre;
    #precio;
    #cantidad;
    #tieneImpuesto;
    static contador = 0;
    constructor(nombre, precio, cantidad, tieneImpuesto){
        if(precio < 0){
            throw new Error("El precio no puede ser negativo");
        }

        if(cantidad <= 0){
            throw new Error("La cantidad no puede ser 0");
        }

        Producto.contador++;
        this.#id = Producto.contador.toString();
        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
        this.#tieneImpuesto = tieneImpuesto;
    }
    get id(){
        return this.#id;
    }
    get nombre(){
        return this.#nombre;
    }
    get precio(){
        if(this.#precio < 0){
            throw new Error("El precio no puede ser negativo.");
        }
        return this.#precio;
    }
    get cantidad(){
        if(this.#cantidad <= 0){
            throw new Error("La cantidad no puede ser 0 o menor que 0.");
        }
        return this.#cantidad;
    }
    get tieneImpuesto(){
        return this.#tieneImpuesto;
    }
    set cantidad(cantidad){
        if(cantidad <= 0){
            throw new Error("La cantidad no puede ser 0 o menor que 0.");
        }
        this.#cantidad = cantidad;
    }
}
class Carrito{
    #productos
    constructor(){
        this.#productos = [];
    }
    agregarProducto(producto){
        let existente = this.#productos.find(p => p.nombre === producto.nombre);
        if (existente){
            existente.cantidad += producto.cantidad;
            } else{
                this.#productos.push(producto);
            }
        }
    actualizarCantidadProducto(id, cantidad){
        let existente = this.#productos.find(p => p.id === id);
        if (existente){
            existente.cantidad = cantidad;
        } else{
            throw new Error("No se puede actualizar la cantidad de un producto que no existe.");
        }
    }
    eliminarProducto(id){
        let index = this.#productos.findIndex(
            producto => producto.id === id
        );
        if (index !== -1){
            this.#productos.splice(index, 1);
        }
    };
    calcularTotal(){
        let total = 0;
        for (let i=0; i<this.#productos.length; i++){
            let producto = this.#productos[i];
            let precioConImpuesto = producto.precio;
            if (producto.tieneImpuesto){
                precioConImpuesto *= 1.10;
            }
            total += precioConImpuesto * producto.cantidad;
        }
        return total.toFixed(2);
    }
    calcularImpuestoTotal(){
        let totalImpuesto = 0;
        for (let i=0; i<this.#productos.length; i++){
            let producto = this.#productos[i];
            if (producto.tieneImpuesto){
                totalImpuesto += producto.precio * 0.10 * producto.cantidad;
            }
        }
        return totalImpuesto.toFixed(2);
    }
    obtenerCantidadTotal(){
        let cantidadTotal = 0;
        for (let i= 0; i<this.#productos.length; i++){
            cantidadTotal += this.#productos[i].cantidad;
        }         
        return cantidadTotal.toFixed(2);
    } 
    toString(){
        let listaProductos = "";
        for (let i= 0; i<this.#productos.length; i++){
            listaProductos += `${this.#productos[i].nombre}: $${this.#productos[i].precio} x ${this.#productos[i].cantidad}\n`;
        }
        return `Lista de productos en el carrito:\n${listaProductos}\nSubtotal sin impuesto: ${(this.calcularTotal()-this.calcularImpuestoTotal())}\nImpuestos: ${this.calcularImpuestoTotal()}\nTotal: ${this.calcularTotal()}`;
    }
}

let producto1 = new Producto("Sal", 5.5, 2, false);
let producto2 = new Producto("Aceite", 50, 5, true);
let producto3 = new Producto("Vinagre", 24.3, 2, true);
let producto4 = new Producto("Azucar", 10.2, 5, true);
let producto5 = new Producto("Leche", 12.3, 3, true);
let producto6 = new Producto("Yerba", 25.5, 4, true);
console.log(`ID del producto ${producto1.nombre}: ${producto1.id}`);
console.log(`Precio del producto ${producto2.nombre}: $${producto2.precio}`);

let carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);
carrito.agregarProducto(producto4);
carrito.agregarProducto(producto5);
carrito.agregarProducto(producto6);
carrito.actualizarCantidadProducto("2", 10);
carrito.eliminarProducto("4");
console.log(carrito.toString());