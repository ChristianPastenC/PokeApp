# PokeApp

![alt text](https://github.com/ChristianPastenC/PokeApp/blob/main/appWorking1.png)
![alt text](https://github.com/ChristianPastenC/PokeApp/blob/main/appWorking2.png)

Solución creada con la librería de React (Create React App (https://github.com/facebook/create-react-app).)

Este proyecto utiliza React para consumir PokéAPI (pokeapi.co)
Incialmente se nos muestra una pequeña vista de 10 pokémon, permitiendo cambiar la lista de atrás a adelante con límite de 20 objetos.
Al seleccionar un elemento, del lado izquiero obtenemos una vista con otros datos del objeto.

La vista de 'tarjetas' observada fue creada con ayuda de Material UI, al igual que los botones.

Se utilizan 3 componentes principales para el funcionamiento de la app: 
  - ViewComponent:      muestra un grid con 10 cards con imagen y nombre del pokémon.
  - Details Component:  Muestra un card con detalles generales de un item específico.
  - HomeComponent:      Funciona como contenedor de los otros dos componetes.
 
# Comandos del proyecto
Para iniciar el proyecto introducimos el comando en una terminal 
### npm start

Desplegará nuestro browser predefinido en el puero 3000 por defecto (http://localhost:3000).
