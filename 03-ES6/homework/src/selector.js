var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];//aca se guardan todos los eleemntos que hacen match
  
  if (typeof startEl === "undefined") {
  startEl = document.body; //Asigna como primer nodo del DOM el body que es donde vamos a buscar los elementos
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien. Traducido:
  // recorrer el arbol y guardar en un array llamado resultSet los elementos que hagan juego. La funcion se llamará
  //matchFunc  

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);//Si el elemento start es true , empuja el valor startEl al array que devolveremos.

  for (let i = 0; i < startEl.children.length; i++) {// itera sobre todos los hijos hasta alcanzar su longitud
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);//children es un metodo de DOM
    resultSet = [...resultSet, ...result];//Uso de spread
  }

  return resultSet;
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
   if (selector[0]===".")return "class";//Condicion se el elemnto en el primer indice es igual a un punto sabemos que es una class.
  else if(selector[0]==="#")return "id";//Condición si el elemento en el primer indice es igual a un numeral sabemos que es un id.
  else if(selector.split(".").length>1)return "tag.class";//Podemos utilizar un include //Si hacemos split al selector en el punto y este tiene longitud mayor a 1 sabemos que es in tag.class
  else return "tag";// Si no es ninguna de las anteriores entonces tiene que ser un tag

/*Detctor de selelctores . Probar utilizar includes() en la linea 25*/   
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.
//En la siguiente closure la funcion matchFuncionMaker invoca a la funcion del ejercicio anterior y compara el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); //Asignamos a selector Type la funcion del ejercio anterior.
  var matchFunction;//creamos una variable que es la que vamos a retornar
  if (selectorType === "id") { // Condicion si la variable es decir la funcion del ejercicio anterior es igual a un id debe ejecutar la siguente arrow function.
    matchFunction= (element)=>"#"+element.id===selector;//a la variable matchFunction le asignamos La arrow function 
   
  } else if (selectorType === "class") {
    if (selectorType==="class"){
      matchFunction= (element)=> element.classList.contains(selector.substring(1));//En este caso se considera que un elemento puede contener 
      //varias clases por lo tanto lo que hacemos en nuestra arrow function utilizará classList 
      //con su propiedad "contains" y dentro de esta nos retorna el nombre de la clases sin el punto "." adelante.
      //Nota no concatenamos el "." antes de element.
    }
    
  } else if (selectorType === "tag.class") {//Si la condicion que queremos probar es tag.class
    matchFunction=(element)=>{//Hacemos function arrow con dos condiciones "&&" 
      const [tag, className]= selector.split(".")
      return element.tagName.toLowerCase()===tag.toLowerCase()&&element.classList.contains(className)
    } 
    
  } else if (selectorType === "tag") {
    matchFunction = (element) => element.tagName.toLowerCase()===selector.toLowerCase()
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
