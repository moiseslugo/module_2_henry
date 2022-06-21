//Eliminamos la IIFE
//function (){

  //var whiteboard = window.whiteboard;//Debo eliminar esta linea, fue sustituida con const whiteboard
  
  //var socket = window.io(window.location.origin);//Debo elominar esta linea de codigo porque hemos expuesto esta variable en las lineas de abajo

  const whiteboard = require("./whiteboard");// creamos la variable whiteboard con requier desde su path
  var io= require("socket.io-client");// Sin path porque esta en node;
  //var socket= io(window.location.origin);//asignamos a socket lo que requerimos en la linea anterior
  
  socket.on('connect', function () {
    console.log('Connected!');
  });

  socket.on('load', function (strokes) {

    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });

  });

  socket.on('draw', function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on('draw', function (start, end, color) {
    socket.emit('draw', start, end, color);
  });

  //ciere de la autoinvocada fue eliminada.


