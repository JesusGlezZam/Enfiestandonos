import React from 'react';
import { CarruselServices } from './CarruselServices.js';
import { TypeSectionCarrusel } from './TypeSectionCarrusel.js';
import { haciendasData, infantilesData, salonesData, terrazasData } from '../../helpers/datosdummy.js';
import { jardinesData } from '../../helpers/datosdummy2.js';
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
      <TypeSectionCarrusel title="Jardines" type="jardin" items={jardinesData.jardines}  itemType="jardin" />
      <TypeSectionCarrusel title="Salones Infantiles" type="infantil" items={infantilesData.infantiles}  itemType="infantil"/>

      <Publish imageKey="publicidad1" />

      <TypeSectionCarrusel title="Salones" type="salon" items={salonesData.salones}  itemType="salon" />

      <TypeSectionCarrusel title="Haciendas" type="hacienda" items={haciendasData.haciendas}  itemType="hacienda" />

      <TypeSectionCarrusel title="Terraza" type="terraza" items={terrazasData.terrazas}  itemType="terraza" />   
    </div>
  );
};