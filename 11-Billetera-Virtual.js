/* BilleteraVirtual
Propiedades
monto
operaciones (array de objetos), inicializa vacío
Constructor
toma como argumento montoInicial y lo asigna a monto
Métodos
agregarGasto(gasto) agrega gasto a operaciones
agregarGanancia(ganancia) agrega ganancia a operaciones
obtenerGastosPorMes(mes) devuelve un array con todos los gastos hechos en mes
obtenerGanaciasPorMes(mes) devuelve un array con todas los ganancias obtenidas en mes
obtenerGastosPorCategoria(categoria) devuelve un array con todos los gastos de cierta categoria
obtenerGanaciasPorCategoria(categoria) devuelve un array con todas las ganancias de cierta categoria
calcularTotalPorMes(mes) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en 
un cierto mes
calcularTotalPorCategoria(categoria) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias 
obtenidas en cierta `categoria
**obtenerMonto()** devuelve monto
Observaciones
los objetos gasto y ganancia contiene las propiedades:
descripcion (string)
cantidad (número)
fecha (Date)
categoria (string)
cuando se agrega gasto o ganancia al array operaciones, hay que agregarle a dicha objeto la propiedad tipo con el valor "GASTO" o 
"GANANCIA" según corresponda, para poder identificarlos en las siguientes operaciones
cuando se devuelve un array con gastos o ganancias, hay que borrar de los objetos que se devuelven la propiedad tipo */

class BilleteraVirtual{
    #monto;
    #operaciones;
    constructor(montoInicial){
        this.#monto = montoInicial;
        this.#operaciones = [];
    }

    agregarGasto(gasto){
        if(gasto.cantidad > this.#monto){
            throw new Error("No hay suficiente dinero");
        }
        gasto.tipo = "GASTO";
        this.#operaciones.push(gasto);
        this.#monto -= gasto.cantidad;
    }
    agregarGanancia(ganancia){
        ganancia.tipo = "GANANCIA";
        this.#operaciones.push(ganancia);
        this.#monto += ganancia.cantidad;
    }
    obtenerGastosPorMes(mes){
        return this.#operaciones.filter(op => op.tipo === "GASTO" && op.fecha.getMonth() === mes);
    }
    obtenerGanaciasPorMes(mes){
        return this.#operaciones.filter(op => op.tipo === "GANANCIA" && op.fecha.getMonth() === mes);
    }
    obtenerGastosPorCategoria(categoria){
        return this.#operaciones.filter(op => op.tipo === "GASTO" && op.categoria === categoria);
    }
    obtenerGanaciasPorCategoria(categoria){
        return this.#operaciones.filter(op => op.tipo === "GANANCIA" && op.categoria === categoria);
    }
    calcularTotalPorMes(mes){
        const gastos = this.obtenerGastosPorMes(mes);
        const ganancias = this.obtenerGanaciasPorMes(mes);
        const totalGastos = gastos.reduce((sum, gasto) => sum + gasto.cantidad, 0);
        const totalGanancias = ganancias.reduce((sum, ganancia) => sum + ganancia.cantidad, 0);
        return totalGanancias - totalGastos;
    }
    calcularTotalPorCategoria(categoria){
        const gastos = this.obtenerGastosPorCategoria(categoria);
        const ganancias = this.obtenerGanaciasPorCategoria(categoria);
        const totalGastos = gastos.reduce((sum, gasto) => sum + gasto.cantidad, 0);
        const totalGanancias = ganancias.reduce((sum, ganancia) => sum + ganancia.cantidad, 0);
        return totalGanancias - totalGastos;
    }
    obtenerMonto(){
        return this.#monto;
    }
}

const billetera = new BilleteraVirtual(2000);

billetera.agregarGasto({descripcion : "compra", cantidad : 200, fecha : new Date(2024,2,20), categoria : "Alimentos"});
billetera.agregarGanancia({descripcion : "venta", cantidad : 130, fecha : new Date(2024,2,22), categoria : "Alimentos"});
billetera.agregarGasto({descripcion : "compra", cantidad : 150, fecha : new Date(2024,2,21), categoria : "Alimentos"});
billetera.agregarGasto({descripcion : "compra", cantidad : 250, fecha : new Date(2024,2,24), categoria : "Alimentos"});
billetera.agregarGanancia({descripcion : "venta", cantidad : 110, fecha : new Date(2024,2,24), categoria : "Alimentos"});
billetera.agregarGanancia({descripcion : "venta", cantidad : 230, fecha : new Date(2024,2,25), categoria : "Alimentos"});

console.log(`Gastos de alimentos:`, billetera.obtenerGastosPorCategoria("Alimentos"));
console.log(`Ganancias en alimentos:`, billetera.obtenerGanaciasPorCategoria("Alimentos"));
console.log(`Gastos de marzo:`, billetera.obtenerGastosPorMes(2));
console.log(`Ganancias de marzo:`, billetera.obtenerGanaciasPorMes(2));
console.log(`Total del mes de marzo: ${billetera.calcularTotalPorMes(2)}`);
console.log(`Total en alimentos: ${billetera.calcularTotalPorCategoria("Alimentos")}`);
console.log(`Monto actual: ${billetera.obtenerMonto()}`);

