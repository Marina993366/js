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
