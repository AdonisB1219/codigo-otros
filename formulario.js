//Este código se ejecuta con un evento. Primero, si el formulario tiene el evento onsubmit, se hace una validación 
//de que los campos se hayan llenado correctamente. Si así es, se llama a la función agregrInvitado, que recibe los 
//valores de los inputs y el selector. Ahí se crea un div que se agrega al div del html con id "lista-de-invitados"
//Al div creado se le agrega cada input mediante la función crearElemento y se agrega un botón que también tiene 
//un evento, al presionarlo, se elimina ese div.

//Cambié el selector de id por uno de la etiqueta
var formulario = document.querySelector("form")

formulario.onsubmit = function(e) {
//No estaba bien escrito, cambié "default" por "preventDefault"
  e.preventDefault();
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  nombre = "";
  edad = "";
  }

}

//Hice una función para crear el botón para borrar y eliminé el código anterior del botón que no se usaba
function crearBoton(elementoLista){
  var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);
return botonBorrar;
}

//Saqué esta función de la función agregarInvitado
function crearElemento(descripcion, valor, elementoLista) {
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  }

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
//Cambié el método addClass por add
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

//Eliminé 8 lineas porque hacia que se repitiera el nombre, y la llamada a la función crearElemento("Nombre", nombre)

//Hice la función crearElemento independiente a esta función
crearElemento("Nombre", nombre, elementoLista)
crearElemento("Edad", edad, elementoLista)
crearElemento("Nacionalidad", nacionalidad, elementoLista)

//Puse el código de aquí en una función
botonBorrar = crearBoton(elementoLista)

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}