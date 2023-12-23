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

    //Lista de temperatures
    const previsionHoraria = document.getElementById('lista-prevision');
    data.forecast.forecastday[0].hour.forEach(hour => {
        const prevision = document.createElement('div');
        prevision.className = 'container-prevision';
        prevision.innerHTML = 
        `
            <img src="${hour.condition.icon}" alt="${hour.condition.text}">
            <p>${hour.time.slice(11, 16)}</p>
            <span class='separador'>|</span>
            <p>${hour.temp_c}°C</p>
        `;
        previsionHoraria.appendChild(prevision);
    });
}

imprimirTiempo();