import React, { useState } from 'react' // Asegúrate de la ruta correcta
import { List } from './List';

// Función para capitalizar la primera letra de un texto
const capitalizeFirstLetter = (text) => {
  if (typeof text !== 'string') return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};


export const PromotionSections  = ({ data }) => {
    // Estado para gestionar las secciones abiertas
    const [openSections, setOpenSections] = useState([]);
  
    // Estado para gestionar los ítems seleccionados en cada subsección
    const [selectedItems, setSelectedItems] = useState({});
  
    // Función para alternar la visibilidad de las secciones del menú
    const handleToggleSection = (sectionIndex) => {
      setOpenSections(prevOpenSections =>
        prevOpenSections.includes(sectionIndex)
          ? prevOpenSections.filter(index => index !== sectionIndex) // Cerrar la sección si ya está abierta
          : [...prevOpenSections, sectionIndex] // Abrir la sección si no está abierta
      );
    };
  
    // Función para gestionar el cambio de selección de los ítems (checkboxes)

  
    return (
      <div className="promociones">
        <h2 className="promociones-title">Paquetes</h2>
        {data.paquetes.map((section, index) => (
          <div key={index} className="type-list menu-section package">
            {/* Título de la sección con un manejador de clic para alternar su visibilidad */}
            <h2
              onClick={() => handleToggleSection(index)}
              className="section-title"
              style={{ cursor: 'pointer' }}
            >
              <span className="capitalize-first-letter">
                {capitalizeFirstLetter(section.seccion || section.section)}
              </span>
            </h2>
            {openSections.includes(index) && (
              <div className="section-content">
                {/* Mostrar subsecciones si existen */}
                {section.subSections && Object.keys(section.subSections).map(subSectionKey => (
                  <div key={subSectionKey} className="sub-section">
                    {/* Título de la subsección con primera letra capitalizada */}
                    <h3 className="capitalize-first-letter">
                      {capitalizeFirstLetter(subSectionKey)}
                    </h3>
                    <List
                      items={section.subSections[subSectionKey].map(capitalizeFirstLetter)} // Capitalizar cada ítem en la subsección
                      selectedItems={selectedItems[subSectionKey] || []} // Ítems seleccionados en la subsección
                      itemType={subSectionKey} // Tipo de ítem basado en el nombre de la subsección
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };