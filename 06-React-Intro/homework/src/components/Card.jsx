import React from 'react';
import style from "./Card.module.css"
//exprtamos la tarjeta pra que la utilice app.js
export default function Card(props) {
  // acá va tu código
  return <div className={style.container}>
    
     <div className={style.exit}><button className={style.btn} onClick={props.onClose}>cerrar</button></div> 
      <h1 className={style.ciudad}>{props.name}</h1>
      
    <div className={style.data}>
    <p>Min</p>
    <h4>{props.min}</h4>
    <p>Máx</p>
    <h4>{props.max}</h4>
    </div>
    <img className={style.clima} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="icono clima"/>
          </div>
};