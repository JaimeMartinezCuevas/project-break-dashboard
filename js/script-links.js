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

document.getElementById('añadir-enlace').addEventListener('click', añadirEnlace);

//Cuando carga la página el cargarEnlaces se encarga de que mostrar los enlaces
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

    //No sabía que se podía pero puedo agregar eventos click en HTML
    //así que de esta forma se puede ejecutar eliminar enlace directamente
    const divEnlace = `
        <div class='enlace'>
            <a href="${url}">${título}</a>
            <button onclick="eliminarEnlace('${título}')">Eliminar</button>
        </div>
    `;
    
    contenedor.innerHTML += divEnlace;
}

function añadirEnlace() {
    const título = document.getElementById('nombre').value;
    const url = document.getElementById('enlace').value;
    
    if (título && url) {
        añadirContenido(título, url);

        //Este es el bloque que guarda en el local store el enlace que generemos
        const enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
        enlaces.push({ título, url });
        localStorage.setItem('enlaces', JSON.stringify(enlaces));

        //Borramos tosos los valores
        document.getElementById('nombre').value = '';
        document.getElementById('enlace').value = '';
    } else {
        alert('Por favor, introduce un nombre y una dirección.');
    }
}


function eliminarEnlace(título) {
    //Traemos el valor del local store y parseamos
    const enlaces = JSON.parse(localStorage.getItem('enlaces'))

    //Filtramos el enlace para eliminar por el título
    const enlacesActualizados = enlaces.filter(enlace => enlace.título !== título);
    localStorage.setItem('enlaces', JSON.stringify(enlacesActualizados));
    
    cargarEnlaces();
}

//Limpiamos la lista
document.getElementById('limpiar-lista').addEventListener('click', eliminarEnlaces)

function eliminarEnlaces() {
    localStorage.removeItem('enlaces');
    
    const contenedor = document.getElementById('lista-enlaces');
    contenedor.innerHTML = '';
}
