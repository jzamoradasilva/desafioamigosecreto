let ListaAmigo = [];
const nombreInput = document.getElementById("amigo");
const amigosListados = document.getElementById("listaAmigos");

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        agregarAmigo();
      }
    });
});


function mostrarAmigos(){
    amigosListados.innerHTML = '';
    ListaAmigo.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        amigosListados.appendChild(item);
    });
}



function agregarAmigo (){
    let nombre = nombreInput.value.trim();
if(nombre == ''){
    alert("Por favor, inserte un nombre");

}else{
    ListaAmigo.push(nombre);
    nombreInput.value = '';
    console.log(ListaAmigo);
    mostrarAmigos();
}

}