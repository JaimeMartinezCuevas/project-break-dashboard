console.log('Hola mundu')

//FONDO FOTOS ALEATORIES
//Necesito un array, una función que recorra el array con un math random y que en base a la longitud del array,
//de un número, que coincidirá con el índice de una de las fotos.
//Luego se imprimirá nel fondu y con el set interval podré establecer la duración

const body = document.getElementById('body');

const fotos = [
    './img/bosque.jpg',
    './img/carreta.jpg',
    './img/desierto.jpg',
    './img/puente.jpg',
    './img/bisonte.jpg',
];

let fotoAnterior = '';

function imprimirFondo() {
    let fotoAleatoria;
    do {
        fotoAleatoria = Math.floor(Math.random() * fotos.length);
    } while (fotoAnterior === fotos[fotoAleatoria]);

    fotoAnterior = fotos[fotoAleatoria];
    body.style.backgroundImage = 'url(' + fotoAnterior + ')';
    console.log(fotoAleatoria);
}

setInterval(imprimirFondo, 5000);

imprimirFondo();

//PROBLEMES

//A vegaes ponse munches veces la mesma foto, igual fago un bucle 