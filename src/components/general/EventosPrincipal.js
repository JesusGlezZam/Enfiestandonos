import React, { useState } from 'react';
import { Cards } from '../../shared/Cards';
import { paginateArray } from '../../../helpers/utils'; // Importa la función de paginado
import { jardinesData, infantilesData, salonesData } from '../../../helpers/datosdummy';

const pageSize = 12; // Número total de elementos por página

export const EventosPrincipal = ({ eventType }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Selección dinámica del conjunto de datos basado en el tipo de evento
  let eventData;
  switch (eventType) {
    case 'jardin':
      eventData = jardinesData.jardines;
      break;
    case 'infantil':
      eventData = infantilesData.infantiles;
      break;
    case 'salon':
      eventData = salonesData.salones;
      break;
    // Puedes agregar más casos para otros tipos de eventos
    default:
      eventData = [];
  }

  const paginatedItems = paginateArray(eventData, pageSize);

  // Funciones para cambiar la página
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, paginatedItems.length - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Obtener las imágenes para la página actual
  const currentItems = paginatedItems[currentPage];

  // Secciones para mostrar
  const firstSection = currentItems.slice(0, 6);
  const secondSection = currentItems.slice(6);

  return (
    <div className='events'>
      {firstSection.length > 0 && <Cards items={firstSection} itemType={eventType} />}
      
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>Anterior</button>
        <button onClick={nextPage} disabled={currentPage === paginatedItems.length - 1}>Siguiente</button>
      </div>
      
      <div className="advertisement">
        <h2>Publicidad</h2>
        <p>Este es el espacio para la publicidad.</p>
        <img src="ruta/a/tu/publicidad.jpg" alt="Publicidad" />
      </div>

      {secondSection.length > 0 && <Cards items={secondSection} itemType={eventType} />}
      
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>Anterior</button>
        <button onClick={nextPage} disabled={currentPage === paginatedItems.length - 1}>Siguiente</button>
      </div>
    </div>
  );
}
