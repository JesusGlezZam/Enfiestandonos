import React, { useEffect, useState } from 'react';
import { Cards } from '../shared/Cards';
import { paginateArray } from '../../helpers/utils'; // Importa la función de paginado
import { haciendasData, infantilesData, salonesData, terrazasData } from '../../helpers/datosdummy';
import { jardinesData } from '../../helpers/datosdummy2';
import { Publish } from '../shared/Publish';
import { useLocation } from 'react-router-dom';

const pageSizeFirstSection = 6; // 6 elementos para la primera sección
const pageSizeSecondSection = 12; // 12 elementos por página en la segunda sección
const maxVisiblePages = 6; // Máximo de páginas visibles en la paginación

export const EventosPrincipal = ({ eventType }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0); // Página actual
  const [pageWindowStart, setPageWindowStart] = useState(0); // Inicio de la ventana de páginas visibles

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
    case 'hacienda':
        eventData = haciendasData.haciendas;
        break; 
    case 'hacienda':
          eventData = terrazasData.terraza;
    break;     
    default:
      eventData = [];
  }

  // Calcular el total de elementos
  const totalItems = eventData.length;

  // Calcular el total de páginas
  const totalPages = Math.ceil(totalItems / (pageSizeFirstSection + pageSizeSecondSection));

  // Función para obtener los elementos de la primera sección en la página actual
  const getFirstSectionItems = () => {
    const startIndex = currentPage * (pageSizeFirstSection + pageSizeSecondSection);
    return eventData.slice(startIndex, startIndex + pageSizeFirstSection);
  };

  // Función para obtener los elementos de la segunda sección en la página actual
  const getSecondSectionItems = () => {
    const startIndex = currentPage * (pageSizeFirstSection + pageSizeSecondSection);
    const remainingItems = eventData.slice(startIndex + pageSizeFirstSection);
    const paginatedItems = paginateArray(remainingItems, pageSizeSecondSection);
    return paginatedItems[0] || [];
  };

  // Obtener los elementos para la primera y segunda sección
  const firstSectionItems = getFirstSectionItems();
  const secondSectionItems = getSecondSectionItems();

  // Funciones para cambiar la página
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page < pageWindowStart || page >= pageWindowStart + maxVisiblePages) {
      setPageWindowStart(Math.max(0, page - Math.floor(maxVisiblePages / 2)));
    }
    window.scrollTo(0, 0); // Desplazar a la parte superior
  };

  // Función para generar los botones de página
  const generatePageButtons = () => {
    const buttons = [];
    const start = pageWindowStart;
    const end = Math.min(pageWindowStart + maxVisiblePages, totalPages);
    for (let i = start; i < end; i++) {
      buttons.push(
        <button
          key={i}
          className={`page-button ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };

  // Función para manejar la navegación de páginas
  const nextPage = () => {
    setCurrentPage(prevPage => {
      const newPage = Math.min(prevPage + 1, totalPages - 1);
      handlePageChange(newPage);
      return newPage;
    });
  };

  const prevPage = () => {
    setCurrentPage(prevPage => {
      const newPage = Math.max(prevPage - 1, 0);
      handlePageChange(newPage);
      return newPage;
    });
  };

  return (
    <div className='events-detail'>
      {/* Mostrar controles de paginación solo si hay más de una página */}
      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            className="pagination-button"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            Anterior
          </button>
          {generatePageButtons()}
          <button
            className="pagination-button"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            Siguiente
          </button>
        </div>
      )}

      {/* Primera sección con 6 elementos */}
      {firstSectionItems.length > 0 && <Cards items={firstSectionItems} itemType={eventType} />}
      
      {/* Publicidad siempre visible después de los primeros 6 elementos */}
      <Publish imageKey="publicidad1" />

      {/* Segunda sección con paginado para 12 elementos por página */}
      {secondSectionItems.length > 0 && <Cards items={secondSectionItems} itemType={eventType} />}
      
      {/* Mostrar controles de paginación solo si hay más de una página */}
      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            className="pagination-button"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            Anterior
          </button>
          {generatePageButtons()}
          <button
            className="pagination-button"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            Siguiente
          </button>
        </div>
      )}

      {/* Mostrar leyenda si no hay elementos disponibles */}
      {totalItems === 0 && (
        <div className="no-more-items">No contamos por el momento con espacios para tu evento.</div>
      )}
    </div>
  );
};
