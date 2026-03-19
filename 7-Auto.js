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