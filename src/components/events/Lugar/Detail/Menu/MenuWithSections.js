import React, { useState } from "react";
import PropTypes from "prop-types";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IconList } from "./IconList";



// Función para capitalizar la primera letra de un texto
const capitalizeFirstLetter = (text) => {
  if (typeof text !== 'string') return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const MenuWithSections = ({ data }) => {
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



  return (
    <div className="menu">
      <h2 className="menu-title along-menu">Menú</h2>
      {data.menu.map((section, index) => (
        <div key={index} className="type-list along-section">
          {/* Título de la sección con un manejador de clic para alternar su visibilidad */}
          <h2
            onClick={() => handleToggleSection(index)}
            className="section-title"
            style={{ cursor: 'pointer' }}
          >
            <div className="with-sections-alonge">
              {section.seccion || section.section}
            </div>
            <GiForkKnifeSpoon className={`icon-menu-along ${openSections.includes(index) ? 'icon-expanded-along' : 'icon-collapsed-along'}`} />
          </h2>
          {openSections.includes(index) && (
            <div className="section-content-along">
              {/* Mostrar subsecciones si existen */}
              {section.subSections && Object.keys(section.subSections).map(subSectionKey => (
                <div key={subSectionKey} className="sub-section-along">
                  {/* Título de la subsección con primera letra capitalizada */}
                  <h3 className="capitalize-first-letter">
                   {subSectionKey}
                  </h3>
                  <IconList
                    items={section.subSections[subSectionKey].map(capitalizeFirstLetter)} // Capitalizar cada ítem en la subsección
                    itemType={subSectionKey} // Tipo de ítem basado en el nombre de la subsección
                    className="list-bullet" // Clase CSS para estilizar la lista
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

// Validación de las propiedades del componente
MenuWithSections.propTypes = {
  data: PropTypes.shape({
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        seccion: PropTypes.string,
        section: PropTypes.string,
        subSections: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)), // Las subsecciones se representan como un objeto donde cada clave es un nombre de subsección y el valor es una lista de ítems
      })
    ).isRequired,
  }).isRequired,
};

export default MenuWithSections;
