import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';

export default function App() {
  const [cities, setCities] = useState([]);//establecemos el estado
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'f9f30e85a3620f9348c6224619794461'}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

  
  return (
    <div className="App">
    <Nav onSearch={onSearch}/>
    <Cards cities={cities} onClose={function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));//elimina la ciudad con el id pasado por parametro por medio del filtrado
    }}/>
    </div>
  );
}

