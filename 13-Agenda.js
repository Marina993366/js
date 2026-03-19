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
