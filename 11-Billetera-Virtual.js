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
