import React from 'react';
import Search from './Search.module.css'


export default function SearchBar({onSearch}) {
  // acá va tu código
  
  const buscar=()=>{
  const inputSearch= document.querySelector("#inputSearch")
  onSearch(inputSearch.value)

  }
  
  return <div className={Search.container}>
    <input  id="inputSearch" type="text" placeholder='Ciudad'/>
    <button className={Search.buscar} onClick={buscar}>Search</button>
  </div>
};