import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [search, setSearch] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();//No realizar cambios si existe !!!
      onSearch(search);
    }}>
      <input 
        type="text"
        placeholder="Ciudad..."
        onChange={(e)=>setSearch(e.target.value)}
        value={search}//Ojo con este value
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
