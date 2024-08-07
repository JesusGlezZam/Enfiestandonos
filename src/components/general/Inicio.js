import React from 'react';
import { CarruselServices } from '../shared/CarruselServices';
import { CarruselItems } from '../shared/CarruselItems';
import '../../styles/general/inicio.css';

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

      <CarruselServices/>
      <hr className="custom-hr" />
    
      <CarruselItems/>  

       {/* Sección de Publicidad */}
       <div className="advertisement">
        <h2>Publicidad</h2>
        <p>Este es el espacio para la publicidad.</p>
        <img src="ruta/a/tu/publicidad.jpg" alt="Publicidad" />
      </div>


    </div>
  );
};