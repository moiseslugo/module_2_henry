/* La variable getAmigos esta declarada como la funion entera que se encargará de hacer las siguientes acciones:
1: Es una funcion flecha.
2:Utilizando sintaxis de Jquery crea la vvariable lista con la alternativa de getElementbyId del selector con el id lista.
3:Luego establecemos el metodo get de ajax con los dos parametrs necesarios, ruta y función callback.
4:dentro de la funcion de CB recorreremos el arreglo devuelto por el servidor.
5.A lo largo de la iteración iremos agregando con append una etiqueta de lista <li>
6.Dentro de la etiqueta <li> incorporamos el valor de la propiedad para poder llenar la lista.
7. Esta función sera reutilizada  alo largo del código.

*/
var fulano="A este";

var getAmigos= ()=>{
    var lista= $("#lista");//Asignamos mediante sintaxis de jquery el valor de lista que es igual getElementbyId
    lista.empty();// con metdo de jquery vaciamos la lista cada vez que se ejecuta el botón. 
    $.get("http://localhost:5000/amigos", res=>{
        for(var i=0; i<res.length; i++){
            lista.append(`<li>${res[i].name}</li> `)
        }
    })
}

/* continuación 
1. Con sintaxis de JS solicitamos tomomos el elemento con id boton (getElementById) y le agregamos le listener click
con la funcion getAmigos.
2. Con sintaxis jquery tomamos el input con el id search a la cual tambien le agregaremos un listener click.
3. Dentro de click lo asignamos las tareas a ejecutar las cuales son las siguentes:
4.Crea una variable id que tomará el valor del getElementById aplicandole el método de jquery (.val) que es equivalente a innerHtml.
5.Utilizamos el metodo get de AJAX, con los argumentos ruta y una funcion CB que recibe como argumento la respuesdta de servidor.
6.Ntemos que le hemos incorporado a la ruta el id del "amigo" en frma del valor obtenido de la variable id
7.La funcion CB ejecutará la siguiente accion:
8.Toma elemento por id (getElementById) en sintaxis jquery y l aplica el método .text que es similar a innerText con el valor 
    de la respuesta dada por el servidor en su propiedad name.
*/

$("#boton").click(getAmigos);
$("#search").click(()=>{
    var id= $("#input").val()// declaramos la variable con el valor recibido por getElementbyId de input luego con el método .val() obtenemos su value
    $.get(`http://localhost:5000/amigos/${id}`, res=>{//requerimos el objeto por medio de get concatenandole el id que ns da el numero del objeto dentro del arreglo, pasamos como segund parámetro una funcion que recibira el objeto 
        $("#amigo").text(res.name)//accedemos al id amigo donde mostraremos el valor obtenido con el método de jquery similar a innerHTML o innerTEXT
    
    })

});

/* Tercera parte del ejercicio.
1.Tomamos el valor del input llamado input select por su id, con sintaxis jquery, similar a getElementById
2.Aplicamos un listener clcik que ejecutar una función flecha que ejecutarálas siguientes funciones.
3.Creamos una variable cpn el valor tomado del inputDelete y su valor resultante de aplicar el método .val de JQUERY.
4. Creamos un método AJAX pra realizar el DELETE.
5. Asignamos los valores de los argumentos necesarios como ruta, tipo de acción y respuesta (success).
6. Success es una cunci¿n flecha que toma un elemento por su id y con el equivalente a innerHTML devuelve un texto.
7. Para mostra la lsita refrescada aplicamos la funcion inicialmente creada getAmigos().


*/
$("#delete").click(()=>{
    var id= $("#inputDelete").val();
    console.log(id.name);
       
    $.ajax({
        url:`http://localhost:5000/amigos/${id}`,
        type:"DELETE",
        success: res=>{
            $("#success").text("Eliminado " + fulano);
            getAmigos();
        }

    })
})