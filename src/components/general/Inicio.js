import React from 'react';
import { CarruselServices } from '../shared/Inicio/CarruselServices.js';
import { infantilesData, salonesData } from '../../helpers/datosdummy.js';
import { jardinesData } from '../../helpers/datosdummy2.js';
import { SectionCarrusel } from '../shared/Inicio/SectionCarrusel.js';
import { EventTypesList } from '../shared/EventTypesList.js';
import { Publish } from '../shared/Publish.js';

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
      

      <SectionCarrusel title="Jardines" items={jardinesData.jardines}  />
      <SectionCarrusel title="Salones Infantiles" items={infantilesData.infantiles} />

      <Publish imageKey="publicidad1" />

      <SectionCarrusel title="Salones" items={salonesData.salones} />

      <EventTypesList spaceType="jardin" />


    </div>

    
  );
};