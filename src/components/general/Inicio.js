import React from 'react';
import { CarruselServices } from '../shared/Inicio/CarruselServices.js';
import { haciendasData, infantilesData, salonesData, terrazasData } from '../../helpers/datosdummy.js';
import { jardinesData } from '../../helpers/datosdummy2.js';
import { SectionCarrusel } from '../shared/Inicio/SectionCarrusel.js';
import { Publish } from '../shared/Publish.js';

export const Inicio = () => {

  return (
    <div className="home">
      <header className="header-home">
        <h1>Bienvenido a Enfiestándonos</h1>
        <div className="search-bar">
          <input type="text" placeholder="Busca tu espacio ideal..." />
          <button type="button">Buscar</button>
        </div>
      </header>

      <CarruselServices/>
      <hr className="custom-hr" />
      
      <h2 className='welcome'>Estos espacios únicos son el lugar perfecto para tu evento.</h2>
      <SectionCarrusel title="Jardines" type="jardin" items={jardinesData.jardines}  itemType="jardin" />
      <SectionCarrusel title="Salones Infantiles" type="infantil" items={infantilesData.infantiles}  itemType="infantil"/>

      <Publish imageKey="publicidad1" />

      <SectionCarrusel title="Salones" type="salon" items={salonesData.salones}  itemType="salon" />

      <SectionCarrusel title="Haciendas" type="hacienda" items={haciendasData.haciendas}  itemType="hacienda" />

      <SectionCarrusel title="Terraza" type="terraza" items={terrazasData.terrazas}  itemType="terraza" />   
    </div>
  );
};