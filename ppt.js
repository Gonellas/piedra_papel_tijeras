//! forEach
//A cada elemeto del array le realiza un acción pero no devuelve nada

const numeros = [1, 2, 3, 4, 5];

//Cuando se hace callback se suele poner el elemento en singular de array
//"A cada número, hace que 'número' sea mostrado en consola"
numeros.forEach(numero => console.log(numero));

//Si guardamos el forEach en una variable no devuelve nada
let cajita = numeros.forEach(numero => console.log(numero));
console.log(cajita);

//! map
//A diferencia del forEach, si el map es guardado en una variable si devuelve el array con la acción
let cajita2 = numeros.map(numero => numero * 2);
console.log(cajita2);


//? PIEDRA, PAPEL O TIJERAS

//Array con las opciones del juego
const opciones = ['piedra', 'papel', 'tijeras']

//Función contrincante/"bot", devuelve número random del 0 al 2
function bot() {
    let jugada = Math.round(Math.random() * 2); //0, 1 o 2
    return jugada;
}

//Función player, ingresa la opción elegid en un prompt y devuelve el índice de la opción elegida del array opciones
function player() {
    let jugada = prompt("Ingrese piedra, papel o tijeras");
    jugada = opciones.indexOf(jugada);
    return jugada;
}

//Función de resultado entre el bot y el player
function definicion(bot, player) {
    switch (true) {
        case bot === player:
            alert(`El bot ha elegido: ${opciones[bot]} y el player eligió: ${opciones[player]}. Es un EMPATE.`);
            break;
        case bot === 0 && player === 1: //bot = piedra, player = papel
            alert(`El bot ha elegido: ${opciones[bot]} y el player eligió: ${opciones[player]}. Ganó el Player.`);
            break;
        case bot === 0 && player === 2: //bot = piedra, player = tijeras
            alert(`El bot ha elegido: ${opciones[bot]} y el player eligió: ${opciones[player]}. Ganó el Bot.`);
            break;
        case bot === 1 && player === 0: // bot = papel, player = piedra
            alert(`El bot ha elegido: ${opciones[bot]} y el player eligió: ${opciones[player]}. Ganó el Bot.`);
            break;
        case bot === 2 && player === 1: //bot = tijeras, player = papel
            alert(`El bot ha elegido: ${opciones[bot]} y el player eligió: ${opciones[player]}. Ganó el Bot.`);
            break;
        case bot === 1 && player === 2: //bot = papel, player = tijeras
            alert(`El bot ha elegido: ${opciones[bot]} y el player eligió: ${opciones[player]}. Ganó el Player.`);
            break;
        case bot === 2 && player === 0: //bot = tijeras, player = piedra
            alert(`El bot ha elegido: ${opciones[bot]} y el player eligió: ${opciones[player]}. Ganó el Player.`);
            break;
    }
}

//Función ejecutada por onclick donde pasamos por parámetro qué opción jugó el player
function jugar(player) {
    definicion(bot(), player);
}
