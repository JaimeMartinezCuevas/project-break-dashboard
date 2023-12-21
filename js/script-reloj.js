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

//--//

//Extracción de los segundos, minutos, horas y mensaje
const obtenerSegundos = document.getElementById('segundos')
const obtenerMinutos = document.getElementById('minutos')
const obtenerHoras = document.getElementById('horas')
const mensaje = document.getElementById('mensaje');

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

    mostrarMensaje(horas);
}

function mostrarMensaje(horas) {

    let frase = "";

    if (horas >= 0 && horas < 7) {
        frase = "Al platu vendrás arbeyu, si nun ye de xoven va ser de vieyu.";
    } else if (horas >= 7 && horas < 12) {
        frase = "Pégate un desayuno digno de campeones, y un javascript anti dormilones.";
    } else if (horas >= 12 && horas < 14) {
        frase = "En un rato comes, así que mete el turbo pero no te emociones.";
    } else if (horas >= 14 && horas < 16) {
        frase = "Se ve que quedaste fartuquín porque tas como un regodonín.";
    } else if (horas >= 16 && horas < 18) {
        frase = "Ya queda poco, pero tampoco olvides echarme un ojo.";
    } else if (horas >= 18 && horas < 22) {
        frase = "Llegó el comandante y mandó parar, que se te hace tarde y te me vas a sobar.";
    } else {
        frase = "A la cama que mañana se programa.";
    }

    mensaje.innerHTML = frase;
}

var inter = setInterval (hora,1000);