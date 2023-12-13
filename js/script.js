console.log('Hola mundu')

//FONDO FOTOS ALEATORIES
//Necesito un array, una función que recorra el array con un math random y que en base a la longitud del array,
//de un número, que coincidirá con el índice de una de las fotos.
//Luego se imprimirá nel fondu y con el set interval podré establecer la duración

const fondo = document.getElementById('fondo');

const fotos = [
    './img/bosque.jpg',
    './img/carreta.jpg',
    './img/desierto.jpg',
    './img/puente.jpg',
    './img/bisonte.jpg',
];

let fotoAnterior = '';

function imprimirFondo() {

    //Nombramos una variable que guarde el índce de les semeyes
    let fotoAleatoria;
    
    //El do while sirve para que la foto no se repita, porque si se diese el caso,
    //el bucle volvería a general un índice hasta que este fuera diferente.
    do {

        //Generamos la aleatoriedad en base a los índices del array
        fotoAleatoria = Math.floor(Math.random() * fotos.length);
    } while (fotoAnterior === fotos[fotoAleatoria]);
    
    //Guardamos el índice en la valiable
    fotoAnterior = fotos[fotoAleatoria];
    fondo.style.backgroundImage = 'url(' + fotoAnterior + ')';

    console.log(fotoAleatoria); //--> Quitalo
}

setInterval(imprimirFondo, 20000);

imprimirFondo();

//PROBLEMES

//  PONER UN EFECTU DE DISOLUCIÓN o asemeyao
//  (RESUELTO)  A vegaes ponse munches veces la mesma foto, igual fago un bucle