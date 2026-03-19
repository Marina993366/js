/* Chat con Usuarios y Mensajes
Usuario
Propiedades
id (string)
nombre (string)
Constructor
genera un id automático y lo asigna a su propiedad
el resto de propiedades las pide como argumentos y las asigna según corresponda
Métodos
getters para obtener los valores de todas las propiedades
Mensaje
Propiedades
remitente (Usuario)
destinatario (Usuario)
texto (string)
fecha (Date), inicializa con la fecha actual (new Date())
Constructor
pide las propiedades no inicializadas como argumentos y las asigna según corresponda
Métodos
getters para obtener los valores de todas las propiedades
Chat
Propiedades
usuario (Usuario)
contactos (array de Usuario), inicializa vacío
mensajes (array de Mensaje), inicializa vacío
Constructor
pide usuario como argumento y lo agrega a su respectiva propiedad
Métodos
agregarContacto(usuario) agregar usuario a contactos
obtenerContactos() devuelve un array con la lista de contactos
obtenerMensaje() devuelve un array con la lista de mensajes
filtrarPorContacto(id) devuelve un array con la lista de mensajes que tienen como destinatario un usuario con id
filtrarPorFecha(fecha) devuelve un array con la lista de mensajes que tienen fecha (mismo día, mes y año)
mandarMensaje(mensaje) agrega mensaje a mensajes, si destinatario es un usuario de la lista de contactos con y si mensaje no se 
encuentra ya en el array de mensajes
Observaciones
solo se pueden mandar mensajes a usuarios de la lista de contactos. En caso contrario, arrojar un error. */