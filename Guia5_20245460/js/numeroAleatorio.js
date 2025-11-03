// Generamos un numero aleatorio que se encuentre en el rango del 1 al 25 
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
const numeroIntentos = 3;
let intentos = 1;

function generarNumeroAleatorio() {
    let mensaje;
    const parrafo = document.querySelector("#idParrafo");

    if (intentos <= numeroIntentos) {
        // Convertimos la entrada del usuario a número
        let numero = Number(prompt("¿Qué número se ha generado? (Intento " + intentos + ")"));

        if (numero === numeroAleatorio) {
            mensaje = `¡Es sorprendente! Pudiste adivinar el número oculto (${numeroAleatorio}). 
            Refresque la página para volver a jugar.`;
        } else if (intentos === numeroIntentos) {
            mensaje = `Su número de intentos ha terminado. 
            El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        } else {
            // Aquí van las pistas de más alto o más bajo
            if (numero < numeroAleatorio) {
                mensaje = `Vuelve a intentar. El número oculto es más alto. 
                Quedan ${numeroIntentos - intentos} intentos.`;
            } else if (numero > numeroAleatorio) {
                mensaje = `Vuelve a intentar. El número oculto es más bajo. 
                Quedan ${numeroIntentos - intentos} intentos.`;
            }
        }

        intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. 
        El número oculto era ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    }

    parrafo.innerHTML = mensaje;
}
