import React from 'react';
import { CarruselServices } from '../shared/CarruselServices';
import '../../styles/general/inicio.css';
import { infantilesData, jardinesData, salonesData } from '../../helpers/datosdummy.js';
import { Carrusel2 } from '../shared/Carrusel2.js';
import { EventTypesList } from '../shared/EventTypesList.js';


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
      <EventTypesList spaceType="jardin" />

      <Carrusel2 title="Jardines" items={jardinesData.jardines} />

      <Carrusel2 title="Salones Infantiles" items={infantilesData.infantiles} />


      {/* Sección de Publicidad */}
      <div className="advertisement">
        <h2>Publicidad</h2>
        <p>Este es el espacio para la publicidad.</p>
        <img src="ruta/a/tu/publicidad.jpg" alt="Publicidad" />
      </div>

      <Carrusel2 title="Salones" items={salonesData.salones} />

      <Carrusel2 title="Salones Infantiles" items={infantilesData.infantiles} />
    </div>

    
  );
};