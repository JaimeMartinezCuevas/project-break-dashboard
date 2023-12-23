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

}

setInterval(imprimirFondo, 20000);

imprimirFondo();

//--//

const btnGenerarContraseña = document.getElementById('generarContraseña')
const imprimirContraseña = document.getElementById('imprimirContraseña')
const controladorLongitud = document.getElementById('controlador-longitud')


function generarContraseña(longitud) {

    let contraseña = '';

    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let numeros = '0123456789';
    let simbolos = '!@#$%^&*()-_=+';

    //Juntamos todos los tipos de caracteres en un string
    let caracteres = mayusculas + minusculas + numeros + simbolos;

    if (longitud < 12) {
        return 'La contraseña debe tener una longitud mínima de 12 caracteres.';
    } else if (longitud > 50) {
        return 'La contraseña no puede exceder los 50 caracteres.';
    }

    //Aseguramos que siempre pase al menos un caracter de cada
    contraseña += mayusculas[Math.floor(Math.random() * mayusculas.length)];
    contraseña += minusculas[Math.floor(Math.random() * minusculas.length)];
    contraseña += numeros[Math.floor(Math.random() * numeros.length)];
    contraseña += simbolos[Math.floor(Math.random() * simbolos.length)];

    // Generar el resto de la contraseña
    while (contraseña.length < longitud) {
        const caracterRandom = caracteres[Math.floor(Math.random() * caracteres.length)]
        contraseña += caracterRandom
    }

    //Añadido para randomizar los caracteres y nun apaezcan en el orden mayus -> minus -> numeros -> simbolos
    contraseña = contraseña.split('').sort(() => Math.random() - 0.5).join('');

    return contraseña;
}

btnGenerarContraseña.addEventListener('click', () => {

    const longitud = controladorLongitud.value;
    const contraseña = generarContraseña(longitud);
    imprimirContraseña.innerHTML = `<p class='contraseña-generada'>${contraseña}</p>`;
    
});

// - Mayúsculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// - Minúsculas: "abcdefghijklmnopqrstuvwxyz"
// - Números: "0123456789"
// - Símbolos "!@#$%^&*()-_=+"