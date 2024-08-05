import React from 'react';
import Carrusel from '../helpers/Carrusel';

export const Inicio = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Bienvenido a Enfiestándonos</h1>
        <div className="search-bar">
          <input type="text" placeholder="Busca tu espacio ideal..." />
          <button type="button">Buscar</button>
        </div>
      </header>

      <Carrusel/> 

      

     
           
    </div>
  );
};