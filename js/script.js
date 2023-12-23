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

//---//

//RELOJ

//Extracción de los segundos, minutos, horas y mensaje
const obtenerSegundos = document.getElementById('segundos')
const obtenerMinutos = document.getElementById('minutos')
const obtenerHoras = document.getElementById('horas')

function hora(){

    //Función nueva fecha
    var fechaActual = new Date();
    const fecha = document.getElementById('fecha')
    
    //Definimos los días y los meses
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']; 
    
    //Imprimimos el encabezado
    fecha.innerHTML = (dias[fechaActual.getDay()] + ', ' + fechaActual.getDate() + ' ' + meses[fechaActual.getMonth()] + ' ' +fechaActual.getFullYear());
    
    var horas = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    horas = horas<10? '0'+horas: horas
    minutos = minutos<10? '0'+minutos: minutos
    segundos = segundos<10? '0'+segundos: segundos           

    obtenerHoras.innerHTML = horas;
    obtenerMinutos.innerHTML = minutos;
    obtenerSegundos.innerHTML = segundos;

}

var inter = setInterval (hora,1000);

//---//

//CONTRASEÑAS

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

//--//

//ENLACES

window.onload = function() {
    cargarEnlaces();
}

function cargarEnlaces() {
    const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
    const contenedor = document.getElementById('lista-enlaces');
    contenedor.innerHTML = ''
    
    enlaces.forEach(enlace => {
        añadirContenido(enlace.título, enlace.url);
    });
}

function añadirContenido(título, url) {
    const contenedor = document.getElementById('lista-enlaces');

    const divEnlace = `
        <div class='enlace'>
            <a href="${url}">${título}</a>
        </div>
    `;
    
    contenedor.innerHTML += divEnlace;
}

//TIEMPO//

const api = 'd024a2453e3249fdbe1173459232112';

//No funciona con toes, hay que concretar el país a vecess también
const ciudad = 'Oviedo';

async function imprimirTiempo() {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${ciudad}&aqi=no`);
    const data = await response.json();

    document.getElementById('tiempo-ciudad').textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById('tiempo-estado').textContent = data.current.condition.text;

    document.getElementById('icono-tiempo').src = data.current.condition.icon;
    
    document.getElementById('grados').textContent = data.current.temp_c;
    document.getElementById('precipitaciones').textContent = data.current.precip_mm;
    document.getElementById('humedad').textContent = data.current.humidity;
    document.getElementById('viento').textContent = data.current.wind_kph;
}

imprimirTiempo();