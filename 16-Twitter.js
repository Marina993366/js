/* Twitter con Tweets y Usuarios
Usuario
Propiedades
handle (string)
siguiendo (array de Usuario), inicializa vacío
Constructor
pide handle como argumento y lo agrega a su respectiva propiedad
Métodos
seguir(usuario) agrega usuario a siguiendo, si no se encuentra ya en dicho array y si no es el propio usuario (no se puede seguir a sí mismo)
getters para obtener los valores de todas las propiedades
Tweet
Propiedades
id (string)
handle (string)
texto (string)
likes (array de Usuario), inicializa en 0
retweets (array de `Usuario), inicializa en 0
Constructor
genera un id automático y lo asigna a su propiedad
pide handle y texto como argumentos y los agrega a sus respectivas propiedades
Métodos
getters para obtener los valores de todas las propiedades
darLike(usuario) agrega usuario a likes, si ya se encuentra en dicho array, debe removerlo de mismo
retweetear(usuario) agrega usuario a retweets, si ya se encuentra en dicho array, debe removerlo de mismo
Twitter
Propiedades
tweets (array de Tweet), inicializa vacío
Métodos
twittear(tweet) agrega tweet a tweets, si dicho tweet no se encuentra actualmente en el array
obtenerTimeline(usuario) devuelve un array de tweets del usuario. Este array se compone de
todos los tweets publicados por los usuarios que sigue
todos los tweets likeados por los usuarios que sigue
todos los tweets retweeteados por los usuarios que sigue
no debe haber tweets repetidos
deben estar ordenados de más nuevos a más viejos
Observaciones
Es recomendable crear métodos privados para simplificar obtenerTimeline */