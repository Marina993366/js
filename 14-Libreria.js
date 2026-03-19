/* Librería con Libros con Autor
Autor
Propiedades
nombre (string)
nacionalidad (string)
Constructor
pide como argumentos nombre y nacionalidad y los asigna a sus respectivas propiedades
Métodos
getters para obtener los valores de todas las propiedades
Libro
Propiedades
id (string)
titulo (string)
autor (Autor)
precio (número)
genero (string)
stock (número)
Constructor
genera un id automático y lo asigna a su propiedad
el resto de propiedades las pide como argumentos y las asigna según corresponda
Métodos
tieneStock() devuelve true si stock es mayor a 0, false sino
getters para obtener los valores de todas las propiedades, menos stock
setter para modificar los valores de precio y stock
Observaciones
stock y precio tienen como valor mínimo 0
Libreria
Propiedades
libros (array de `Libro), inicializa vacío
ganancias (número), inicializa en 0
Métodos
agregar(libro) agrega libro a libros
eliminar(id) elimina de libros el libro con id
buscarPorId(id) devuelve la información de un libro con id
buscarPorTitulo(titulo) devuelve la información de un libro con titulo
filtrarPorAutor(autor) devuelve un array de libros escritos por autor
filtrarPorGenero(genero) devuelve un array de libros con genero
comprarLibros(idLibros) toma un array de ids de libros, si tienen stock, reduce el stock de dichos libros en 1 y suma a ganancias el precio de cada libro comprado
obtenerGanancias devuelve ganancias */