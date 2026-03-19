/* Televisor
Propiedades

encendido (booleano), inicializa en false
canal (número), inicializa en 0
canales (número)
volumen (número), inicializa en 0
marca (string)
Constructor

pide como argumentos marca y canales y los asigna a sus respectivas propiedades
Métodos

prender() pone encendido en true
apagar() pone encendido en false
verCanalSiguiente() suma 1 a canal y actualiza dicha propiedad
verCanalAnterior() resta 1 a canal y actualiza dicha propiedad
cambiarCanal(canal) actualiza la propiedad canal con el valor del parámetro canal
subirVolumen() suma 1 a volumen y actualiza dicha propiedad
bajarVolumen() resta 1 a volumen y actualiza dicha propiedad
toString() devuelve un string como el siguiente ejemplo:

Televisor Samsung
- Canales: 100
- Canal actual: 23
- Volumen actual: 34
Observaciones

solo se puede modificar el canal y el volumen si el televisor se encuentra prendido
canales representa el máximo de canales posibles. Si se está en el canal máximo o mínimo (0), y se avanza o retrocede, debe dar toda la vuelta. P. ej.: si el canal máximo es 100, se está en el canal 100, y se avanza de canal, debe volver al 0
solo se puede cambiar a un canal que exista
el volumen mínimo es 0 y el máximo 100
 */