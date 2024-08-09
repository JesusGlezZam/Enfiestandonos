import React from 'react';
import { CarruselServices } from '../shared/CarruselServices';
import { CarruselItems } from '../shared/CarruselItems';
import '../../styles/general/inicio.css';
import { SectionCarousel } from '../shared/SectionCarousel';
import { infantilesData, jardinesData } from '../../helpers/datosdummy.js';
import { Carrusel2 } from '../shared/Carrusel2.js';


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

      <SectionCarousel title="Jardines" items={jardinesData.jardines} />
    
      <CarruselItems/>  
      
       {/* Sección de Publicidad */}
       <div className="advertisement">
        <h2>Publicidad</h2>
        <p>Este es el espacio para la publicidad.</p>
        <img src="ruta/a/tu/publicidad.jpg" alt="Publicidad" />
      </div>

      <SectionCarousel title="Jardines" items={jardinesData.jardines} />

      <SectionCarousel title="Salones Infantiles" items={infantilesData.infantiles} />
      <Carrusel2 title="Jardines" items={jardinesData.jardines} />

      <Carrusel2 title="Jardines" items={jardinesData.jardines} />


      {/* Sección de Publicidad */}
      <div className="advertisement">
        <h2>Publicidad</h2>
        <p>Este es el espacio para la publicidad.</p>
        <img src="ruta/a/tu/publicidad.jpg" alt="Publicidad" />
      </div>
    </div>
  );
};