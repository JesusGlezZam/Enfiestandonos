import React from 'react';
import { CarruselServices } from '../shared/Inicio/CarruselServices.js';
import { haciendasData, infantilesData, salonesData, terrazasData } from '../../helpers/datosdummy.js';
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
      
      <h2 className='welcome'>Estos espacios únicos son el lugar perfecto para tu evento.</h2>
      <SectionCarrusel title="Jardines" type="jardin" items={jardinesData.jardines}  />
      <SectionCarrusel title="Salones Infantiles" type="infantil" items={infantilesData.infantiles} />

      <Publish imageKey="publicidad1" />

      <SectionCarrusel title="Salones" type="salon" items={salonesData.salones} />

      <SectionCarrusel title="Haciendas" type="hacienda" items={haciendasData.haciendas} />

      <SectionCarrusel title="Haciendas" type="terraza" items={terrazasData.terrazas} />

       <EventTypesList spaceType="jardin" />
 

    </div>

    
  );
};