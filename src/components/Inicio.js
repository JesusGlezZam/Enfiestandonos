import React from 'react';
import { FeatureSlider } from '../helpers/FeatureSlider';
import { Carrusel2 } from '../helpers/Carrusel2';
import { Carrusel3 } from '../helpers/Carrusel3';

export const Inicio = () => {
  return (
    <div className="inicio">
      <header className="header">
        <h1>Bienvenido a Enfiestándonos</h1>
        <div className="search-bar">
          <input type="text" placeholder="Busca tu espacio ideal..." />
          <button type="button">Buscar</button>
        </div>
      </header>
      <FeatureSlider/><br/>
     {/*<Carrusel/>*/}
      <Carrusel2/>
      <Carrusel3/>
      
    </div>
  );
};
