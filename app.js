//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto
//  y lo agregarán a una lista visible al hacer clic en "Adicionar".

//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
// un nombre de la lista y se mostrará en la página.



let intentos = 0;
let ListaAmigo = [];
let SortearAmigo = 0; 

function agregarAmigo (){
let nombre = document.getElementById("amigo").value;
ListaAmigo.push(nombre);
console.log(ListaAmigo);
}
