// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

let toDoItems= [];

/*var toDoItems=[]; //creamos el array solicitando*/


// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:

/*const creditos = document.getElementById("createdBy"); //creamos una constante con el valor obtenido de getElementById.
creditos.innerHTML+= " Moisés Lugo";*/

const agregarAutor= document.querySelector("#createdBy").innerHTML+=" Moisés Lugo"


/*
const div = document.querySelector('#createdBy').innerHTML+=" Moises Lugo";
div.innerHTML+=" Moisés Fernando Lugo"///puede hacerse todo en una linea comos e meustra mas arriba o de esta forma
*/

// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

class ToDo { 
  // Tu código acá:
constructor (desc){
this.description= desc;
this.complete=false;
}
completeToDo(){
  return this.complete=true;
}

}


// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo// se refiere a la clase constructora
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'//LISTO
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'//Listo
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'//listo
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.//listo
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento//listo
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) {//"todo" sería un objeto de la clase constructora.
     // Tu código acá:
  

  const toDoShell= document.createElement("div");// se crea un elemento div
  toDoShell.className= toDoShell;//se le asigna la clase toDoShell con método del objeto .className 
  const toDoText = document.createElement("span");//Se crea el elemento span.
  toDoText.innerHTML=todo.description;//Se le asigna la descripicon pasada por parametro al span.
  toDoText.id=index;//asigno el parametro pasado por index comoel id del span toDoText.
  if(complete===true){toDoText.className="completeText"};//si complete es verdadero asignarle a toDoText la clase completeText
  toDoShell.appendChild(toDoText);//le agregamos a el div toDoShell el hijo toDoShell
  return toDoShell; //
  

  /*
  var toDoShell = document.createElement('div');//creamos un elemento con le metodo createElement y se lo asignamos a la variable toDoShell Shell 
  toDoShell.className = 'toDoShell';//Le agregamos a la variable toDoShell la clase toDoShell por medio de dot notation y la propiedad className.
  var toDoText = document.createElement('span');//creamos una variable toDoText a la cual le vamos a asingmar ocmo valor el elemento html "span"
  toDoText.innerHTML = todo.description;//seteamos el texto que está dentro de la variable toDoText mediante el metodo unner html que cambia o establece nuevo texto. El texto a insertar será definid por la instancia de la clase constructora ToDO y su parametro descripcion.
  //toDoText.setAttribute('id', index);//Esta es otra manera de hacerlo
  toDoText.id=index//Si no hago esta linea igual pasa el codigo
  if(ToDo.complete === true) {//Si la propiedad (atributo) complete en el objeto de la clase ToDo es true entramos en el if
    toDoText.className = 'completeText';//Y asignamos el nombre de la clase completeText a toDoText 
  }
  toDoShell.appendChild(toDoText);//agregar a la variable toDoShell un nodo hijo que es la variable toDoText.
  return toDoShell; //retorna toDOShell
  */

}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo//ok
// Recibirá como parámetro un array de objetos ToDo//ok
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {//Esta funcion construye la lista en forma de array de las cosas por hacer. Recibe un array y lo recorremos con map
  // Tu código acá:

  return toDos.map(function (item, idx) {
    return buildToDo(item, idx);
  });
  
}


// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionar el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'//Listo
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")//Listo
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems //listo
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'//listo
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:
/*
  let toDoContainer = document.querySelector("#toDoContainer");
  toDoContainer.innerHTML="";
  //buildToDos(toDoItems);
  buildToDos(toDoItems).forEach(function(todo){
    toDoContainer.appendChild(todo)
  });
*/
  
  
  /*
  let toDoContainer = document.querySelector("#toDoContainer");
  toDoContainer.innerHTML = "";
  buildToDos(toDoItems).forEach(function (todo) {
  toDoContainer.appendChild(todo);
  });
  */

}


// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro//listo
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Tu código acá:
let input= document.getElementById("toDoInput")
let newToDo = new ToDo(input.value);
toDoItems.push(newToDo);
input.value="";
displayToDos();
  
/*
  let input = document.getElementById("toDoInput");//buscamos el elemento por su id y lo guardamos en la variable input

  let newToDo = new ToDo(input.value);//Este es el punto 2 de la lista de tareas. Creamos una nueva instancia del objeto ToDo y la guardamos en variable 
  toDoItems.push(newToDo);//empujamos el nuevo objeto instanciado en el array de cosas por hacer toDoItems
  input.value = "";//fijamos el valor de la propiedad input como un string vacio.

  displayToDos();//Invocamos la funcion displayToDos

  */

}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'//listo
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:
/*let button= document.querySelector("#addbutton");
button.addEventListener("click", addToDo);
*/

let button = document.getElementById("addButton");//Seleccionamos el elemento buscandolo por su id y se lo asignamos a la variable button
button.addEventListener("click", addToDo);//le agregamos el event listener a la variable creada


// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
 
  const index = event.target.id;//linea descomentada que se encarga de ejecutar varias funciones mencionadas arriba
  // Tu código acá:
  ToDoItems[index].completeToDo();//Con bracket notation por ser una varable que pasaremos por parametro del constructor ToDo ejecutamos el metodo toDo
  displayToDos();//Desplegamos la lista de toDo


}

// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'
displayToDos();



// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
