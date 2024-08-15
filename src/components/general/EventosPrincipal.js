import React, { useEffect, useState } from 'react';
import { Cards } from '../shared/Cards';
import { paginateArray } from '../../helpers/utils'; // Importa la función de paginado
import { infantilesData, salonesData } from '../../helpers/datosdummy';
import { jardinesData} from '../../helpers/datosdummy2';
import { Publish } from '../shared/Publish';
import { useLocation } from 'react-router-dom';


const pageSizeFirstSection = 6; // 6 elementos para la primera sección
const pageSizeSecondSection = 12; // 12 elementos por página para la segunda sección


export const EventosPrincipal = ({ eventType }) => {
  const location = useLocation();
    
  useEffect(() => {
      if (location.state?.scrollToTop) {
          window.scrollTo(0, 0);
      }
  }, [location]);


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

  const firstSectionItems = eventData.slice(0, pageSizeFirstSection);
  const remainingItems = eventData.slice(pageSizeFirstSection); // Restantes elementos después de los primeros 6

  const paginatedItems = paginateArray(remainingItems, pageSizeSecondSection);

  // Funciones para cambiar la página
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, paginatedItems.length - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  
  // Obtener las imágenes para la página actual
  const currentItems = paginatedItems[currentPage] || [];

  return (
    <div className='events-detail'>
      {/* Primera sección con 6 elementos */}
      {firstSectionItems.length > 0 && <Cards items={firstSectionItems} itemType={eventType} />}
      
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>Anterior</button>
        <span>Página {currentPage + 1} de {paginatedItems.length}</span>
        <button onClick={nextPage} disabled={currentPage === paginatedItems.length - 1}>Siguiente</button>
      </div>
      <Publish imageKey="publicidad1" />

      {/* Segunda sección con paginado para 12 elementos por página */}
      {currentItems.length > 0 && <Cards items={currentItems} itemType={eventType} />}
      
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>Anterior</button>
        <span>Página {currentPage + 1} de {paginatedItems.length}</span>
        <button onClick={nextPage} disabled={currentPage === paginatedItems.length - 1}>Siguiente</button>
      </div>

      <Publish imageKey="publicidad1" />
    </div>
  );
}
