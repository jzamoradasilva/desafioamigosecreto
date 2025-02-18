let ListaAmigo = [];
const nombreInput = document.getElementById("amigo");
const amigosListados = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
});


function mostrarAmigos() {
    amigosListados.innerHTML = '';
    ListaAmigo.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        amigosListados.appendChild(item);
    });
    console.log(ListaAmigo[2])
}



function agregarAmigo() {
    let nombre = nombreInput.value.trim();
    if (nombre == '') {
        alert("Por favor, inserte un nombre");
        return;
    }
    ListaAmigo.push(nombre);
    nombreInput.value = '';
    mostrarAmigos();

}

function sortearAmigo() {
    if (ListaAmigo.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * ListaAmigo.length);
    let amigoSorteado = ListaAmigo[indiceAleatorio];

    resultadoSorteo.innerHTML = `El amigo secreto es ${amigoSorteado}`;
}
