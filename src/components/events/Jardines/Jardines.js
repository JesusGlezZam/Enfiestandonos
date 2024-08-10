import React, { useState } from 'react'
import { Cards } from '../../shared/Cards';
import { paginateArray } from '../../../helpers/utils'; // Importa la función de paginado
import { jardinesData } from '../../../helpers/datosdummy'


const pageSize = 12; // Número total de elementos por página

export const Jardines = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const paginatedJardines = paginateArray(jardinesData.jardines, pageSize);

  // Funciones para cambiar la página
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, paginatedJardines.length - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Obtener las imágenes para la página actual
  const currentJardines = paginatedJardines[currentPage];

  // Secciones para mostrar
  const firstSection = currentJardines.slice(0, 6);
  const secondSection = currentJardines.slice(6);

  return (
    <div className='events'>
      {firstSection.length > 0 && <Cards items={firstSection} itemType="jardin" />}
      
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>Anterior</button>
        <button onClick={nextPage} disabled={currentPage === paginatedJardines.length - 1}>Siguiente</button>
      </div>
      
      <div className="advertisement">
        <h2>Publicidad</h2>
        <p>Este es el espacio para la publicidad.</p>
        <img src="ruta/a/tu/publicidad.jpg" alt="Publicidad" />
      </div>

      {secondSection.length > 0 && <Cards items={secondSection} itemType="jardin" />}
      
      {/* Controles de paginado */}
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>Anterior</button>
        <button onClick={nextPage} disabled={currentPage === paginatedJardines.length - 1}>Siguiente</button>
      </div>
     
    </div>
  );
}
