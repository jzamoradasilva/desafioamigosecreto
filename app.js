let ListaAmigo = [];
const nombreInput = document.getElementById("amigo");

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        agregarAmigo();
      }
    });
});

  

function agregarAmigo (){
    let nombre = nombreInput.value.trim();
if(nombre == ''){
    alert("Por favor, inserte un nombre");

}else{
    ListaAmigo.push(nombre);
    console.log(ListaAmigo);
    nombreInput.value = '';
}

}
